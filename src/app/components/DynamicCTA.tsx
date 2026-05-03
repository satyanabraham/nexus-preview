import { useState } from 'react';
import { ArrowRight, X, Calendar, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gradient' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  animated?: boolean;
  className?: string;
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  animated = true,
  className = '',
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 font-bold transition-all duration-300 group';
  
  const variantClasses = {
    primary: 'bg-green-500 hover:bg-green-600 text-black hover:shadow-lg hover:shadow-green-500/50',
    secondary: 'bg-white hover:bg-gray-100 text-black border-2 border-gray-300 hover:border-green-500',
    gradient: 'bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black hover:shadow-lg hover:shadow-green-500/50',
    glow: 'bg-gradient-to-r from-green-400 to-emerald-500 text-black shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/70 animate-pulse-glow',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
      {animated && (
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      )}
    </>
  );

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

interface FloatingCTAProps {
  onDemoClick?: () => void;
  onContactClick?: () => void;
}

export function FloatingCTA({ onDemoClick, onContactClick }: FloatingCTAProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 w-64 space-y-3"
          >
            <button
              onClick={() => {
                onDemoClick?.();
                setIsExpanded(false);
              }}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-bold text-black text-sm">Book a Demo</div>
                <div className="text-xs text-gray-500">See it in action</div>
              </div>
            </button>

            <button
              onClick={() => {
                onContactClick?.();
                setIsExpanded(false);
              }}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-bold text-black text-sm">Contact Sales</div>
                <div className="text-xs text-gray-500">Get in touch</div>
              </div>
            </button>

            <Link
              to="/contact"
              onClick={() => setIsExpanded(false)}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <MessageSquare className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="font-bold text-black text-sm">Ask a Question</div>
                <div className="text-xs text-gray-500">We're here to help</div>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/50 flex items-center justify-center text-black hover:shadow-xl hover:shadow-green-500/70 transition-all duration-300"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <Sparkles className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request:', formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-black mb-2">Book a Demo</h2>
                <p className="text-gray-600 text-sm">See Nexus in action</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                  rows={3}
                  placeholder="Tell us about your infrastructure..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Schedule Demo
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
