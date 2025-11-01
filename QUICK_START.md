# Quick Start Guide - Adding Your Content

This guide will help you quickly add your own portfolio items, social media posts, and other content to your website.

## Adding Portfolio Items (Easiest Method)

1. Open the file: `js/portfolio-data.js`
2. Find the `portfolioItems` array (starts around line 5)
3. Copy one of the existing items and paste it at the end
4. Update the details:

```javascript
{
    id: 9,  // Change this to the next number
    title: "Your Project Name",
    category: "development",  // Pick one: development, social-media, branding, copywriting
    description: "Brief description of what you did",
    icon: "🚀",  // Pick any emoji
    link: "#"  // Add a URL or leave as "#"
}
```

### Example: Adding Freeman Liquidators Details

```javascript
{
    id: 9,
    title: "Freeman Liquidators - Complete Website",
    category: "development",
    description: "Built a full e-commerce website with product catalog, contact forms, and responsive design for Freeman Liquidators.",
    icon: "🏪",
    link: "https://freemanliquidators.com"
}
```

### Example: Adding Social Media Posts

```javascript
{
    id: 10,
    title: "Instagram Growth Campaign",
    category: "social-media",
    description: "Created and managed a 30-day Instagram campaign that increased followers by 45% and engagement by 120%.",
    icon: "📸",
    link: "https://instagram.com/yourprofile"
}
```

### Example: Adding Branding Work

```javascript
{
    id: 11,
    title: "TechStart Logo & Brand Identity",
    category: "branding",
    description: "Designed complete brand identity including logo, color palette, typography, and brand guidelines for a tech startup.",
    icon: "🎨",
    link: "#"
}
```

### Example: Adding Copywriting Work

```javascript
{
    id: 12,
    title: "E-commerce Product Descriptions",
    category: "copywriting",
    description: "Wrote compelling product descriptions for 50+ items that increased conversion rate by 35%.",
    icon: "✍️",
    link: "#"
}
```

## Updating Your Personal Information

### Change Your Name
1. Open `index.html`
2. Search for "Kelcyn Newton" (Ctrl+F or Cmd+F)
3. Replace with your name in all locations

### Change Your Title/Subtitle
1. Open `index.html`
2. Find the hero section (around line 35)
3. Update:
   - `<p class="hero-subtitle">` - Your title/profession
   - `<p class="hero-description">` - Your description

### Update About Me Section
1. Open `index.html`
2. Find the "About Section" (around line 45)
3. Update the paragraphs with your own story

### Update Contact Information
1. Open `index.html`
2. Find the "Contact Section" (around line 80)
3. Update:
   - Email: `mailto:contact@kelcynnewton.com` → your email
   - LinkedIn: `https://linkedin.com/in/kelcynnewton` → your LinkedIn
   - Twitter: `https://twitter.com/kelcynnewton` → your Twitter

## Testing Your Changes

1. Save all files
2. Open `index.html` in your web browser
3. Check that your changes appear correctly
4. Test the filter buttons to ensure your items show in the right category

## Publishing Your Website

### Option 1: GitHub Pages (Free & Easy)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select your branch and click Save
4. Your site will be live at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify (Free & Easy)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Get an instant URL

### Option 3: Your Own Domain
1. Use any web hosting service
2. Upload all files to your hosting
3. Point your domain to the hosting

## Tips for Success

✅ **Start Simple**: Add 4-6 of your best projects first
✅ **Be Specific**: Use concrete details and results in descriptions
✅ **Update Regularly**: Add new projects as you complete them
✅ **Use Real Links**: Link to live projects whenever possible
✅ **Test on Mobile**: Check how it looks on your phone

## Need Help?

- Check the main `README.md` for more detailed information
- All code is well-commented for easy understanding
- The structure is simple: HTML for content, CSS for styling, JS for interactivity

## Next Steps

1. Replace sample portfolio items with your real work
2. Update all personal information (name, email, social links)
3. Customize the about section with your story
4. Add images if desired (see README.md for instructions)
5. Deploy to GitHub Pages or Netlify
6. Share your portfolio!

---

**Remember**: You only need to edit `js/portfolio-data.js` to add new portfolio items. Everything else is optional!
