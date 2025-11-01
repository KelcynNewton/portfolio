# Deployment Guide

This guide will help you deploy your portfolio website to make it accessible online.

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Steps:
1. **Your code is already on GitHub** ✓
2. Go to your repository: `https://github.com/KelcynNewton/portfolio`
3. Click on **Settings** (top menu)
4. Scroll down to **Pages** section (left sidebar under "Code and automation")
5. Under "Source", select **Deploy from a branch**
6. Select your branch (likely `main` or `copilot/create-portfolio-website`)
7. Select folder: **/ (root)**
8. Click **Save**

### Result:
- Your site will be live at: `https://kelcynnewton.github.io/portfolio/`
- It may take 1-2 minutes to deploy
- Updates automatically when you push changes

## Option 2: Netlify (Also Free & Easy)

### Method A: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub (free)
3. Drag and drop your portfolio folder
4. Get instant URL like: `your-portfolio.netlify.app`

### Method B: Connect GitHub
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select your `KelcynNewton/portfolio` repository
5. **Build settings:**
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. Click "Deploy"

### Result:
- Get a URL like: `kelcyn-portfolio.netlify.app`
- Can add custom domain later
- Auto-deploys on git push

## Option 3: Custom Domain

### If you own a domain:

1. **With GitHub Pages:**
   - Add a `CNAME` file with your domain name
   - Configure DNS with your domain provider:
     - Type: `CNAME`
     - Name: `www`
     - Value: `kelcynnewton.github.io`

2. **With Netlify:**
   - Go to Site settings → Domain management
   - Add custom domain
   - Follow DNS configuration instructions

## Option 4: Other Hosting Services

Your portfolio works on ANY static hosting:
- **Vercel**: Similar to Netlify, free tier available
- **Cloudflare Pages**: Fast, free static hosting
- **Traditional hosting**: Upload files via FTP to any web host

### Files to upload:
```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── portfolio-data.js
└── images/  (if you add images)
```

## After Deployment Checklist

- [ ] Test the live site on desktop and mobile
- [ ] Verify all links work (especially contact links)
- [ ] Check portfolio filtering functionality
- [ ] Test navigation menu on mobile
- [ ] Update social media links with your real profiles
- [ ] Share your portfolio URL!

## Updating Your Live Site

### GitHub Pages:
1. Edit files locally
2. Commit changes: `git add . && git commit -m "Update portfolio"`
3. Push: `git push`
4. Wait 1-2 minutes for automatic deployment

### Netlify:
Same as above - Netlify auto-deploys on push if connected to GitHub

## Troubleshooting

### GitHub Pages shows 404
- Wait a few minutes after setup
- Check that you selected the correct branch and folder
- Ensure `index.html` is in the root directory

### Styles not loading
- Check that folder structure is maintained
- Ensure `css/` and `js/` folders are uploaded
- Verify paths in `index.html` are correct (they are by default)

### Images not showing
- Ensure images are in the `images/` folder
- Check file paths in `portfolio-data.js`
- Verify image files are committed to git

## Best Practices

1. **Use HTTPS**: Both GitHub Pages and Netlify provide free SSL
2. **Test before sharing**: Check on different devices
3. **Monitor analytics**: Add Google Analytics if desired
4. **Keep it updated**: Add new projects regularly
5. **Backup**: Your code is backed up on GitHub ✓

## Getting Your URL

After deployment, your portfolio will be accessible at:
- **GitHub Pages**: `https://kelcynnewton.github.io/portfolio/`
- **Netlify**: `https://your-site-name.netlify.app`
- **Custom domain**: `https://yourdomain.com`

Add this URL to:
- Your email signature
- LinkedIn profile
- Resume
- Social media bios
- Business cards

---

Need help? Check the main README.md or create an issue on GitHub.
