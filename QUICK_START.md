# ⚡ Quick Start - Deploy in 5 Minutes

## Your website is ready to deploy! All Figma assets have been replaced with production URLs.

---

## 🎯 FASTEST METHOD: Use Vercel Website

### Step 1: Build Your Project (2 minutes)

Open Command Prompt/Terminal in your project folder and run:

```bash
npm install && npm run build
```

Wait for it to complete. You'll see a `dist` folder appear.

---

### Step 2: Deploy to Vercel (1 minute)

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** (use your email)
3. Click **"Add New..." → "Project"**
4. **Drag your entire project folder** onto the page
5. Click **"Deploy"**

✅ Done! You'll get a live URL instantly!

---

### Step 3: Add Your Custom Domain (2 minutes)

**In Vercel:**
1. Click your project name
2. Go to **"Settings" → "Domains"**
3. Enter: `nexus-aidc.com` → Click **"Add"**
4. Also add: `www.nexus-aidc.com` → Click **"Add"**

**In GoDaddy:**
1. Log in to [godaddy.com](https://godaddy.com)
2. Go to **"My Products" → nexus-aidc.com → "DNS"**
3. Add these 2 records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

4. Click **"Save"**

---

## ⏱️ Wait 10-60 Minutes

DNS needs to propagate. Check back in an hour and visit:
- ✅ **https://nexus-aidc.com**
- ✅ **https://www.nexus-aidc.com**

Your website is LIVE! 🎉

---

## 🆘 If You Get Stuck

**Build errors?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Can't deploy?**
- Try using different browser
- Clear browser cache
- Make sure you're signed into Vercel

**Domain not working?**
- Wait longer (DNS can take up to 24 hours)
- Double-check DNS records in GoDaddy
- Make sure you clicked "Save" in GoDaddy

---

## 🎨 What's Included

Your website now has:
- ✅ All 5 main sections working
- ✅ Interactive demo page
- ✅ Video backgrounds
- ✅ Career page with job listings
- ✅ Contact information updated
- ✅ All images from production CDN (Unsplash)
- ✅ NVIDIA-inspired green design
- ✅ Responsive on all devices

---

**That's it! Get started now! 🚀**
