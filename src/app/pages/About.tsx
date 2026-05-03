import { Target, Users, Award, Rocket, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Making AI infrastructure accessible, efficient, and cost-effective for every organization',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Constantly pushing boundaries with AI-powered optimization and intelligent automation',
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your infrastructure challenges are our challenges. We build solutions that work.',
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'Committed to delivering enterprise-grade reliability and performance',
    },
  ];

  // ❌ REMOVED stats block completely

  const team = [
    {
      title: 'World-Class Engineering',
      description: 'Our team includes former engineers from leading tech companies with deep expertise in distributed systems, GPU infrastructure, and ML platforms.',
      stats: ['15+ years avg experience', 'PhD researchers', 'Open source contributors'],
    },
    // ❌ REMOVED "AI Infrastructure Experts" block
    {
      title: 'Customer-Centric Culture',
      description: 'Every decision we make is driven by customer needs. From feature prioritization to support response times.',
      stats: ['24/7 support', 'Quarterly roadmap input', 'Direct engineering access'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-black text-white">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em]">
              About Nexus
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Building the Future of
            <span className="block text-green-400 mt-2">AI Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Founded by infrastructure engineers who experienced the pain of managing AI workloads firsthand
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-3">
                <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em]">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl font-bold text-black mb-5 leading-tight">
                Born from Real-World Pain
              </h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  Nexus was founded in 2025 by a team of infrastructure engineers and AI researchers who managed large-scale GPU clusters at leading tech companies.
                </p>
                <p>
                  We experienced firsthand the frustration of juggling 15+ tools to monitor infrastructure, track costs, and optimize workloads. Traditional DCIM tools weren't built for GPU density. APM solutions didn't understand training jobs. FinOps platforms couldn't attribute costs to specific models.
                </p>
                <p>
                  So we built Nexus: a unified platform purpose-built for AI infrastructure from day one.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team working"
                className="rounded-lg shadow-xl w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ❌ REMOVED STATS SECTION COMPLETELY */}

      {/* Team Sections */}
      {team.map((section, index) => (
        <section
          key={index}
          className={`relative py-14 ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              {section.title}
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {section.description}
            </p>
            <div className="flex flex-wrap gap-5">
              {section.stats.map((stat, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-700 font-semibold text-sm">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Values */}
      <section className="relative py-14 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Our Values
            </span>
            <h2 className="text-4xl font-bold mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 border-2 border-zinc-800 hover:border-green-500 rounded-lg p-6 text-center transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em]">
              Our Mission
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Make AI Infrastructure Management Simple
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            We believe managing AI infrastructure shouldn't require a team of specialists and a dozen tools. Nexus gives you one intelligent platform that just works—so you can focus on building breakthrough AI instead of babysitting GPUs.
          </p>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="relative py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            We're hiring exceptional engineers, designers, and go-to-market talent to build the future of AI infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers" className="px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded transition-all duration-300 uppercase tracking-wide text-sm inline-block text-center">
              Express Interest to Join NEXUS
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-black hover:bg-black hover:text-white text-black font-bold rounded transition-all duration-300 uppercase tracking-wide text-sm inline-block text-center">
              Get Early Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}