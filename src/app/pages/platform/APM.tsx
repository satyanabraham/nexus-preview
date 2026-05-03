import { PlatformNavigation } from '../../components/platform/PlatformNavigation';
import { PlatformHero } from '../../components/platform/PlatformHero';
import { PlatformCTA } from '../../components/platform/PlatformCTA';
import { Activity, TrendingUp, Target, AlertCircle, BarChart3, Clock, CheckCircle2 } from 'lucide-react';
import { APMDashboard } from '../../components/dashboards';
import { apmObservabilityHubImage } from '../../config/platformImages';
import { useState } from 'react';
import { DemoModal, FloatingCTA } from '../../components/DynamicCTA';

export default function APM() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const capabilities = [
    {
      icon: Activity,
      title: 'Training Job Tracking',
      description: 'Monitor training jobs from start to finish with granular metrics on performance and resource usage',
    },
    {
      icon: TrendingUp,
      title: 'Performance Profiling',
      description: 'Identify bottlenecks in model training and inference with detailed performance profiling',
    },
    {
      icon: Target,
      title: 'Model Metrics',
      description: 'Track model accuracy, loss, and convergence across training runs and experiments',
    },
    {
      icon: AlertCircle,
      title: 'Anomaly Detection',
      description: 'Automatically detect and alert on performance degradation and training anomalies',
    },
    {
      icon: BarChart3,
      title: 'Resource Attribution',
      description: 'Link resource consumption to specific jobs, models, and teams for accurate tracking',
    },
    {
      icon: Clock,
      title: 'Time-Series Analysis',
      description: 'Analyze performance trends over time to optimize training pipelines',
    },
  ];

  const useCases = [
    {
      title: 'LLM Training Optimization',
      scenario: 'Training large language models taking weeks longer than expected',
      solution: 'Performance profiling reveals data loading bottlenecks and inefficient batch sizes',
      metrics: ['40% faster training', '25% cost reduction'],
    },
    {
      title: 'Inference Performance',
      scenario: 'Inference latency exceeding SLA targets during peak traffic',
      solution: 'Real-time monitoring identifies scaling issues and resource contention',
      metrics: ['60% latency reduction', '99.9% SLA compliance'],
    },
    {
      title: 'Multi-Tenant Fairness',
      scenario: 'Teams competing for resources without visibility into usage patterns',
      solution: 'Per-team resource attribution and performance dashboards',
      metrics: ['Fair resource allocation', '80% reduction in conflicts'],
    },
  ];

  const features = [
    'Real-time job monitoring with sub-second metric collection',
    'GPU and CPU performance profiling with flame graphs',
    'Model-specific metrics (loss, accuracy, perplexity, etc.)',
    'Distributed training performance analysis',
    'Inference latency and throughput tracking',
    'Resource utilization correlation with model performance',
    'Custom metric collection via Python SDK',
    'Integration with MLflow, W&B, TensorBoard',
  ];

  const technicalSpecs = [
    { label: 'Metric Collection', value: 'Sub-second intervals' },
    { label: 'Concurrent Jobs', value: '1,000+ simultaneous' },
    { label: 'Time Series Data', value: '90 days retention' },
    { label: 'Custom Metrics', value: 'Unlimited' },
    { label: 'Dashboard Load', value: '<2 seconds' },
    { label: 'Integrations', value: 'MLflow, W&B, TensorBoard' },
  ];

  return (
    <div className="bg-white">
      <PlatformNavigation />
      
      <PlatformHero
        subtitle="APM Module"
        title="Application Performance Management"
        description="Deep observability into training jobs, inference workloads, and model performance. Track every aspect of your ML workloads with granular metrics and intelligent insights."
        stats={[
          { value: '1K+', label: 'Concurrent Jobs' },
          { value: '<1s', label: 'Metric Collection' },
          { value: '<2s', label: 'Dashboard Load' },
          { value: '90 Days', label: 'Data Retention' },
        ]}
      />

      {/* Problem Statement */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              The Challenge
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              Blind Spots in ML Performance
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Traditional APM tools don't understand ML workloads. You need GPU-aware profiling, training job tracking, and model-specific metrics to optimize your AI infrastructure.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Nexus APM gives you complete visibility into every aspect of your ML workloads, from data loading to model convergence.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Key Capabilities
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              ML-Native Performance Monitoring
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-zinc-200 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-6 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Use Cases
            </span>
            <h2 className="text-3xl font-bold mb-3">
              Optimize Every Workload
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-zinc-800 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <div className="mb-3">
                  <div className="text-gray-500 text-xs font-semibold uppercase mb-1">Scenario</div>
                  <p className="text-gray-400 text-sm mb-2">{useCase.scenario}</p>
                  <div className="text-gray-500 text-xs font-semibold uppercase mb-1">Solution</div>
                  <p className="text-gray-400 text-sm mb-3">{useCase.solution}</p>
                </div>
                <div className="space-y-2 pt-3 border-t border-zinc-800">
                  {useCase.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Dashboard */}
      <section className="py-6 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Live Demo
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">
              Interactive APM Dashboard
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Real-time monitoring of training jobs, model performance, GPU utilization, and throughput metrics
            </p>
          </div>

          <APMDashboard />
        </div>
      </section>

      {/* Advanced Observability Hub Visualization */}
      <section className="py-3 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div>
              <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-1 block">
                Unified Observability
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                Advanced Observability Hub
              </h2>
              <p className="text-gray-300 text-sm mb-3 leading-snug">
                Get comprehensive visibility into every layer of your ML infrastructure with our unified observability platform. Monitor real user interactions, synthetic health checks, distributed traces, model performance, service dependencies, and infrastructure events—all in one powerful dashboard.
              </p>
              <div className="space-y-1">
                {[
                  'Real User Monitoring (RUM) with page performance metrics',
                  'Case walk stats and synthetic monitoring pipelines',
                  'Error tracking with exception monitoring',
                  'Distributed tracing across microservices',
                  'Model app performance breakdowns',
                  'Service map & dependency visualization',
                  'Infrastructure events & alerts integration',
                  'Multi-cloud capability integration',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-400 text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-800 border-2 border-zinc-700 rounded-lg p-1.5 hover:border-green-500 transition-all duration-300">
              <img
                src={apmObservabilityHubImage}
                alt="Advanced Observability Hub - Comprehensive APM Platform"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Key Features
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              Comprehensive APM Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-zinc-200 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-black mb-2">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlatformCTA />
      
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

export { APM };