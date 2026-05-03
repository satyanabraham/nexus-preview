# Image Replacement Guide - Nexus Website

## ✅ Completed Image Replacements

Your custom Figma images have been successfully integrated into the Nexus website!

### 📸 **Your Images**

1. **Server Rack / Data Center**
   - Asset: `figma:asset/6054fe65911bb5e90286d58dff4c3a11e83eeb43.png`
   - Usage: Infrastructure, DCIM, Data Center visuals

2. **3D Distributed Network**
   - Asset: `figma:asset/51ef9bf47e89d7d1bdd8f1a0c0c5f25cde47f61c.png`
   - Usage: AI Workloads, Orchestration, Network visualization

3. **Analytics Dashboard**
   - Asset: `figma:asset/8b6413080914e01d0103eddb447714449c7a4369.png`
   - Usage: FinOps, Cost Intelligence, Analytics

---

## 🎯 **Where Your Images Are Now Used**

### **Centralized Configuration**
Created `/src/app/config/platformImages.ts` for easy image management:

```typescript
import serverRackImage from 'figma:asset/6054fe65911bb5e90286d58dff4c3a11e83eeb43.png';
import distributedNetworkImage from 'figma:asset/51ef9bf47e89d7d1bdd8f1a0c0c5f25cde47f61c.png';
import dashboardImage from 'figma:asset/8b6413080914e01d0103eddb447714449c7a4369.png';

export const platformImages = {
  serverRack: serverRackImage,
  distributedNetwork: distributedNetworkImage,
  dashboard: dashboardImage,
};
```

### **Pages Updated**

#### **1. Home Page (`/src/app/pages/Home.tsx`)**
- ✅ Hero background: Server rack image
- ✅ "Real-Time GPU Monitoring" section: Server rack
- ✅ "AI Workload Optimization" section: Distributed network
- ✅ "Cost Intelligence" section: Dashboard

#### **2. Platform Hero Component (`/src/app/components/platform/PlatformHero.tsx`)**
- ✅ Default background: Server rack image
- Used across all platform module pages (DCIM, APM, FinOps, etc.)

#### **3. Platform Overview (`/src/app/pages/platform/PlatformOverview.tsx`)**
- ✅ "Infrastructure Intelligence" capability: Server rack
- ✅ "Application Performance" capability: Distributed network
- ✅ "Cost Intelligence" capability: Dashboard
- ✅ "Intelligent Orchestration" capability: Distributed network

---

## 🔧 **How to Replace More Images**

### **Option 1: Update the Config File (Recommended)**

Simply update `/src/app/config/platformImages.ts`:

```typescript
// Replace with your new image asset ID
import newServerImage from 'figma:asset/YOUR_NEW_ASSET_ID.png';

export const platformImages = {
  serverRack: newServerImage, // Changed!
  // ... rest stays the same
};
```

### **Option 2: Replace Individual Images**

Find the component and update the `src` or `image` prop:

```typescript
// Before
<ImageWithFallback
  src={serverRackImage}
  alt="Data Center"
/>

// After
import newImage from 'figma:asset/YOUR_ASSET_ID.png';

<ImageWithFallback
  src={newImage}
  alt="Data Center"
/>
```

### **Option 3: Use Unsplash (Dynamic)**

For images that don't need to be custom:

```typescript
<ImageWithFallback
  src="https://images.unsplash.com/photo-PHOTO_ID?w=1200&q=80"
  alt="Description"
/>
```

---

## 📋 **Current Image Mapping**

| Page/Component | Section | Image Used | Asset |
|----------------|---------|------------|-------|
| **Home** | Hero Background | Server Rack | `6054fe65...` |
| **Home** | GPU Monitoring | Server Rack | `6054fe65...` |
| **Home** | AI Workload | Distributed Network | `51ef9bf4...` |
| **Home** | Cost Intelligence | Dashboard | `8b641308...` |
| **Platform Hero** | Default Background | Server Rack | `6054fe65...` |
| **Platform Overview** | Infrastructure | Server Rack | `6054fe65...` |
| **Platform Overview** | Performance | Distributed Network | `51ef9bf4...` |
| **Platform Overview** | Cost | Dashboard | `8b641308...` |
| **Platform Overview** | Orchestration | Distributed Network | `51ef9bf4...` |

---

## 🎨 **Image Best Practices**

### **Recommended Sizes**
- Hero backgrounds: 1920x1080 or larger
- Feature sections: 1200x800
- Card images: 800x600
- Thumbnails: 400x300

### **Image Optimization**
Your Figma assets are automatically optimized, but for Unsplash:
- Add `?w=1200&q=80` for standard quality
- Add `?w=1920&q=80` for hero images
- Add `?w=800&q=80` for smaller sections

### **Accessibility**
Always include descriptive `alt` text:

```typescript
<ImageWithFallback
  src={serverRackImage}
  alt="Modern data center with organized server racks and network cabling"
/>
```

---

## 🚀 **Adding New Images**

### **Step 1: Add to Config**
```typescript
// /src/app/config/platformImages.ts
import newImage from 'figma:asset/NEW_ASSET_ID.png';

export const platformImages = {
  // ... existing images
  newImageName: newImage,
};

export { newImage };
```

### **Step 2: Import Where Needed**
```typescript
import { newImage } from '../config/platformImages';

<ImageWithFallback src={newImage} alt="Description" />
```

---

## 📦 **Files Modified**

1. `/src/app/config/platformImages.ts` - Created (centralized image config)
2. `/src/app/pages/Home.tsx` - Updated with your images
3. `/src/app/components/platform/PlatformHero.tsx` - Default to server rack
4. `/src/app/pages/platform/PlatformOverview.tsx` - All capabilities use your images

---

## 💡 **Tips**

- **Performance**: Figma assets are optimized and cached automatically
- **Consistency**: Use the config file for images used in multiple places
- **Fallbacks**: `ImageWithFallback` component handles loading errors gracefully
- **Responsive**: Images automatically resize with `object-cover` and responsive containers

---

## ✨ **Next Steps**

Want to replace more images? Here are common places:

1. **About Page** (`/src/app/pages/About.tsx`) - Team photos
2. **Services Page** (`/src/app/pages/Services.tsx`) - Service visuals
3. **Platform Module Pages** - Background images for each module
4. **Footer/Header** - Logo and branding images

Just follow the pattern above and you're good to go!

---

**Questions?** All your images are now centralized in `/src/app/config/platformImages.ts` for easy management! 🎯
