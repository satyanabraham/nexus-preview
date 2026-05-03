import { Target, Lightbulb, Users, Zap, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function References() {
  const vision = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Make AI infrastructure management accessible, efficient, and cost-effective for every organization building with AI',
    },
    {
      icon: Lightbulb,
      title: 'The Problem We Solve',
      description: 'AI teams struggle with fragmented tools, low GPU utilization averaging 30-40%, and spiraling infrastructure costs',
    },
    {
      icon: Users,
      title: 'Who We Serve',
      description: 'Research labs, AI startups, and enterprises deploying machine learning workloads at scale',
    },
  ];

  const targetAudience = [
    {
      title: 'AI Research Labs',
      description: 'Universities and research institutions training large models and advancing AI science',
      needs: [
        'Multi-tenant infrastructure management',
        'Academic pricing and grant support',
        'Collaboration tools for research teams',
        'Fair-share resource scheduling',
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    },
    {
      title: 'AI Startups',
      description: 'Fast-growing companies building AI products and scaling from prototype to production',
      needs: [
        'Cost optimization and visibility',
        'Rapid scaling from 10 to 10K GPUs',
        'Simple deployment in hours',
        'Expert technical guidance',
      ],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    },
    {
      title: 'Enterprise AI Teams',
      description: 'Large organizations deploying mission-critical AI workloads at massive scale',
      needs: [
        'Enterprise security and compliance',
        'Multi-cloud and hybrid deployment',
        'Dedicated support and SLAs',
        'Custom integrations',
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
  ];

  const goals = [
    {
      icon: TrendingUp,
      metric: '30-50%',
      title: 'Cost Reduction',
      description: 'Help organizations reduce AI infrastructure costs through intelligent optimization, waste detection, and right-sizing recommendations',
    },
    {
      icon: Zap,
      metric: '2x',
      title: 'GPU Utilization',
      description: 'Improve average GPU utilization from industry standard 30-40% to 75%+ through smart scheduling and resource allocation',
    },
    {
      icon: Globe,
      metric: '10x',
      title: 'Operational Efficiency',
      description: 'Reduce time spent on manual infrastructure management and troubleshooting through automation and intelligent insights',
    },
  ];

  const roadmap = [
    {
      quarter: 'Q2 2025',
      title: 'Platform Launch',
      items: ['Core platform GA', 'DCIM + APM modules', 'Cloud integrations', 'Python SDK'],
    },
    {
      quarter: 'Q3 2025',
      title: 'Advanced Features',
      items: ['FinOps module', 'Kubernetes integration', 'Advanced analytics', 'Mobile app'],
    },
    {
      quarter: 'Q4 2025',
      title: 'AI Orchestration',
      items: ['ML pipeline automation', 'Model versioning', 'A/B testing', 'Auto-scaling'],
    },
    {
      quarter: '2026',
      title: 'Enterprise Scale',
      items: ['Multi-region support', 'Advanced security', 'Custom workflows', 'Partner ecosystem'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-black text-white">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Vision"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em]">
              Our Vision
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            The Future of
            <span className="block text-green-400 mt-2">AI Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Building the platform that powers the next generation of AI innovation
          </p>
        </div>
      </section>

      {/* Vision Cards */}
      <section className="relative py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {vision.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-zinc-200 hover:border-green-500 rounded-lg p-6 text-center transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="relative py-14 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Who We Serve
            </span>
            <h2 className="text-4xl font-bold text-black mb-4">
              Built for AI Teams
            </h2>
            <p className="text-lg text-gray-700">
              Serving diverse organizations with unified platform capabilities
            </p>
          </div>

          <div className="space-y-12">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-black mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {audience.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black mb-3 text-sm">Key Requirements:</h4>
                    {audience.needs.map((need, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">{need}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <ImageWithFallback
                    src={audience.image}
                    alt={audience.title}
                    className="rounded-lg shadow-xl w-full h-[320px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="relative py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Our Goals
            </span>
            <h2 className="text-4xl font-bold text-black mb-4">
              Impact We Aim to Deliver
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-50 border-2 border-zinc-200 rounded-lg p-6 text-center hover:border-green-500 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-3">
                    {goal.metric}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative py-14 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Roadmap
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Our Journey Ahead
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Strategic milestones from platform launch to enterprise scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((phase, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-6"
              >
                <div className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-3">
                  {phase.quarter}
                </div>
                <h3 className="text-xl font-bold text-white mb-5">
                  {phase.title}
                </h3>
                <div className="space-y-2">
                  {phase.items.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-gray-400 text-xs">{item}</span>
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
            Join Us on This Journey
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Be among the first to experience the next generation of AI infrastructure management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="group px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded transition-all duration-300 flex items-center justify-center uppercase tracking-wide text-sm">
              Request Early Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => {
                const roadmapSection = document.getElementById('roadmap');
                roadmapSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-10 py-4 border-2 border-black hover:bg-black hover:text-white text-black font-bold rounded transition-all duration-300 uppercase tracking-wide text-sm"
            >
              View Roadmap
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}