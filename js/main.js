// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    initNavigation();
    loadPortfolioItems();
    initPortfolioFilters();
    initSmoothScroll();
});

// Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Load Portfolio Items
function loadPortfolioItems() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (!portfolioGrid || typeof portfolioItems === 'undefined') {
        return;
    }

    portfolioItems.forEach(item => {
        const portfolioCard = createPortfolioCard(item);
        portfolioGrid.appendChild(portfolioCard);
    });
}

// Create Portfolio Card
function createPortfolioCard(item) {
    const card = document.createElement('div');
    card.className = 'portfolio-item';
    card.dataset.category = item.category;
    
    card.innerHTML = `
        <div class="portfolio-image">
            <span>${item.icon}</span>
        </div>
        <div class="portfolio-content">
            <span class="portfolio-category">${formatCategory(item.category)}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;
    
    if (item.link && item.link !== '#') {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.open(item.link, '_blank');
        });
    }
    
    return card;
}

// Format Category Name
function formatCategory(category) {
    return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Portfolio Filters
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.dataset.filter;
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.dataset.category === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if href is just "#" or a valid element id
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 70; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.75;
            
            if (isVisible && !section.classList.contains('animated')) {
                section.classList.add('animated');
            }
        });
    }, 100);
});
