import { Puzzle, Link2, Code, Cloud, CheckCircle2, ArrowRight, Server, Database, Cpu } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function Ecosystem() {
  const integrationCategories = [
    {
      category: 'Cloud Providers',
      icon: Cloud,
      integrations: [
        { name: 'Amazon Web Services', short: 'AWS', status: 'Available' },
        { name: 'Microsoft Azure', short: 'Azure', status: 'Available' },
        { name: 'Google Cloud Platform', short: 'GCP', status: 'Available' },
        { name: 'Oracle Cloud', short: 'OCI', status: 'Coming Soon' },
      ],
    },
    {
      category: 'Orchestration',
      icon: Server,
      integrations: [
        { name: 'Kubernetes', short: 'K8s', status: 'Available' },
        { name: 'Red Hat OpenShift', short: 'OpenShift', status: 'Available' },
        { name: 'Rancher', short: 'Rancher', status: 'Available' },
        { name: 'Docker Swarm', short: 'Swarm', status: 'Available' },
      ],
    },
    {
      category: 'ML Platforms',
      icon: Cpu,
      integrations: [
        { name: 'MLflow', short: 'MLflow', status: 'Available' },
        { name: 'Kubeflow', short: 'Kubeflow', status: 'Available' },
        { name: 'Ray', short: 'Ray', status: 'Available' },
        { name: 'Weights & Biases', short: 'W&B', status: 'Available' },
      ],
    },
    {
      category: 'Monitoring',
      icon: Database,
      integrations: [
        { name: 'Prometheus', short: 'Prometheus', status: 'Available' },
        { name: 'Grafana', short: 'Grafana', status: 'Available' },
        { name: 'Datadog', short: 'Datadog', status: 'Available' },
        { name: 'New Relic', short: 'New Relic', status: 'Coming Soon' },
      ],
    },
  ];

  const partners = [
    {
      icon: Cloud,
      title: 'Technology Partners',
      description: 'Integrated with leading cloud and infrastructure providers for seamless deployment',
      count: '',
      details: ['Cloud platforms', 'Hardware vendors', 'Network providers'],
    },
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'SDKs, APIs, and CLI tools for seamless integration with your workflows',
      count: '10+',
      details: ['Python SDK', 'REST API', 'GraphQL API'],
    },
    {
      icon: Puzzle,
      title: 'Solution Partners',
      description: 'Expert consultants and implementation specialists to accelerate your deployment',
      count: '',
      details: ['Implementation', 'Training', 'Custom development'],
    },
    {
      icon: Link2,
      title: 'Ecosystem Apps',
      description: 'Extend Nexus capabilities with marketplace applications and plugins',
      count: '50+',
      details: ['Monitoring apps', 'Analytics tools', 'Integration plugins'],
    },
  ];

  const apiFeatures = [
    {
      title: 'RESTful API',
      description: 'Complete REST API with OpenAPI specification for all platform capabilities',
      features: ['Full CRUD operations', 'Rate limiting: 10K req/min', 'Webhook support', 'Async operations'],
    },
    {
      title: 'GraphQL API',
      description: 'Flexible GraphQL endpoint for efficient data querying and real-time subscriptions',
      features: ['Query optimization', 'Real-time subscriptions', 'Schema introspection', 'Batch operations'],
    },
    {
      title: 'Python SDK',
      description: 'Native Python library with type hints and async support for ML workflows',
      features: ['Type-safe', 'Async/await support', 'Jupyter integration', 'CLI included'],
    },
    {
      title: 'Terraform Provider',
      description: 'Infrastructure as Code support for automated deployment and management',
      features: ['Full resource coverage', 'State management', 'Import existing resources', 'Module library'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-black text-white">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Ecosystem"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em]">
              Ecosystem
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Integrate With
            <span className="block text-green-400 mt-2">Your Stack</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Connect Nexus with your existing tools, workflows, and infrastructure
          </p>
        </div>
      </section>

      {/* Partners Overview */}
      <section className="relative py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Partner Network
            </span>
            <h2 className="text-4xl font-bold text-black mb-4">
              Built for Integration
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive ecosystem of partners, integrations, and developer tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-zinc-200 hover:border-green-500 rounded-lg p-6 text-center transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {partner.count}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {partner.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {partner.description}
                  </p>
                  <div className="space-y-1">
                    {partner.details.map((detail, i) => (
                      <div key={i} className="text-gray-600 text-xs">
                        • {detail}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations by Category */}
      <section className="relative py-14 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Integrations
            </span>
            <h2 className="text-4xl font-bold text-black mb-4">
              Connect Your Tools
            </h2>
            <p className="text-lg text-gray-700">
              Pre-built integrations with the tools you already use
            </p>
          </div>

          <div className="space-y-10">
            {integrationCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index}>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.integrations.map((integration, i) => (
                      <div
                        key={i}
                        className="bg-white border-2 border-zinc-200 hover:border-green-500 rounded-lg p-5 transition-all duration-300 group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-black group-hover:text-green-600 transition-colors">
                            {integration.short}
                          </h4>
                          <span className={`text-xs font-semibold px-2 py-1 rounded ${
                            integration.status === 'Available' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-zinc-200 text-zinc-700'
                          }`}>
                            {integration.status}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs">
                          {integration.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API & Developer Tools */}
      <section className="relative py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Developer Tools
            </span>
            <h2 className="text-4xl font-bold text-black mb-4">
              API-First Platform
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive APIs and SDKs for seamless integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {apiFeatures.map((api, index) => (
              <div
                key={index}
                className="bg-zinc-50 border-2 border-zinc-200 rounded-lg p-6 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-black mb-3">
                  {api.title}
                </h3>
                <p className="text-gray-700 text-sm mb-5 leading-relaxed">
                  {api.description}
                </p>
                <div className="space-y-2">
                  {api.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-black text-white rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Extensive Documentation
                </h3>
                <p className="text-gray-400 mb-5 text-sm">
                  Complete API reference, tutorials, and code examples to get you started quickly
                </p>
                <button className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded transition-colors uppercase tracking-wide text-sm">
                  View Docs
                </button>
              </div>
              <div className="bg-zinc-900 rounded p-5 font-mono text-sm">
                <div className="text-green-400 mb-2 text-xs"># Install Python SDK</div>
                <div className="text-gray-300 text-xs">pip install nexus-sdk</div>
                <div className="text-green-400 mt-4 mb-2 text-xs"># Quick start</div>
                <div className="text-gray-300 text-xs">from nexus import Client</div>
                <div className="text-gray-300 text-xs">client = Client(api_key=...)</div>
                <div className="text-gray-300 text-xs">cluster = client.clusters.get()</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start Building Today
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Get early access to the platform and start integrating with your infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="group px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded transition-all duration-300 flex items-center justify-center uppercase tracking-wide text-sm">
              Request Early Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-white hover:bg-white hover:text-black text-white font-bold rounded transition-all duration-300 uppercase tracking-wide text-sm inline-block text-center">
              View API Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}