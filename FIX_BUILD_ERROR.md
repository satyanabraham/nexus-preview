# 🚨 Fix "figma:asset" Build Error

## What Happened?

The code has been fixed in Figma Make, but your downloaded copy might be outdated OR there's a cache issue on your computer.

---

## ✅ SOLUTION 1: Re-download from Figma Make (Recommended)

### This is the easiest and most reliable fix:

1. **Go back to Figma Make**
2. **Click the download/export button again**
3. **Download a fresh copy of your project**
4. **Extract to a NEW folder** (e.g., `C:\NEXUS\Nexus_Fresh`)
5. **Open Command Prompt in that NEW folder**
6. Run:
   ```bash
   npm install
   npm run build
   ```

✅ **This should work!** The fresh download has all the fixes.

---

## ✅ SOLUTION 2: Clear Cache (If Solution 1 Doesn't Work)

### Windows Command Prompt:

```cmd
cd C:\NEXUS\Nexus Website Folder
rmdir /s /q node_modules
rmdir /s /q dist
del package-lock.json
npm cache clean --force
npm install
npm run build
```

### Windows PowerShell:

```powershell
cd "C:\NEXUS\Nexus Website Folder"
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm cache clean --force
npm install
npm run build
```

### Mac/Linux:

```bash
cd /path/to/nexus/folder
rm -rf node_modules dist package-lock.json
npm cache clean --force
npm install
npm run build
```

---

## ✅ SOLUTION 3: Manual File Check

If the error persists, let's verify the files were updated:

### Check this file:
**Location:** `src/app/pages/platform/DCIM.tsx`

**Lines 6-7 should look like THIS (CORRECT):**
```typescript
const facilitiesFloorPlanImage = 'https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwZmxvb3IlMjBwbGFufGVufDF8fHx8MTc3MzkxNzI4MXww&ixlib=rb-4.1.0&q=80&w=1080';
const digitalTwinSimulatorImage = 'https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHdpbiUyMHRlY2hub2xvZ3klMjBzaW11bGF0aW9ufGVufDF8fHx8MTc3MzkxNzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080';
```

**If you see THIS (WRONG - OLD VERSION):**
```typescript
import facilitiesFloorPlanImage from 'figma:asset/acf90d8acb00a843aef5f22daba1c296dae3c937.png';
import digitalTwinSimulatorImage from 'figma:asset/2824203faffbee4edda6856587701e1b67cd708e.png';
```

**Then:** You have an old version - go back to **Solution 1** (re-download from Figma Make)

---

## 🔧 Manual Fix (Last Resort)

If you can't re-download, manually fix the file:

### Open: `src/app/pages/platform/DCIM.tsx`

### Find lines 6-7 and replace them with:

```typescript
const facilitiesFloorPlanImage = 'https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwZmxvb3IlMjBwbGFufGVufDF8fHx8MTc3MzkxNzI4MXww&ixlib=rb-4.1.0&q=80&w=1080';
const digitalTwinSimulatorImage = 'https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHdpbiUyMHRlY2hub2xvZ3klMjBzaW11bGF0aW9ufGVufDF8fHx8MTc3MzkxNzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080';
```

### Save the file, then run:
```bash
npm run build
```

---

## ✅ What Should Happen When It Works

You'll see:
```
vite v6.4.1 building for production...
✓ 28 modules transformed.
✓ built in 2s
dist/index.html
dist/assets/...
```

✅ **No red errors!**  
✅ **`dist` folder created!**  
✅ **Ready to deploy!**

---

## 🆘 Still Getting Errors?

### Common Issues:

**1. Wrong folder**
- Make sure you're in the correct project folder
- Run `dir` (Windows) or `ls` (Mac/Linux) - you should see `package.json`

**2. Old Node.js**
- Check version: `node --version`
- Should be v16 or higher
- Download latest: https://nodejs.org

**3. Permissions issue**
- Run Command Prompt/Terminal **as Administrator** (Windows)
- Use `sudo` on Mac/Linux

**4. Antivirus blocking**
- Temporarily disable antivirus
- Try build again

**5. Path too long (Windows)**
- Move project closer to root: `C:\Nexus` instead of `C:\Users\LongName\Documents\Projects\Nexus Website Folder`

---

## 📧 Next Steps After Build Works

Once `npm run build` succeeds:

1. ✅ Deploy to Vercel: `npx vercel --prod`
2. ✅ Add your domain in Vercel dashboard
3. ✅ Update DNS in GoDaddy
4. ✅ Website goes live! 🎉

---

**Start with Solution 1 (re-download) - it's the fastest fix!** 🚀
