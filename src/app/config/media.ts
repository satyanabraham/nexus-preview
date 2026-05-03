/**
 * Centralized Media Configuration
 * 
 * This file contains all images and videos used across the Nexus website.
 * To change any image or video, simply update the URL in this file.
 * 
 * IMPORTANT: 
 * - For images: Use Unsplash URLs with specific search terms
 * - For videos: Use direct video URLs (mp4, webm) or embed URLs
 * - Update the 'alt' text to match the image content for accessibility
 */

export const media = {
  // ==================== HOME PAGE ====================
  home: {
    hero: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
      alt: 'Modern data center with servers and infrastructure',
      description: 'Main hero background - data center infrastructure'
    },
    problemSection: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      alt: 'Complex data center showing infrastructure challenges',
      description: 'Problem section - shows complexity'
    },
    solutionSection: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      alt: 'Optimized GPU infrastructure and servers',
      description: 'Solution section - optimized infrastructure'
    },
    capabilities: [
      {
        type: 'image' as const,
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
        alt: 'Real-time GPU monitoring dashboard',
        description: 'Capability 1: GPU Monitoring'
      },
      {
        type: 'image' as const,
        src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200',
        alt: 'AI workload optimization visualization',
        description: 'Capability 2: Workload Optimization'
      },
      {
        type: 'image' as const,
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
        alt: 'Cost intelligence and analytics dashboard',
        description: 'Capability 3: Cost Intelligence'
      }
    ]
  },

  // ==================== PLATFORM PAGE ====================
  platform: {
    hero: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
      alt: 'Advanced data center infrastructure',
      description: 'Platform hero - data center'
    },
    problemSection: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      alt: 'Traditional infrastructure complexity',
      description: 'Platform problem section'
    },
    capabilities: [
      {
        type: 'image' as const,
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
        alt: 'Infrastructure intelligence monitoring',
        description: 'DCIM capability'
      },
      {
        type: 'image' as const,
        src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200',
        alt: 'Application performance metrics',
        description: 'APM capability'
      },
      {
        type: 'image' as const,
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
        alt: 'Financial operations dashboard',
        description: 'FinOps capability'
      },
      {
        type: 'image' as const,
        src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200',
        alt: 'Kubernetes orchestration interface',
        description: 'Orchestration capability'
      }
    ]
  },

  // ==================== SOLUTIONS PAGE ====================
  solutions: {
    hero: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      alt: 'Enterprise solutions and team collaboration',
      description: 'Solutions hero background'
    },
    enterprise: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
      alt: 'Enterprise office building and infrastructure',
      description: 'Enterprise AI solution'
    },
    research: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200',
      alt: 'Research lab and academic environment',
      description: 'Research & Academia solution'
    },
    startups: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200',
      alt: 'Startup office and innovation space',
      description: 'AI Startups solution'
    },
    cloudProviders: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
      alt: 'Cloud infrastructure and global connectivity',
      description: 'Cloud Providers solution'
    }
  },

  // ==================== ECOSYSTEM PAGE ====================
  ecosystem: {
    hero: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      alt: 'Technology ecosystem and integrations',
      description: 'Ecosystem hero background'
    }
  },

  // ==================== ABOUT PAGE ====================
  about: {
    hero: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
      alt: 'Team collaboration and company culture',
      description: 'About hero - team working together'
    },
    story: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      alt: 'Team working on AI infrastructure',
      description: 'Our story section'
    }
  },

  // ==================== REFERENCES PAGE ====================
  references: {
    hero: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      alt: 'Future of AI infrastructure vision',
      description: 'References hero background'
    },
    researchLabs: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      alt: 'AI research laboratory',
      description: 'Research labs target audience'
    },
    startups: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
      alt: 'Fast-growing AI startup environment',
      description: 'AI Startups target audience'
    },
    enterprise: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      alt: 'Large enterprise organization',
      description: 'Enterprise target audience'
    }
  },

  // ==================== COMMON / SHARED ====================
  common: {
    placeholderDark: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      alt: 'Data center infrastructure',
      description: 'Generic dark background placeholder'
    },
    placeholderLight: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      alt: 'Modern office and technology',
      description: 'Generic light background placeholder'
    }
  },

  // ==================== VIDEO SUPPORT ====================
  // To add videos, use this format:
  // videoExample: {
  //   type: 'video' as const,
  //   src: 'https://example.com/video.mp4',
  //   poster: 'https://example.com/poster.jpg', // Optional thumbnail
  //   alt: 'Video description',
  //   description: 'What this video shows'
  // }
};

// Helper function to get media by path
export function getMedia(path: string) {
  const keys = path.split('.');
  let current: any = media;
  
  for (const key of keys) {
    if (current[key] === undefined) {
      console.warn(`Media not found for path: ${path}`);
      return media.common.placeholderDark;
    }
    current = current[key];
  }
  
  return current;
}

// Helper function to update media dynamically (for future admin panel)
export function updateMedia(path: string, newSrc: string) {
  const keys = path.split('.');
  let current: any = media;
  
  for (let i = 0; i < keys.length - 1; i++) {
    if (current[keys[i]] === undefined) {
      console.error(`Invalid media path: ${path}`);
      return false;
    }
    current = current[keys[i]];
  }
  
  const lastKey = keys[keys.length - 1];
  if (current[lastKey]) {
    current[lastKey].src = newSrc;
    return true;
  }
  
  return false;
}

// Export type for TypeScript support
export type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  description: string;
  poster?: string; // For videos
};
