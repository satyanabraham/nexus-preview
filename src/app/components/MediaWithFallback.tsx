import { ImageWithFallback } from './figma/ImageWithFallback';
import { MediaItem } from '../config/media';

interface MediaWithFallbackProps {
  media: MediaItem;
  className?: string;
  videoClassName?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

/**
 * Universal Media Component
 * 
 * Handles both images and videos based on media configuration.
 * Automatically renders the correct element type.
 * 
 * Usage:
 * import { media } from '../config/media';
 * <MediaWithFallback media={media.home.hero} className="..." />
 */
export function MediaWithFallback({
  media,
  className = '',
  videoClassName = '',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
}: MediaWithFallbackProps) {
  if (media.type === 'video') {
    return (
      <video
        src={media.src}
        poster={media.poster}
        className={videoClassName || className}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        aria-label={media.alt}
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
    );
  }

  // Default to image
  return (
    <ImageWithFallback
      src={media.src}
      alt={media.alt}
      className={className}
    />
  );
}
