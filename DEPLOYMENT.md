# 🚀 Deployment Guide - FreshFarms India Website

## Quick Deploy to Vercel (Recommended - FREE)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com)
2. **Sign in with GitHub**: Click "Sign Up" and choose "Continue with GitHub"
3. **Import Repository**: 
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Find and select `adityakashid21/samirfood`
4. **Configure Project**:
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**: Click "Deploy" button
6. **Done!** Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? samirfood (or your choice)
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

---

## Alternative: Deploy to Netlify (Also FREE)

### Via Netlify Dashboard

1. **Go to Netlify**: Visit [netlify.com](https://netlify.com)
2. **Sign in with GitHub**
3. **Add New Site**: Click "Add new site" → "Import an existing project"
4. **Connect to GitHub**: Select your repository `adityakashid21/samirfood`
5. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Deploy**: Click "Deploy site"
7. **Custom Domain** (optional): Go to "Domain settings" to add your custom domain

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

---

## Alternative: Deploy to GitHub Pages

1. **Install gh-pages package**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json** - Add these scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Update vite.config.ts** - Add base URL:
```typescript
export default defineConfig({
  base: '/samirfood/',
  // ... rest of config
})
```

4. **Deploy**:
```bash
npm run deploy
```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)
   - Save

6. **Your site will be live at**: `https://adityakashid21.github.io/samirfood/`

---

## Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS settings with Vercel's nameservers

### For Netlify:
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

---

## Environment Variables (if needed)

If you need to add environment variables:

### Vercel:
1. Go to Project Settings → Environment Variables
2. Add your variables (e.g., API keys)

### Netlify:
1. Go to Site settings → Environment variables
2. Add your variables

---

## Build Locally (Optional)

To test the production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

---

## Recommended: Vercel Deployment

**Why Vercel?**
- ✅ Free for personal projects
- ✅ Automatic deployments on git push
- ✅ Built-in CDN
- ✅ SSL certificates included
- ✅ Perfect for Vite/React projects
- ✅ Easy custom domain setup
- ✅ Excellent performance

**Your site will be live in under 2 minutes!** 🚀

---

## Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify all images load correctly
- [ ] Check mobile responsiveness
- [ ] Test all CTAs and links
- [ ] Verify animations work smoothly
- [ ] Test contact forms/scheduling
- [ ] Check SEO meta tags
- [ ] Set up custom domain (optional)
- [ ] Add Google Analytics (optional)

---

## Support

If you encounter any issues:
1. Check the build logs in your deployment platform
2. Ensure all dependencies are in package.json
3. Verify the build command completes successfully locally
4. Check for any environment-specific issues

**Happy Deploying! 🎉**
