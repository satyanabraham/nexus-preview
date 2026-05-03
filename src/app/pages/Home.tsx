import { Link } from 'react-router';
import { ArrowRight, Zap, Database, Activity, DollarSign, Brain, Network, Cpu, Server, CheckCircle2 } from 'lucide-react';
import { serverRackImage, distributedNetworkImage, dashboardImage } from '../config/platformImages';
import { useState } from 'react';
import { FloatingCTA, DemoModal, CTAButton } from '../components/DynamicCTA';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const platformModules = [
    {
      icon: Database,
      name: 'DCIM',
      tagline: 'Infrastructure Intelligence',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Activity,
      name: 'APM',
      tagline: 'Performance Monitoring',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: DollarSign,
      name: 'FinOps',
      tagline: 'Cost Intelligence',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Network,
      name: 'Kubernetes',
      tagline: 'Orchestration',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Brain,
      name: 'AI Orchestration',
      tagline: 'Workflow Automation',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  const specs = [
    { label: 'GPU Support', value: '10,000+', description: 'GPUs per cluster' },
    { label: 'Query Latency', value: '<100ms', description: 'Real-time insights' },
    { label: 'Uptime SLA', value: '99.99%', description: 'Enterprise reliability' },
    { label: 'Multi-Cloud', value: '100%', description: 'Deploy anywhere' },
  ];

  const capabilities = [
    {
      title: 'Real-Time GPU Monitoring',
      description: 'Monitor every GPU in your cluster with sub-second latency. Track utilization, memory, temperature, and power consumption across thousands of devices.',
      features: ['Per-GPU metrics', 'Thermal mapping', 'Power analytics', 'Topology awareness'],
      image: serverRackImage,
    },
    {
      title: 'AI Workload Optimization',
      description: 'Intelligent scheduling and resource allocation for training and inference workloads. Maximize GPU utilization while minimizing costs.',
      features: ['Smart scheduling', 'Auto-scaling', 'Resource quotas', 'Priority queuing'],
      image: distributedNetworkImage,
    },
    {
      title: 'Cost Intelligence',
      description: 'Granular cost tracking down to the job level. Understand exactly where your infrastructure spend is going and optimize automatically.',
      features: ['Job-level costs', 'Budget alerts', 'Waste detection', 'Chargeback reports'],
      image: dashboardImage,
    },
  ];

  const useCases = [
    {
      icon: '🤖',
      title: 'LLM Training',
      description: 'Optimize infrastructure for training large language models',
      metrics: ['40% faster training', '35% cost reduction'],
    },
    {
      icon: '🔬',
      title: 'Research Labs',
      description: 'Multi-tenant infrastructure for research teams',
      metrics: ['10x easier management', 'Fair resource sharing'],
    },
    {
      icon: '🚀',
      title: 'Production AI',
      description: 'Scale inference workloads with confidence',
      metrics: ['99.99% uptime', 'Auto-scaling'],
    },
    {
      icon: '🏢',
      title: 'Enterprise AI',
      description: 'Secure, compliant infrastructure at scale',
      metrics: ['SOC 2 certified', 'Multi-cloud'],
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section - NVIDIA Style */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
            alt="Data Center"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em]">
                AI Infrastructure Platform
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-[0.9]">
              NEXUS
              <span className="block text-green-400 mt-2">AI-Driven DC</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              The unified platform for managing AI infrastructure. Built for GPU clusters. Optimized for machine learning workloads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/platform"
                className="group px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded transition-all duration-300 flex items-center justify-center uppercase tracking-wide text-sm"
              >
                Explore Platform
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black text-white font-bold rounded transition-all duration-300 uppercase tracking-wide text-sm"
              >
                Request Access
              </button>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {spec.value}
                  </div>
                  <div className="text-white text-xs font-semibold">
                    {spec.label}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {spec.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-3">
                <span className="text-green-500 font-bold text-xs uppercase tracking-[0.3em]">
                  The Challenge
                </span>
              </div>
              <h2 className="text-4xl font-bold text-black mb-4 leading-tight">
                AI Infrastructure Is Too Complex
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Managing GPU clusters requires juggling 10-15+ tools. GPU utilization averages just 30-40%. Infrastructure costs spiral without visibility.
              </p>
              <div className="space-y-3">
                {[
                  'Fragmented monitoring and management tools',
                  'Poor GPU utilization and resource waste',
                  'No visibility into AI workload performance',
                  'Manual operations consuming 60%+ of time',
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Complex Data Center"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Dark Section */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
                alt="Optimized Infrastructure"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="mb-3">
                <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em]">
                  The Solution
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                One Platform. Complete Control.
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Nexus unifies DCIM, APM, FinOps, Kubernetes, and AI orchestration into a single intelligent platform purpose-built for AI workloads.
              </p>
              <div className="space-y-3">
                {[
                  'Achieve 75%+ GPU utilization',
                  'Reduce infrastructure costs by 30-50%',
                  'Replace 10+ tools with one platform',
                  'Automate 80% of manual operations',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules - Grid */}
      <section className="relative py-16 bg-zinc-900 platform-modules">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Platform Modules
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Five Integrated Modules
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Everything you need to manage AI infrastructure at scale
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {platformModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Link
                  key={index}
                  to="/platform"
                  className="group bg-black border border-zinc-800 hover:border-green-500 rounded-lg p-5 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {module.name}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    {module.tagline}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities - Alternating Layout */}
      {capabilities.map((capability, index) => (
        <section
          key={index}
          className={`relative py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-100'} capabilities-section`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="text-3xl font-bold text-black mb-4">
                  {capability.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-gray-700 font-semibold text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <ImageWithFallback
                  src={capability.image}
                  alt={capability.title}
                  className="rounded-lg shadow-xl w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Use Cases */}
      <section className="relative py-16 bg-black use-cases-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Use Cases
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for Every AI Workload
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 hover:border-green-500 rounded-lg p-6 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-gray-500 text-xs">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="relative py-16 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Performance
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Designed for Maximum Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '30-50%', label: 'Cost Reduction', description: 'Through intelligent optimization and automation' },
              { value: '75%+', label: 'GPU Utilization', description: 'Up from typical 30-40% industry average' },
              { value: '10x', label: 'Faster Operations', description: 'Reduce manual infrastructure management time' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-green-400 mb-3">
                  {stat.value}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-black border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your AI Infrastructure
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Join the waitlist to be among the first to experience Nexus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Request Early Access
            </button>
            <Link
              to="/platform"
              className="px-10 py-4 border-2 border-white hover:bg-white hover:text-black text-white font-bold rounded transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA
        onDemoClick={() => setIsDemoModalOpen(true)}
        onContactClick={() => window.location.href = '/contact'}
      />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}