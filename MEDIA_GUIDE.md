# Media Management Guide

## Overview

The Nexus website uses a centralized media configuration system that makes it easy to add, change, or swap images and videos across the entire site. All media assets are managed in a single file: `/src/app/config/media.ts`

## Quick Start

### To Change Any Image or Video:

1. Open `/src/app/config/media.ts`
2. Find the section you want to update (e.g., `home.hero`, `solutions.enterprise`)
3. Replace the `src` URL with your new image/video URL
4. Update the `alt` text to describe the new media
5. Save the file - changes are immediate!

## File Structure

```
/src/app/config/media.ts          # Main media configuration
/src/app/components/MediaWithFallback.tsx   # Media component
/MEDIA_GUIDE.md                   # This guide
```

## Finding Images

### Recommended Sources:

1. **Unsplash** (Free, high-quality): https://unsplash.com
   - Format: `https://images.unsplash.com/photo-[ID]?w=1920&q=80`
   - Adjust `w=` for width, `q=` for quality

2. **Pexels** (Free): https://pexels.com

3. **Custom Images**: Upload to your CDN and use the URL

### Search Terms for AI/Data Center Images:

- `data center`
- `server room`
- `GPU cluster`
- `technology infrastructure`
- `network cables`
- `cloud computing`
- `AI artificial intelligence`
- `modern office`
- `team collaboration`
- `digital transformation`

## Configuration Format

### For Images:

```typescript
sectionName: {
  type: 'image' as const,
  src: 'https://images.unsplash.com/photo-ID?w=1920&q=80',
  alt: 'Description for accessibility',
  description: 'Internal note about this image'
}
```

### For Videos:

```typescript
sectionName: {
  type: 'video' as const,
  src: 'https://example.com/video.mp4',
  poster: 'https://example.com/poster.jpg', // Optional thumbnail
  alt: 'Description for accessibility',
  description: 'Internal note about this video'
}
```

### For Arrays (Multiple Images):

```typescript
capabilities: [
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1?w=1200',
    alt: 'First capability image',
    description: 'Capability 1'
  },
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-2?w=1200',
    alt: 'Second capability image',
    description: 'Capability 2'
  }
]
```

## Media Sections by Page

### Home Page (`media.home`)
- `hero` - Main homepage background
- `problemSection` - Shows infrastructure complexity
- `solutionSection` - Shows optimized infrastructure
- `capabilities[0-2]` - Three capability images

### Platform Page (`media.platform`)
- `hero` - Platform page background
- `problemSection` - Traditional infrastructure
- `capabilities[0-3]` - Four capability images

### Solutions Page (`media.solutions`)
- `hero` - Solutions page background
- `enterprise` - Enterprise AI solution
- `research` - Research & Academia
- `startups` - AI Startups
- `cloudProviders` - Cloud Providers

### Ecosystem Page (`media.ecosystem`)
- `hero` - Ecosystem page background

### About Page (`media.about`)
- `hero` - About page background
- `story` - Our story section

### References Page (`media.references`)
- `hero` - References page background
- `researchLabs` - Target audience 1
- `startups` - Target audience 2
- `enterprise` - Target audience 3

### Common (`media.common`)
- `placeholderDark` - Generic dark background
- `placeholderLight` - Generic light background

## Image Size Guidelines

### Recommended Dimensions:

- **Hero Backgrounds**: 1920x1080 or larger (`w=1920`)
- **Feature Images**: 1200x800 (`w=1200`)
- **Section Images**: 800x600 (`w=800`)
- **Thumbnails**: 400x300 (`w=400`)

### Optimization Tips:

1. Use Unsplash's URL parameters:
   - `w=1920` - Set width
   - `q=80` - Set quality (1-100)
   - `fit=crop` - Crop to dimensions
   - `fm=webp` - Modern format

2. Example: `https://images.unsplash.com/photo-ID?w=1920&q=80&fit=crop&fm=webp`

## Adding New Sections

1. Open `/src/app/config/media.ts`

2. Add your new section to the appropriate page:

```typescript
export const media = {
  home: {
    // ... existing sections ...
    
    newSection: {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-YOUR-ID?w=1200',
      alt: 'Your image description',
      description: 'What this section shows'
    }
  }
};
```

3. Use it in your component:

```tsx
import { media } from '../config/media';
import { MediaWithFallback } from '../components/MediaWithFallback';

<MediaWithFallback 
  media={media.home.newSection} 
  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
/>
```

## Using Videos

### 1. Add Video to Config:

```typescript
hero: {
  type: 'video' as const,
  src: 'https://example.com/datacenter.mp4',
  poster: 'https://example.com/thumbnail.jpg',
  alt: 'Data center operations video',
  description: 'Hero background video'
}
```

### 2. Use in Component:

```tsx
<MediaWithFallback 
  media={media.home.hero}
  className="w-full h-full object-cover opacity-40"
  autoPlay={true}
  loop={true}
  muted={true}
  controls={false}
/>
```

### Video Props:

- `autoPlay` - Start playing automatically (default: true)
- `loop` - Loop the video (default: true)
- `muted` - Mute audio (default: true, required for autoPlay)
- `controls` - Show video controls (default: false)

## Bulk Updates

To update multiple images at once:

1. Prepare your new image URLs
2. Open `/src/app/config/media.ts`
3. Use find & replace to update multiple URLs:
   - Find: `photo-OLD_ID`
   - Replace: `photo-NEW_ID`

## Common Use Cases

### Change Homepage Hero:

```typescript
// In /src/app/config/media.ts
home: {
  hero: {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-YOUR-NEW-ID?w=1920&q=80', // <- Change this
    alt: 'Your new description', // <- Update this
    description: 'New hero image'
  }
}
```

### Swap All Data Center Images:

Search for relevant sections and update:
- `media.home.problemSection.src`
- `media.platform.hero.src`
- `media.solutions.enterprise.src`

### Add a Video Background:

```typescript
home: {
  hero: {
    type: 'video' as const, // <- Change from 'image'
    src: 'https://cdn.example.com/hero-video.mp4', // <- Video URL
    poster: 'https://cdn.example.com/poster.jpg', // <- Thumbnail
    alt: 'AI infrastructure in action',
    description: 'Animated hero background'
  }
}
```

## Troubleshooting

### Image Not Showing?

1. Check the URL is accessible in your browser
2. Verify the `src` has `w=` and `q=` parameters for Unsplash
3. Check browser console for errors
4. Ensure `type: 'image' as const` is set correctly

### Video Not Playing?

1. Use `.mp4` format for best compatibility
2. Ensure `muted={true}` for autoplay to work
3. Add `playsInline` attribute (already included)
4. Check video URL is directly accessible

### Alt Text Guidelines:

- Describe what's in the image/video
- Keep it concise (under 125 characters)
- Don't start with "Image of..." or "Picture of..."
- Good: "Modern data center with GPU clusters"
- Bad: "Image of a data center"

## Best Practices

### 1. Consistency:
- Use similar image styles across sections
- Maintain consistent color tones
- Match image subjects to section content

### 2. Performance:
- Use appropriate dimensions (don't load 4K for thumbnails)
- Enable Unsplash's webp format: `&fm=webp`
- Compress large files before uploading

### 3. Accessibility:
- Always provide meaningful `alt` text
- Describe the content, not "placeholder" or "hero image"
- Be specific about what the image shows

### 4. Organization:
- Keep related images together in config
- Use clear, descriptive property names
- Add helpful `description` notes

## Future Enhancements

### Coming Soon:
- [ ] Admin panel for visual media management
- [ ] Image upload and CDN integration
- [ ] Automatic image optimization
- [ ] A/B testing different images
- [ ] Analytics on image performance
- [ ] Bulk import from Figma/design tools

## Support

Need help finding the right images? Consider these themes:

**For Technology/Infrastructure:**
- Search: `data center`, `server infrastructure`, `technology hardware`
- Style: Dark, industrial, lots of blue/green lights

**For Enterprise/Business:**
- Search: `modern office`, `business team`, `corporate building`
- Style: Clean, professional, bright lighting

**For Innovation/AI:**
- Search: `artificial intelligence`, `machine learning`, `futuristic technology`
- Style: Abstract, digital, glowing effects

**For People/Team:**
- Search: `diverse team`, `collaboration`, `engineers working`
- Style: Natural lighting, candid moments, diversity

---

## Quick Reference

**Main Config File:** `/src/app/config/media.ts`  
**Component:** `/src/app/components/MediaWithFallback.tsx`  
**Image Format:** `type: 'image'`, `src`, `alt`, `description`  
**Video Format:** `type: 'video'`, `src`, `poster`, `alt`, `description`  

**Example Usage:**
```tsx
import { media } from '../config/media';
import { MediaWithFallback } from '../components/MediaWithFallback';

<MediaWithFallback 
  media={media.home.hero} 
  className="w-full h-[400px] object-cover"
/>
```

---

Last Updated: March 10, 2026  
Version: 2.0
