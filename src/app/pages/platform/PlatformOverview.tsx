import { PlatformNavigation } from '../../components/platform/PlatformNavigation';
import { PlatformModules } from '../../components/platform/PlatformModules';
import { PlatformCTA } from '../../components/platform/PlatformCTA';
import { CheckCircle2, ArrowRight, Cpu, Zap, Server, Database } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { serverRackImage, distributedNetworkImage, dashboardImage } from '../../config/platformImages';
const rotatingDashboardsImage = 'https://images.unsplash.com/photo-1651760464181-49092525ca3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RhdGluZyUyMGRhc2hib2FyZCUyMHNjcmVlbnN8ZW58MXx8fHwxNzczOTE3Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080';
import { Link } from 'react-router';

export function PlatformOverview() {
  const platformSpecs = [
    { metric: '10,000+', label: 'GPUs Per Cluster', description: 'Designed to scale' },
    { metric: '<100ms', label: 'Query Latency', description: 'Real-time insights' },
    { metric: '99.99%', label: 'Uptime SLA', description: 'Enterprise reliability' },
    { metric: '5', label: 'Core Modules', description: 'Unified platform' },
  ];

  const keyCapabilities = [
    {
      icon: Database,
      title: 'Infrastructure Intelligence',
      description: 'Real-time monitoring and management of GPU clusters, power systems, cooling infrastructure, and data center resources.',
      features: [
        'Per-GPU utilization tracking',
        'Power and thermal monitoring',
        'Capacity planning and forecasting',
        'Asset lifecycle management',
      ],
      image: serverRackImage,
    },
    {
      icon: Cpu,
      title: 'Application Performance',
      description: 'Deep observability into training jobs, inference workloads, and model performance with granular metrics and profiling.',
      features: [
        'Training job tracking',
        'Inference monitoring',
        'Performance bottleneck detection',
        'Resource allocation analysis',
      ],
      image: distributedNetworkImage,
    },
    {
      icon: Zap,
      title: 'Cost Intelligence',
      description: 'Granular cost tracking, optimization, and governance across cloud and on-premise infrastructure with automated recommendations.',
      features: [
        'Job-level cost attribution',
        'Budget alerts and enforcement',
        'Waste detection and optimization',
        'Chargeback and showback reports',
      ],
      image: dashboardImage,
    },
    {
      icon: Server,
      title: 'Intelligent Orchestration',
      description: 'Infrastructure-aware workload scheduling, Kubernetes management, and end-to-end ML pipeline automation.',
      features: [
        'Smart workload scheduling',
        'Auto-scaling clusters',
        'Multi-tenant resource quotas',
        'Pipeline automation',
      ],
      image: distributedNetworkImage,
    },
  ];

  const technicalSpecs = [
    {
      category: 'Scale',
      specs: [
        { name: 'Maximum GPUs', value: '10,000+ per cluster' },
        { name: 'Concurrent Jobs', value: '1,000+ simultaneous' },
        { name: 'Metrics Retention', value: '90 days full resolution' },
        { name: 'API Rate Limit', value: '10,000 req/min' },
      ],
    },
    {
      category: 'Performance',
      specs: [
        { name: 'Query Latency', value: '<100ms p99' },
        { name: 'Metric Collection', value: 'Sub-second intervals' },
        { name: 'Alert Latency', value: '<5 seconds' },
        { name: 'Dashboard Load', value: '<2 seconds' },
      ],
    },
    {
      category: 'Reliability',
      specs: [
        { name: 'Platform Uptime', value: '99.99% SLA' },
        { name: 'Data Durability', value: '99.999999999%' },
        { name: 'Backup Frequency', value: 'Continuous' },
        { name: 'Disaster Recovery', value: '<15 min RTO' },
      ],
    },
    {
      category: 'Integration',
      specs: [
        { name: 'Cloud Platforms', value: 'AWS, Azure, GCP' },
        { name: 'Kubernetes', value: 'All distributions' },
        { name: 'GPU Types', value: 'NVIDIA, AMD, Intel' },
        { name: 'API Type', value: 'RESTful + GraphQL' },
      ],
    },
  ];

  const differentiators = [
    {
      title: 'AI-First Architecture',
      description: 'Purpose-built for GPU clusters and ML workloads from day one',
      points: ['GPU topology awareness', 'Training job optimization', 'Inference-specific metrics', 'Model serving insights'],
    },
    {
      title: 'Unified Data Model',
      description: 'Infrastructure, application, and cost data in one integrated platform',
      points: ['Single source of truth', 'Cross-module analytics', 'Unified alerting', 'Integrated workflows'],
    },
    {
      title: 'Enterprise Security',
      description: 'Built for the most demanding security and compliance requirements',
      points: ['SOC 2 Type II certified', 'RBAC and SSO', 'Audit logging', 'Data encryption at rest & transit'],
    },
  ];

  return (
    <div className="bg-black">
      <PlatformNavigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="mb-3">
              <span className="text-green-400 font-bold text-sm uppercase tracking-[0.3em]">
                Nexus Platform
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-[0.9]">
              AI-Driven
              <span className="block text-green-400 mt-2">Data Center</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-snug font-light">
              The unified platform for managing AI infrastructure. Five integrated modules. One intelligent system.
            </p>

            {/* Platform Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platformSpecs.map((spec, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {spec.metric}
                  </div>
                  <div className="text-white text-sm font-semibold">
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

      {/* Rotating Dashboards Showcase */}
      <section className="relative py-12 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 blur-[150px] rounded-full" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full" />
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-green-400/40 rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse delay-75" />
          <div className="absolute bottom-32 left-40 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse delay-150" />
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-400/30 rounded-full animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Unified Platform
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Five Modules. One View.
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto leading-snug">
              Experience real-time visibility across your entire AI infrastructure with our integrated dashboard ecosystem
            </p>
          </div>
          
          {/* Main rotating dashboards image */}
          <div className="relative max-w-5xl mx-auto">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
            
            {/* Rotating animation container */}
            <div className="relative animate-[float_6s_ease-in-out_infinite]">
              <img
                src={rotatingDashboardsImage}
                alt="Nexus Platform Dashboards"
                className="w-full h-auto relative z-10"
              />
            </div>
            
            {/* Spotlight effect */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-green-500/20 blur-[100px]" />
          </div>
          
          {/* Feature callouts */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-5xl mx-auto">
            {[
              { label: 'DCIM', color: 'text-blue-400', path: '/platform/dcim' },
              { label: 'APM', color: 'text-purple-400', path: '/platform/apm' },
              { label: 'FinOps', color: 'text-green-400', path: '/platform/finops' },
              { label: 'Kubernetes', color: 'text-cyan-400', path: '/platform/kubernetes' },
              { label: 'Workflows', color: 'text-emerald-400', path: '/platform/ai-orchestration' },
            ].map((module, index) => (
              <Link key={index} to={module.path} className="text-center group">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] cursor-pointer">
                  <div className={`text-sm font-bold ${module.color} uppercase tracking-wider`}>
                    {module.label}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) scale(1);
            }
            50% {
              transform: translateY(-10px) scale(1.02);
            }
          }
        `}</style>
      </section>

      {/* The Problem */}
      <section className="relative py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-2">
              <span className="text-red-500 font-bold text-xs uppercase tracking-[0.3em]">
                The Challenge
              </span>
            </div>
            <h2 className="text-3xl font-bold text-black mb-3 leading-tight">
              Traditional Tools Fail for AI Infrastructure
            </h2>
            <p className="text-base text-gray-700 mb-6 leading-snug">
              Managing AI infrastructure requires juggling 10-15+ disconnected tools. The result: blind spots, wasted resources, and spiraling costs.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-left max-w-2xl mx-auto">
              {[
                'Fragmented monitoring across separate tools',
                'GPU utilization averaging just 30-40%',
                'No visibility into AI workload costs',
                'Manual operations consuming 60%+ of team time',
                'Slow incident response and troubleshooting',
                'No infrastructure-aware scheduling',
              ].map((problem, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PlatformModules />

      {/* Technical Specifications */}
      <section className="relative py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-green-500 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Technical Specifications
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              Built for Enterprise Scale
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Production-ready infrastructure designed for the most demanding AI workloads
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalSpecs.map((section, index) => (
              <div key={index} className="bg-zinc-50 border border-zinc-200 rounded-lg p-5">
                <h3 className="text-xl font-bold text-black mb-4">
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b border-zinc-200 last:border-0">
                      <span className="text-gray-700 font-medium text-sm">{spec.name}</span>
                      <span className="text-green-600 font-bold text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Why Nexus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Built Different
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 hover:border-green-500 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-snug text-sm">
                  {diff.description}
                </p>
                <div className="space-y-1.5">
                  {diff.points.map((point, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-gray-500 text-xs">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="relative py-8 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Performance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Designed for Maximum Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '30-50%', label: 'Infrastructure Cost Reduction', description: 'Through intelligent optimization' },
              { value: '2x', label: 'GPU Utilization Improvement', description: 'From 40% to 75%+ average' },
              { value: '10x', label: 'Operational Efficiency', description: 'Reduced manual management' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-white mb-2">
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

      <PlatformCTA />
    </div>
  );
}