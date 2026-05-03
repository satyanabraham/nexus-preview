# 🔧 Fix Build Error - Clear Cache

## The Problem

You're seeing this error because Vite/Node has cached the old `figma:asset` imports. The code has been fixed, but the cache needs to be cleared.

---

## ✅ Solution (Run These Commands)

### Step 1: Delete Cache and Build Folders

**On Windows (Command Prompt):**
```cmd
rmdir /s /q node_modules
rmdir /s /q dist
rmdir /s /q .vite
del package-lock.json
```

**On Windows (PowerShell):**
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force dist
Remove-Item -Recurse -Force .vite
Remove-Item -Force package-lock.json
```

**On Mac/Linux:**
```bash
rm -rf node_modules dist .vite package-lock.json
```

---

### Step 2: Reinstall and Build

```bash
npm install
npm run build
```

This should work now! ✅

---

## 🆘 If That Doesn't Work

Try this alternative approach:

### Option A: Clear npm cache
```bash
npm cache clean --force
npm install
npm run build
```

### Option B: Use a fresh project folder
1. Create a new folder: `C:\NEXUS\Nexus_Clean`
2. Copy ALL your project files to the new folder
3. Delete `node_modules` and `dist` from the new folder
4. In the new folder, run:
   ```bash
   npm install
   npm run build
   ```

### Option C: Restart your computer
- Sometimes Windows locks files
- Restart and try again with the commands above

---

## ✅ Success Check

After running the commands, you should see:
- ✅ No red errors
- ✅ `dist` folder created
- ✅ Message saying "build complete" or similar

---

## 📧 Still Not Working?

If you still see the `figma:asset` error:

1. **Verify the files were actually updated:**
   - Open `C:\NEXUS\Nexus Website Folder\src\app\pages\platform\DCIM.tsx`
   - Lines 6-7 should start with `const facilitiesFloorPlanImage =` (NOT `import ... from 'figma:asset'`)
   - If you still see `import from 'figma:asset'`, the file wasn't saved properly

2. **Re-download the project:**
   - Make sure you have the latest version from Figma Make
   - The files should already be fixed

---

**Try the commands above now!** 🚀
