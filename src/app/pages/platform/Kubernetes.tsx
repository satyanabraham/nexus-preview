import { PlatformNavigation } from '../../components/platform/PlatformNavigation';
import { PlatformHero } from '../../components/platform/PlatformHero';
import { PlatformCTA } from '../../components/platform/PlatformCTA';
import { Boxes, Gauge, Shield, Zap, GitBranch, Globe, CheckCircle2 } from 'lucide-react';
import { kubernetesOptimizationImage } from '../../config/platformImages';

export default function Kubernetes() {
  const capabilities = [
    {
      icon: Gauge,
      title: 'GPU-Aware Scheduling',
      description: 'Intelligent scheduling that understands GPU topology, memory, and performance characteristics',
    },
    {
      icon: Zap,
      title: 'Auto-Scaling',
      description: 'Dynamic cluster scaling based on workload demand and resource availability',
    },
    {
      icon: Shield,
      title: 'Resource Isolation',
      description: 'Secure multi-tenancy with GPU and network isolation between teams and workloads',
    },
    {
      icon: GitBranch,
      title: 'Workload Orchestration',
      description: 'Advanced scheduling policies for training, inference, and batch workloads',
    },
    {
      icon: Globe,
      title: 'Multi-Cluster Management',
      description: 'Unified control plane for managing Kubernetes clusters across regions and clouds',
    },
    {
      icon: Boxes,
      title: 'Infrastructure Integration',
      description: 'Deep integration with DCIM and APM modules for infrastructure-aware scheduling',
    },
  ];

  const challenges = [
    {
      title: 'GPU-Unaware Scheduling',
      challenge: 'Standard Kubernetes schedulers don\'t understand GPU requirements',
      solution: 'GPU-aware scheduling with topology awareness and intelligent placement',
    },
    {
      title: 'Resource Fragmentation',
      challenge: 'Poor resource utilization due to fragmentation',
      solution: 'Intelligent bin packing and automatic resource defragmentation',
    },
    {
      title: 'Multi-Tenancy Complexity',
      challenge: 'Complex multi-tenancy with shared GPU resources',
      solution: 'Secure isolation with fine-grained resource quotas and policies',
    },
  ];

  const features = [
    'Native Kubernetes API compatibility',
    'GPU topology-aware pod scheduling',
    'Automatic cluster auto-scaling (HPA and VPA)',
    'Multi-tenant resource quotas and policies',
    'Cross-cluster workload federation',
    'Integration with major cloud providers',
    'Advanced scheduling constraints and affinity',
    'Real-time resource optimization',
  ];

  const technicalSpecs = [
    { label: 'Scheduling Latency', value: '<100ms' },
    { label: 'Cluster Size', value: '10,000+ nodes' },
    { label: 'Pod Density', value: '100+ pods/node' },
    { label: 'API Compatibility', value: 'Kubernetes 1.28+' },
    { label: 'Multi-Cluster', value: 'Unlimited clusters' },
    { label: 'GPU Support', value: 'NVIDIA, AMD, Intel' },
  ];

  return (
    <div className="bg-white">
      <PlatformNavigation />
      
      <PlatformHero
        subtitle="Kubernetes Module"
        title="Infrastructure-Aware Kubernetes"
        description="Advanced Kubernetes orchestration purpose-built for AI workloads. Maximize GPU utilization, optimize scheduling, and simplify multi-cluster management with deep infrastructure integration."
        stats={[
          { value: '<100ms', label: 'Scheduling' },
          { value: '10K+', label: 'Nodes' },
          { value: '100%', label: 'K8s Compatible' },
          { value: 'Multi-Cloud', label: 'Support' },
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
              Kubernetes Wasn't Built for AI
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Standard Kubernetes schedulers treat GPUs as generic resources, leading to poor utilization, scheduling inefficiencies, and operational complexity. AI workloads have unique requirements that demand specialized orchestration.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Nexus Kubernetes extends standard K8s with AI-specific capabilities while maintaining full API compatibility.
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
              AI-Native Orchestration
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

      {/* Challenges & Solutions */}
      <section className="py-6 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Challenges We Solve
            </span>
            <h2 className="text-3xl font-bold mb-3">
              Built for AI Workloads
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-zinc-800 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <div className="mb-3">
                  <div className="text-gray-500 text-xs font-semibold uppercase mb-1">Challenge</div>
                  <p className="text-gray-400 text-sm mb-2">{item.challenge}</p>
                  <div className="text-gray-500 text-xs font-semibold uppercase mb-1">Solution</div>
                  <p className="text-green-400 text-sm font-semibold">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kubernetes Optimization Dashboard Visualization */}
      <section className="py-3 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div className="bg-zinc-800 border-2 border-zinc-700 rounded-lg p-1.5 hover:border-green-500 transition-all duration-300">
              <img
                src={kubernetesOptimizationImage}
                alt="Kubernetes Optimization Dashboard - Cluster Overview & Cost Management"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-1 block">
                Intelligent Optimization
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                Kubernetes Cost & Performance Optimization
              </h2>
              <p className="text-gray-300 text-sm mb-3 leading-snug">
                Maximize cluster efficiency with AI-powered optimization recommendations. Monitor cluster health, track resource utilization, optimize spot vs on-demand costs, and get actionable insights to reduce waste while maintaining performance.
              </p>
              <div className="space-y-1">
                {[
                  'Real-time cluster overview with 12-node capacity at 87% utilization',
                  'Pod controller monitoring across production (45 pods) and staging (40 pods)',
                  'Test prep network utilization tracking and analysis',
                  'Autoscaling event logs (Jul 24th) with performance insights',
                  'Spot vs On-Demand cost optimization ($7.2k spot, $12.3k on-demand)',
                  'Cost breakdown by namespace for granular budget control',
                  'AI-powered optimization recommendations with one-click apply',
                  'Cost profit pool orchestration ($19.6M potential savings)',
                  'Multi-tier optimization (Right-size, Enable cluster autoscaler, AKS pod disruption budgets)',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-400 text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
                Features
              </span>
              <h2 className="text-3xl font-bold text-black mb-3">
                Enterprise-Grade Kubernetes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Technical Specs
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              Production-Scale Performance
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white border-2 border-zinc-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-5">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-zinc-200 last:border-0">
                  <span className="text-gray-700 font-semibold text-sm">{spec.label}</span>
                  <span className="text-green-600 font-bold text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PlatformCTA />
    </div>
  );
}