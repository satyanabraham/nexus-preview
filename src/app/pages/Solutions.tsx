import { Building2, GraduationCap, FlaskConical, Cloud, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise AI',
      tagline: 'For Large-Scale Deployments',
      description: 'Complete AI infrastructure management for enterprises running mission-critical ML workloads at scale.',
      features: [
        'Multi-tenant architecture with isolation',
        'Enterprise security & SOC 2 compliance',
        'Dedicated support team',
        'Custom SLAs up to 99.99%',
        'On-premise or private cloud deployment',
        'Advanced RBAC and SSO integration',
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
      metrics: [
        { label: 'Deployment', value: '<2 weeks' },
        { label: 'Support', value: '24/7' },
        { label: 'Uptime', value: '99.99%' },
      ],
    },
    {
      icon: GraduationCap,
      title: 'Research & Academia',
      tagline: 'For Universities & Labs',
      description: 'Purpose-built solutions for research institutions training large models and advancing AI science.',
      features: [
        'Academic pricing and grants support',
        'Multi-lab resource management',
        'Collaborative research tools',
        'Grant reporting and tracking',
        'Fair-share scheduling policies',
        'Educational resources included',
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200',
      metrics: [
        { label: 'Pricing', value: '40% off' },
        { label: 'Labs', value: 'Unlimited' },
        { label: 'Users', value: 'Unlimited' },
      ],
    },
    {
      icon: FlaskConical,
      title: 'AI Startups',
      tagline: 'For Fast-Growing Companies',
      description: 'Infrastructure that scales with your startup from prototype to production without breaking the bank.',
      features: [
        'Startup-friendly pricing model',
        'Rapid deployment in hours',
        'Expert technical guidance',
        'Flexible scaling from 10 to 10K GPUs',
        'Free migration assistance',
        'Community support',
      ],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200',
      metrics: [
        { label: 'Setup', value: '<4 hours' },
        { label: 'Cost', value: 'Pay-as-go' },
        { label: 'Scale', value: 'Flexible' },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Providers',
      tagline: 'For Platform Partnerships',
      description: 'White-label AI infrastructure management for cloud platforms and managed service providers.',
      features: [
        'White-label branding options',
        'API-first integration',
        'Multi-region deployment',
        'Custom feature development',
        'Flexible partnership models',
        'Partner certification program',
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
      metrics: [
        { label: 'Integration', value: 'API-first' },
        { label: 'Regions', value: 'Global' },
        { label: 'Branding', value: 'Custom' },
      ],
    },
  ];

  const useCases = [
    {
      title: 'LLM Training',
      description: 'Optimize infrastructure costs and performance for training large language models',
      benefits: ['40% faster training times', '35% cost reduction', 'Automated checkpointing'],
    },
    {
      title: 'Model Fine-Tuning',
      description: 'Efficient resource allocation for fine-tuning foundation models',
      benefits: ['Dynamic resource scaling', 'Cost tracking per job', 'Experiment tracking'],
    },
    {
      title: 'Inference at Scale',
      description: 'Deploy and manage thousands of inference endpoints with confidence',
      benefits: ['Auto-scaling', '99.99% uptime', 'A/B testing built-in'],
    },
    {
      title: 'Research Computing',
      description: 'Multi-tenant infrastructure for collaborative research teams',
      benefits: ['Fair resource sharing', 'Job queuing', 'Collaboration tools'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-black text-white">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em]">
              Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Built for Every
            <span className="block text-green-400 mt-2">AI Workload</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Tailored solutions for enterprises, research institutions, startups, and cloud providers
          </p>
        </div>
      </section>

      {/* Solutions - Alternating Layout */}
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        return (
          <section
            key={index}
            className={`relative py-14 ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em]">
                      {solution.tagline}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-black mb-4">
                    {solution.title}
                  </h2>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    {solution.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-xl font-bold text-green-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-gray-600 text-xs font-semibold">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="rounded-lg shadow-xl w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Use Cases */}
      <section className="relative py-14 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Use Cases
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven Applications
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Real-world use cases powered by Nexus platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-zinc-800 hover:border-green-500 rounded-lg p-6 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-gray-500 text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Talk to our team to find the right solution for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="group px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded transition-all duration-300 flex items-center justify-center uppercase tracking-wide text-sm">
              Request Early Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-black hover:bg-black hover:text-white text-black font-bold rounded transition-all duration-300 uppercase tracking-wide text-sm inline-block text-center">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}