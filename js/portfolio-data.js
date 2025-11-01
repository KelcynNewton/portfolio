// Portfolio Data
// This file contains all portfolio items
// To add new portfolio items, simply add new objects to the portfolioItems array

const portfolioItems = [
    {
        id: 1,
        title: "Freeman Liquidators Website",
        category: "development",
        description: "A complete website solution for Freeman Liquidators, featuring modern design, responsive layout, and user-friendly navigation.",
        icon: "🌐",
        link: "#"
    },
    {
        id: 2,
        title: "Social Media Campaign",
        category: "social-media",
        description: "Engaging social media content and campaigns that drive audience engagement and brand awareness.",
        icon: "📱",
        link: "#"
    },
    {
        id: 3,
        title: "Brand Identity Design",
        category: "branding",
        description: "Complete brand identity packages including logo design, color schemes, and brand guidelines.",
        icon: "🎨",
        link: "#"
    },
    {
        id: 4,
        title: "Product Copywriting",
        category: "copywriting",
        description: "Compelling product descriptions and marketing copy that converts visitors into customers.",
        icon: "✍️",
        link: "#"
    },
    {
        id: 5,
        title: "E-commerce Solutions",
        category: "development",
        description: "Custom e-commerce websites built with modern technologies and best practices.",
        icon: "🛒",
        link: "#"
    },
    {
        id: 6,
        title: "Content Strategy Posts",
        category: "social-media",
        description: "Strategic social media posts that align with brand voice and marketing goals.",
        icon: "📊",
        link: "#"
    },
    {
        id: 7,
        title: "Logo & Visual Identity",
        category: "branding",
        description: "Professional logo designs and visual identity systems for businesses.",
        icon: "💼",
        link: "#"
    },
    {
        id: 8,
        title: "Website Copy & Content",
        category: "copywriting",
        description: "SEO-optimized website content that tells your brand story and drives conversions.",
        icon: "📝",
        link: "#"
    }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioItems };
}
