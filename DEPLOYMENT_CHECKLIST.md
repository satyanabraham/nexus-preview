# ✅ Deploy Nexus Website - Simple Checklist

Copy this checklist and check off each step as you complete it!

---

## Before You Start

- [ ] Project folder downloaded and extracted to your Desktop
- [ ] Command Prompt/Terminal open in project folder
- [ ] Internet connection active

---

## Step 1: Build the Website (5 minutes)

Open Terminal/Command Prompt in your project folder.

**Type these commands (one at a time):**

```bash
npm install
```
⏳ Wait 2-3 minutes...

- [ ] `npm install` completed successfully (no red errors)

```bash
npm run build
```
⏳ Wait 1-2 minutes...

- [ ] `npm run build` completed successfully
- [ ] A `dist` folder appeared in your project

✅ **Build complete!** Your website is ready.

---

## Step 2: Deploy to Vercel (3 minutes)

### Option A: Using Vercel CLI (Terminal)

```bash
npx vercel
```

- [ ] Browser opened for Vercel login
- [ ] Logged in to Vercel (or created account)
- [ ] Answered setup questions in terminal
- [ ] Got a live URL (e.g., `your-project.vercel.app`)
- [ ] Website loads at that URL ✨

### Option B: Using Vercel Website (Drag & Drop)

- [ ] Went to [vercel.com](https://vercel.com)
- [ ] Signed up/logged in
- [ ] Clicked "Add New... → Project"
- [ ] Dragged entire project folder to the page
- [ ] Clicked "Deploy"
- [ ] Got a live URL ✨
- [ ] Website loads correctly

✅ **Deployment complete!** Your site is online.

---

## Step 3: Add Custom Domain (5 minutes)

### In Vercel Dashboard:

- [ ] Opened [vercel.com/dashboard](https://vercel.com/dashboard)
- [ ] Clicked your project name
- [ ] Went to "Settings" → "Domains"
- [ ] Added `nexus-aidc.com`
- [ ] Added `www.nexus-aidc.com`
- [ ] Noted the DNS records shown by Vercel

### In GoDaddy:

- [ ] Logged into [godaddy.com](https://godaddy.com)
- [ ] Went to "My Products"
- [ ] Found `nexus-aidc.com`
- [ ] Clicked "DNS" or "Manage DNS"
- [ ] Added A record: Type=`A`, Name=`@`, Value=`76.76.21.21`
- [ ] Added CNAME record: Type=`CNAME`, Name=`www`, Value=`cname.vercel-dns.com`
- [ ] Clicked "Save"

✅ **Domain connected!** Now wait for DNS...

---

## Step 4: Wait for DNS Propagation (10-60 minutes)

- [ ] Waited at least 10 minutes
- [ ] Checked Vercel dashboard (SSL certificate ready?)
- [ ] Tried visiting `https://nexus-aidc.com`
- [ ] Website loads at your custom domain! 🎉
- [ ] Tried visiting `https://www.nexus-aidc.com`
- [ ] Both URLs work perfectly! ✨

✅ **Website is LIVE!** 🚀

---

## Step 5: Set Up Email (Optional - 10 minutes)

### Free Email Forwarding:

- [ ] In GoDaddy → "Email & Office"
- [ ] Set up "Email Forwarding"
- [ ] Forward `contact@nexus-aidc.com` to your personal email
- [ ] Tested by sending email to contact@nexus-aidc.com

### OR Professional Email ($1.99/month):

- [ ] In GoDaddy → Purchased "Email Essentials"
- [ ] Created `contact@nexus-aidc.com` mailbox
- [ ] Configured in email client or using webmail
- [ ] Tested sending/receiving

✅ **Email working!**

---

## Final Checklist

- [ ] ✅ Website builds successfully (`npm run build`)
- [ ] ✅ Deployed to Vercel
- [ ] ✅ Vercel URL works (e.g., your-project.vercel.app)
- [ ] ✅ Custom domain added in Vercel
- [ ] ✅ DNS records updated in GoDaddy
- [ ] ✅ Website loads at https://nexus-aidc.com
- [ ] ✅ Website loads at https://www.nexus-aidc.com
- [ ] ✅ SSL certificate active (https:// works)
- [ ] ✅ All pages working (Home, Platform, Solutions, etc.)
- [ ] ✅ Navigation working correctly
- [ ] ✅ Contact form functional
- [ ] ✅ Email set up (optional)

---

## 🎉 SUCCESS!

**Your Nexus AI Data Center website is LIVE!**

Share your link: https://nexus-aidc.com

---

## 🆘 Troubleshooting

**Build fails?**
- [ ] Deleted `node_modules` folder
- [ ] Ran `npm install` again
- [ ] Tried `npm run build` again

**Deployment fails?**
- [ ] Tried different browser
- [ ] Cleared browser cache
- [ ] Tried Vercel website instead of CLI (or vice versa)

**Domain not working?**
- [ ] Double-checked DNS records (exact spelling matters!)
- [ ] Waited 2-4 hours (DNS can be slow)
- [ ] Checked Vercel dashboard for SSL status
- [ ] Tried incognito/private browser window
- [ ] Cleared browser cache

**Need more help?**
- [ ] Read QUICK_START.md
- [ ] Read VERCEL_DEPLOYMENT_GUIDE.md
- [ ] Visit vercel.com/docs
- [ ] Ask on Vercel Discord
- [ ] Hire help on Fiverr ($10-20)

---

**Print this page and check off items as you go! Good luck! 🚀**
