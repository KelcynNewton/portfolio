# Kelcyn Newton - Portfolio Website

A modern, responsive portfolio website showcasing development work, social media content, branding projects, and copywriting samples.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Portfolio Categories**: Development, Social Media, Branding, and Copywriting
- **Interactive Filtering**: Filter portfolio items by category
- **Smooth Animations**: Modern, smooth transitions and animations
- **Easy to Update**: Simple data structure for adding new portfolio items
- **Clean Code**: Well-organized HTML, CSS, and JavaScript

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and responsive design
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── portfolio-data.js  # Portfolio items data (EDIT THIS TO ADD NEW ITEMS)
├── images/                # Store your images here
└── README.md              # This file
```

## 🚀 Getting Started

1. **View the Website**: Simply open `index.html` in your web browser
2. **No Build Process**: This is a static website - no compilation or build steps needed!

## ✏️ How to Add New Portfolio Items

Adding new work to your portfolio is easy! Just edit the `js/portfolio-data.js` file.

### Step-by-Step Guide:

1. Open `js/portfolio-data.js`
2. Find the `portfolioItems` array
3. Add a new object with this structure:

```javascript
{
    id: 9,  // Increment from the last ID
    title: "Your Project Title",
    category: "development",  // Options: "development", "social-media", "branding", "copywriting"
    description: "A brief description of your project or work.",
    icon: "🎯",  // Any emoji that represents your project
    link: "#"  // URL to the project (or "#" if no link)
}
```

### Example: Adding Freeman Liquidators Website Details

```javascript
{
    id: 9,
    title: "Freeman Liquidators - Full Site",
    category: "development",
    description: "Complete responsive website with product catalog, contact forms, and modern design elements.",
    icon: "🏪",
    link: "https://freemanliquidators.com"
}
```

### Category Options:
- `development` - For web development projects
- `social-media` - For social media posts and campaigns
- `branding` - For logo design, brand identity work
- `copywriting` - For written content, copy, and content strategy

## 🎨 Customization

### Change Colors:
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;     /* Main brand color */
    --secondary-color: #8b5cf6;   /* Accent color */
    --dark-color: #1e293b;        /* Dark text/backgrounds */
    --light-color: #f8fafc;       /* Light backgrounds */
}
```

### Update Personal Information:
- **Name**: Edit in `index.html` - search for "Kelcyn Newton"
- **Title/Subtitle**: Edit in the hero section
- **About Text**: Edit in the about section
- **Contact Links**: Update email and social media links in the contact section

### Add Images:
1. Place images in the `images/` folder
2. In `portfolio-data.js`, you can reference them:
   ```javascript
   image: "images/your-project.jpg"
   ```
3. Update the portfolio card creation in `js/main.js` to display images instead of icons

## 📱 Adding Social Media Posts

To showcase social media work:

1. Take screenshots of your posts
2. Save them in the `images/` folder (e.g., `images/social-post-1.jpg`)
3. Add them to `portfolio-data.js`:

```javascript
{
    id: 10,
    title: "Instagram Engagement Campaign",
    category: "social-media",
    description: "Series of posts that increased engagement by 150%",
    icon: "📸",
    image: "images/social-post-1.jpg",
    link: "https://instagram.com/yourprofile"
}
```

## 🎯 Tips for Great Portfolio Content

1. **Be Specific**: Instead of "Website Design", use "E-commerce Website with 50+ Products"
2. **Show Results**: Include metrics when possible (e.g., "Increased engagement by 150%")
3. **Keep Descriptions Concise**: 1-2 sentences per project
4. **Update Regularly**: Add new work as you complete it
5. **Use Quality Images**: If adding images, ensure they're optimized for web

## 🔧 Deployment

### Deploy to GitHub Pages:
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select your branch and save
4. Your site will be live at `https://yourusername.github.io/portfolio`

### Deploy to Netlify:
1. Connect your GitHub repository to Netlify
2. No build command needed - it's a static site!
3. Deploy and get a custom URL

## 📝 License

This project is open source and available for personal use.

## 🤝 Need Help?

If you need assistance adding content or customizing the site, the code is well-commented and organized for easy modifications.