import { PlatformNavigation } from '../../components/platform/PlatformNavigation';
import { PlatformHero } from '../../components/platform/PlatformHero';
import { PlatformCTA } from '../../components/platform/PlatformCTA';
import { Layers, Database, Cpu, Network, Lock, Gauge, CheckCircle2 } from 'lucide-react';

export function Architecture() {
  const layers = [
    {
      icon: Layers,
      title: 'Application Layer',
      description: 'Web UI, APIs, CLI tools, and SDKs for interacting with the platform',
      components: ['React Web App', 'RESTful API', 'Python SDK', 'CLI Tools'],
    },
    {
      icon: Cpu,
      title: 'Control Plane',
      description: 'Core orchestration, scheduling, and management services',
      components: ['Kubernetes Control', 'Job Scheduler', 'Resource Manager', 'Policy Engine'],
    },
    {
      icon: Database,
      title: 'Data Layer',
      description: 'Time-series metrics, logs, and state management',
      components: ['Time-Series DB', 'Log Aggregation', 'State Store', 'Object Storage'],
    },
    {
      icon: Network,
      title: 'Infrastructure Layer',
      description: 'GPU clusters, networking, and storage infrastructure',
      components: ['GPU Clusters', 'Storage Systems', 'Networking', 'Monitoring Agents'],
    },
  ];

  const features = [
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with encryption, RBAC, and audit logging',
    },
    {
      icon: Gauge,
      title: 'High Availability',
      description: '99.99% uptime SLA with multi-region deployment and automatic failover',
    },
    {
      icon: Network,
      title: 'Scalability',
      description: 'Horizontal scaling from 10 to 10,000+ GPUs without architectural changes',
    },
  ];

  const deploymentOptions = [
    {
      title: 'Cloud-Native',
      description: 'Deploy on AWS, Azure, or GCP with managed Kubernetes',
      benefits: ['Fastest time to value', 'Automatic updates', 'Managed infrastructure'],
    },
    {
      title: 'On-Premises',
      description: 'Deploy in your own data center with full control',
      benefits: ['Data sovereignty', 'Custom compliance', 'Existing infrastructure'],
    },
    {
      title: 'Hybrid',
      description: 'Combine cloud and on-prem with unified management',
      benefits: ['Flexibility', 'Cost optimization', 'Workload portability'],
    },
  ];

  const technicalSpecs = [
    { label: 'API Latency', value: '<50ms p99' },
    { label: 'Data Retention', value: '90 days default' },
    { label: 'Uptime SLA', value: '99.99%' },
    { label: 'Max Cluster Size', value: '10,000+ GPUs' },
    { label: 'Supported Platforms', value: 'AWS, Azure, GCP, Bare Metal' },
    { label: 'Kubernetes Version', value: '1.28+' },
  ];

  return (
    <div className="bg-white">
      <PlatformNavigation />
      
      <PlatformHero
        subtitle="Platform Architecture"
        title="Enterprise-Grade Architecture"
        description="Built for scale, security, and reliability. Nexus platform architecture delivers 99.99% uptime, enterprise security, and horizontal scalability from 10 to 10,000+ GPUs."
        stats={[
          { value: '99.99%', label: 'Uptime SLA' },
          { value: '<50ms', label: 'API Latency' },
          { value: '10K+', label: 'GPU Scale' },
          { value: 'Multi-Cloud', label: 'Deploy Anywhere' },
        ]}
      />

      {/* Architecture Overview */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Platform Layers
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              Modular, Scalable Architecture
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-zinc-200 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-black mb-2">
                        {layer.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        {layer.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {layer.components.map((component, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-zinc-100 text-gray-700 text-xs font-semibold rounded"
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Key Features
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              Built for Production
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-zinc-200 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-6 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Deployment Options
            </span>
            <h2 className="text-3xl font-bold mb-3">
              Deploy Anywhere
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-zinc-800 hover:border-green-500 rounded-lg p-5 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {option.description}
                </p>
                <div className="space-y-2">
                  {option.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
              Technical Specs
            </span>
            <h2 className="text-3xl font-bold text-black mb-3">
              Performance & Scale
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