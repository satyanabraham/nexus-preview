import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoBackgroundProps {
  videoUrl: string;
  posterUrl?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
}

export function VideoBackground({
  videoUrl,
  posterUrl,
  overlay = true,
  overlayOpacity = 0.6,
  className = '',
  children,
}: VideoBackgroundProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleTogglePlay = () => {
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        id="bg-video"
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Play/Pause Control */}
      <button
        onClick={handleTogglePlay}
        className="absolute bottom-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>
    </div>
  );
}

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  description?: string;
  autoPlay?: boolean;
}

export function VideoPlayer({
  videoUrl,
  thumbnailUrl,
  title,
  description,
  autoPlay = false,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative group">
      {!isPlaying ? (
        <div className="relative cursor-pointer" onClick={handlePlay}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 rounded-lg flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
            </div>
          </div>
          {description && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
              <p className="text-gray-300 text-sm">{description}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden">
          <video
            autoPlay={autoPlay}
            controls
            className="w-full rounded-lg"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
