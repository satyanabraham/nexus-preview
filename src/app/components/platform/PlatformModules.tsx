import { Link } from 'react-router';
import { Database, Activity, DollarSign, Boxes, Brain, Network, ArrowRight } from 'lucide-react';

export function PlatformModules() {
  const modules = [
    {
      icon: Database,
      title: 'DCIM',
      subtitle: 'Data Center Infrastructure Management',
      description: 'Real-time monitoring and control of GPU clusters, power systems, cooling infrastructure, and capacity.',
      path: '/platform/dcim',
      features: ['GPU cluster monitoring', 'Power & thermal management', 'Capacity planning', 'Asset lifecycle'],
      color: 'green',
    },
    {
      icon: Activity,
      title: 'APM',
      subtitle: 'Application Performance Management',
      description: 'Deep observability into training jobs, inference workloads, and model performance with granular metrics.',
      path: '/platform/apm',
      features: ['Training job tracking', 'Inference monitoring', 'Performance profiling', 'Bottleneck detection'],
      color: 'green',
    },
    {
      icon: DollarSign,
      title: 'FinOps',
      subtitle: 'Financial Operations',
      description: 'Granular cost tracking, optimization recommendations, and governance across all infrastructure.',
      path: '/platform/finops',
      features: ['Cost attribution', 'Budget enforcement', 'Waste detection', 'Chargeback reports'],
      color: 'green',
    },
    {
      icon: Boxes,
      title: 'Kubernetes Control',
      subtitle: 'Orchestration Platform',
      description: 'Infrastructure-aware workload scheduling, cluster management, and resource optimization.',
      path: '/platform/kubernetes',
      features: ['Smart scheduling', 'Auto-scaling', 'Multi-tenancy', 'Resource quotas'],
      color: 'green',
    },
    {
      icon: Brain,
      title: 'AI Workload Orchestration',
      subtitle: 'ML Pipeline Automation',
      description: 'End-to-end automation for training, fine-tuning, deployment, and model lifecycle management.',
      path: '/platform/ai-orchestration',
      features: ['Pipeline automation', 'Model versioning', 'A/B testing', 'Deployment automation'],
      color: 'green',
    },
    {
      icon: Network,
      title: 'Architecture',
      subtitle: 'Platform Design',
      description: 'Cloud-native, API-first architecture designed for scale, security, and performance.',
      path: '/platform/architecture',
      features: ['Multi-cloud support', 'Event-driven', 'Microservices', 'RESTful APIs'],
      color: 'green',
    },
  ];

  return (
    <section className="relative py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-400 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
            Platform Modules
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Five Integrated Modules
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive capabilities working together as one unified system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            
            return (
              <Link
                key={index}
                to={module.path}
                className="group relative bg-black border-2 border-zinc-800 hover:border-green-500 rounded-lg p-8 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {module.title}
                </h3>
                
                <p className="text-gray-500 text-sm font-semibold mb-4 uppercase tracking-wider">
                  {module.subtitle}
                </p>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {module.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {module.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-green-400 font-semibold text-sm group-hover:underline">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
