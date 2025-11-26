// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // Simulate form submission
    alert('Thank you for subscribing! We\'ll send updates to: ' + email);
    emailInput.value = '';
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 64;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Wishlist Button Functionality
const wishlistButtons = document.querySelectorAll('.wishlist-btn');
wishlistButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        
        // Visual feedback
        if (this.classList.contains('active')) {
            this.style.color = '#dc2626';
            alert('Added to wishlist!');
        } else {
            this.style.color = '#000000';
            alert('Removed from wishlist!');
        }
    });
});

// Product Card Click (simulate navigation)
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', function() {
        const productName = this.querySelector('h3').textContent;
        alert('Viewing product: ' + productName);
        // In a real application, this would navigate to the product detail page
    });
});

// Collection Card Click (simulate navigation)
const collectionCards = document.querySelectorAll('.collection-card');
collectionCards.forEach(card => {
    card.addEventListener('click', function() {
        const collectionName = this.querySelector('h3').textContent;
        alert('Viewing collection: ' + collectionName);
        // In a real application, this would navigate to the collection page
    });
});

// Shopping Cart Functionality (placeholder)
const cartBtn = document.querySelector('.cart-btn');
cartBtn.addEventListener('click', function() {
    alert('Shopping cart is empty (0 items)');
    // In a real application, this would open the shopping cart
});

// Search Button Functionality (placeholder)
const searchBtns = document.querySelectorAll('.icon-btn:first-child');
searchBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const searchTerm = prompt('Enter search term:');
        if (searchTerm) {
            alert('Searching for: ' + searchTerm);
            // In a real application, this would perform a search
        }
    });
});

// User Account Button (placeholder)
const userBtns = document.querySelectorAll('.icon-btn:nth-child(2)');
userBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Please log in to access your account');
        // In a real application, this would show login/account page
    });
});

// Hero CTA Buttons
const shopNowBtn = document.querySelector('.btn-primary');
const exploreBtn = document.querySelector('.btn-outline');

if (shopNowBtn) {
    shopNowBtn.addEventListener('click', function() {
        document.querySelector('#new').scrollIntoView({ behavior: 'smooth' });
    });
}

if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
        document.querySelector('#collections').scrollIntoView({ behavior: 'smooth' });
    });
}

// View All Products Button
const viewAllBtn = document.querySelector('.view-all .btn');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', function() {
        alert('Loading all products...');
        // In a real application, this would navigate to the products page
    });
}

// Add parallax effect to hero section (optional enhancement)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-image img');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
});

// Console message for developers
console.log('LUXE Clothing Brand Website - Loaded Successfully');
console.log('This is a demo website. All product data is placeholder.');
```