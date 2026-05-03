import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function PlatformCTA() {
  return (
    <section className="relative py-16 bg-black border-t border-zinc-800 overflow-hidden">
      {/* Animated beam sweep */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-[sweep_3s_ease-in-out_infinite]" 
             style={{ 
               transform: 'translateX(-100%)',
               animation: 'sweep 3s ease-in-out infinite'
             }} 
        />
      </div>
      
      {/* Radial glow from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent" />
      
      {/* Spotlight glow on launch date */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/20 blur-[120px] rounded-full" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-3">
          <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em]">
            Get Started
          </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Transform Your AI Infrastructure
        </h2>
        
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-snug">
          Join the waitlist to be among the first to experience the Nexus platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link to="/contact" className="group px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded transition-all duration-300 flex items-center justify-center uppercase tracking-wide text-sm shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]">
            Request Early Access
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Spotlight on launch date */}
        <div className="relative pt-8 border-t border-zinc-800/50">
          <div className="inline-block relative">
            {/* Pulsing glow effect */}
            <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
            
            {/* Main launch date text with glow */}
            <p className="relative text-green-400 text-base md:text-lg font-bold uppercase tracking-[0.3em] px-8 py-3 bg-gradient-to-r from-transparent via-green-500/10 to-transparent border border-green-500/30 rounded-full shadow-[0_0_40px_rgba(34,197,94,0.4)]">
              Platform Launching Q2 2026
            </p>
            
            {/* Additional accent glow lines */}
            <div className="absolute -left-20 top-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent to-green-500/50" />
            <div className="absolute -right-20 top-1/2 w-16 h-[2px] bg-gradient-to-l from-transparent to-green-500/50" />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
}