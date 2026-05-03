import { ImageWithFallback } from '../figma/ImageWithFallback';
import { serverRackImage } from '../../config/platformImages';

interface PlatformHeroProps {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export function PlatformHero({ 
  subtitle, 
  title, 
  description, 
  backgroundImage = serverRackImage,
  stats 
}: PlatformHeroProps) {
  return (
    <section className="relative py-8 bg-black text-white min-h-[45vh] flex items-center">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-2">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em]">
              {subtitle}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            {title}
          </h1>
          
          <p className="text-base text-gray-300 mb-6 leading-snug font-light">
            {description}
          </p>
          
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-xl font-bold text-green-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}