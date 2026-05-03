import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft,
  Database,
  Activity,
  DollarSign,
  Network,
  Brain,
  Cpu,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { DCIMDashboard } from '../components/dashboards/DCIMDashboard';
import { APMDashboard } from '../components/dashboards/APMDashboard';
import { FinOpsDashboard } from '../components/dashboards/FinOpsDashboard';
import { DemoModal, FloatingCTA } from '../components/DynamicCTA';
import { Link } from 'react-router';

export function InteractiveDemo() {
  const [currentModule, setCurrentModule] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const modules = [
    {
      id: 'dcim',
      name: 'DCIM',
      fullName: 'Data Center Infrastructure Management',
      icon: Database,
      color: 'from-green-400 to-emerald-500',
      description: 'Monitor and manage your entire GPU infrastructure in real-time',
      features: [
        'Real-time GPU cluster monitoring across 10,000+ GPUs',
        'Power consumption tracking at rack and device level',
        'Thermal management with intelligent cooling controls',
        'Automated capacity planning and forecasting',
      ],
      metrics: [
        { label: 'GPUs Monitored', value: '10,247', icon: Cpu },
        { label: 'Power Efficiency', value: '94.2%', icon: Zap },
        { label: 'Uptime', value: '99.99%', icon: TrendingUp },
        { label: 'Active Alerts', value: '3', icon: AlertCircle },
      ],
      component: DCIMDashboard,
    },
    {
      id: 'apm',
      name: 'APM',
      fullName: 'Application Performance Management',
      icon: Activity,
      color: 'from-blue-400 to-cyan-500',
      description: 'Deep observability into training jobs, inference workloads, and model performance',
      features: [
        'Real-time job monitoring with sub-second metrics',
        'GPU and CPU performance profiling with flame graphs',
        'Model-specific metrics tracking (loss, accuracy, etc.)',
        'Distributed training performance analysis',
      ],
      metrics: [
        { label: 'Active Jobs', value: '47', icon: Activity },
        { label: 'Avg Duration', value: '2.4h', icon: TrendingUp },
        { label: 'Success Rate', value: '98.7%', icon: CheckCircle2 },
        { label: 'Throughput', value: '2.1K/s', icon: Zap },
      ],
      component: APMDashboard,
    },
    {
      id: 'finops',
      name: 'FinOps',
      fullName: 'Financial Operations',
      icon: DollarSign,
      color: 'from-purple-400 to-pink-500',
      description: 'Granular cost tracking and optimization for your AI infrastructure',
      features: [
        'Cost attribution down to individual jobs and teams',
        'Budget management with proactive alerts',
        'Automatic waste detection and optimization',
        'Real-time cost anomaly detection',
      ],
      metrics: [
        { label: 'Monthly Spend', value: '$847K', icon: DollarSign },
        { label: 'Cost Savings', value: '23.4%', icon: TrendingUp },
        { label: 'Idle Resources', value: '12%', icon: AlertCircle },
        { label: 'Budget Health', value: '87%', icon: CheckCircle2 },
      ],
      component: FinOpsDashboard,
    },
  ];

  const handleNext = () => {
    if (currentModule < modules.length - 1) {
      const nextModule = currentModule + 1;
      setCurrentModule(nextModule);
      if (!completedSteps.includes(currentModule)) {
        setCompletedSteps([...completedSteps, currentModule]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
    }
  };

  const handleReset = () => {
    setCurrentModule(0);
    setCompletedSteps([]);
    setIsPlaying(false);
  };

  const handleModuleSelect = (index: number) => {
    setCurrentModule(index);
  };

  const currentModuleData = modules[currentModule];
  const CurrentDashboard = currentModuleData.component;

  return (
    <div className="bg-black min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-zinc-900 to-black py-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4"
            >
              <Play className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold text-sm">Interactive Demo</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Experience Nexus Platform
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Explore our AI infrastructure management platform through interactive dashboards and real-time simulations
            </motion.p>
          </div>

          {/* Module Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {modules.map((module, index) => {
              const Icon = module.icon;
              const isActive = currentModule === index;
              const isCompleted = completedSteps.includes(index);

              return (
                <motion.button
                  key={module.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => handleModuleSelect(index)}
                  className={`relative flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-black shadow-lg shadow-green-500/50'
                      : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{module.name}</span>
                  {isCompleted && !isActive && (
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Module Content */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentModule}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Module Header */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${currentModuleData.color} rounded-xl flex items-center justify-center`}>
                      <currentModuleData.icon className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {currentModuleData.fullName}
                      </h2>
                      <p className="text-gray-400 text-lg">
                        {currentModuleData.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Step {currentModule + 1} of {modules.length}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {currentModuleData.metrics.map((metric, index) => {
                    const MetricIcon = metric.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zinc-800 border border-zinc-700 rounded-lg p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <MetricIcon className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-gray-500 uppercase tracking-wider">
                            {metric.label}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {metric.value}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Features */}
                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Key Capabilities
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentModuleData.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Dashboard */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">
                    Live Interactive Dashboard
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-400">Real-time Data</span>
                  </div>
                </div>
                <CurrentDashboard />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentModule === 0}
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-semibold transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Reset Tour</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentModule === modules.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black rounded-lg font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-green-500/30"
            >
              <span>Next Module</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-zinc-900 to-black border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See More?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Schedule a personalized demo with our team to explore how Nexus can transform your AI infrastructure
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300"
            >
              <span>Book a Demo</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link 
              to="/contact"
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              <span>Contact Sales</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      
      {/* Floating CTA */}
      <FloatingCTA
        onDemoClick={() => setIsDemoModalOpen(true)}
        onContactClick={() => window.location.href = '/contact'}
      />
    </div>
  );
}