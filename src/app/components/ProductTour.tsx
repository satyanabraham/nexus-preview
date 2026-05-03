import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TourStep {
  target: string;
  title: string;
  description: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

interface ProductTourProps {
  steps: TourStep[];
  onComplete?: () => void;
  onSkip?: () => void;
}

export function ProductTour({ steps, onComplete, onSkip }: ProductTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!isActive || !steps[currentStep]) return;

    const target = document.querySelector(steps[currentStep].target);
    if (target) {
      const rect = target.getBoundingClientRect();
      setTargetPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      });

      // Scroll target into view
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentStep, isActive, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    setIsActive(false);
    setCurrentStep(0);
    onComplete?.();
  };

  const handleSkip = () => {
    setIsActive(false);
    setCurrentStep(0);
    onSkip?.();
  };

  const startTour = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  const getTooltipPosition = () => {
    const placement = steps[currentStep]?.placement || 'bottom';
    const offset = 20;

    switch (placement) {
      case 'top':
        return {
          top: targetPosition.top - offset,
          left: targetPosition.left + targetPosition.width / 2,
          transform: 'translate(-50%, -100%)',
        };
      case 'bottom':
        return {
          top: targetPosition.top + targetPosition.height + offset,
          left: targetPosition.left + targetPosition.width / 2,
          transform: 'translate(-50%, 0)',
        };
      case 'left':
        return {
          top: targetPosition.top + targetPosition.height / 2,
          left: targetPosition.left - offset,
          transform: 'translate(-100%, -50%)',
        };
      case 'right':
        return {
          top: targetPosition.top + targetPosition.height / 2,
          left: targetPosition.left + targetPosition.width + offset,
          transform: 'translate(0, -50%)',
        };
      default:
        return {
          top: targetPosition.top + targetPosition.height + offset,
          left: targetPosition.left + targetPosition.width / 2,
          transform: 'translate(-50%, 0)',
        };
    }
  };

  return (
    <>
      {/* Start Tour Button */}
      {!isActive && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={startTour}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        >
          <Play className="w-5 h-5" />
          <span>Take Product Tour</span>
        </motion.button>
      )}

      {/* Tour Overlay */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
              onClick={handleSkip}
            />

            {/* Spotlight on target */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed z-40 pointer-events-none"
              style={{
                top: targetPosition.top,
                left: targetPosition.left,
                width: targetPosition.width,
                height: targetPosition.height,
                boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)',
                borderRadius: '8px',
              }}
            />

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed z-50 bg-white rounded-lg shadow-2xl p-6 max-w-md"
              style={getTooltipPosition()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="text-xs text-green-600 font-bold uppercase tracking-wider mb-1">
                    Step {currentStep + 1} of {steps.length}
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {steps[currentStep]?.title}
                  </h3>
                </div>
                <button
                  onClick={handleSkip}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {steps[currentStep]?.description}
              </p>

              {/* Progress Dots */}
              <div className="flex items-center gap-2 mb-6">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? 'bg-green-500 w-8'
                        : index < currentStep
                        ? 'bg-green-300 w-2'
                        : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-semibold">Previous</span>
                </button>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <span>{currentStep === steps.length - 1 ? 'Finish' : 'Next'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
