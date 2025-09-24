// Dark/Light Mode Toggle Functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.body = document.body;
        this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        this.init();
    }
    
    init() {
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = this.prefersDarkScheme.matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;
        
        this.setTheme(initialTheme);
        this.themeToggle.checked = initialTheme === 'dark';
        
        // Listen for toggle changes
        this.themeToggle.addEventListener('change', () => {
            const newTheme = this.themeToggle.checked ? 'dark' : 'light';
            this.setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
        
        // Listen for system theme changes
        this.prefersDarkScheme.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
                this.themeToggle.checked = e.matches;
            }
        });
    }
    
    setTheme(theme) {
        if (theme === 'dark') {
            this.body.setAttribute('data-theme', 'dark');
        } else {
            this.body.removeAttribute('data-theme');
        }
        
        // Add smooth transition for theme change
        this.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            this.body.style.transition = '';
        }, 300);
    }
}

// Enhanced animations and interactions
class AnimationManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupClickEffects();
    }
    
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.info-section, .contact-item, .profile-section');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    setupHoverEffects() {
        // Enhanced hover effects for tags
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.addEventListener('mouseenter', (e) => {
                this.createRippleEffect(e);
            });
        });
        
        // Enhanced hover effects for contact items
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
    
    setupClickEffects() {
        // Add click animation to interactive elements
        const clickableElements = document.querySelectorAll('.contact-item a, .tag, .theme-toggle');
        
        clickableElements.forEach(element => {
            element.addEventListener('click', function(e) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }
    
    createRippleEffect(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Typing animation for the name
class TypingAnimation {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
    }
    
    start() {
        this.element.textContent = '';
        this.type();
    }
    
    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// Smooth scrolling for better UX
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Add scroll-to-top functionality (if needed for longer content)
        this.addScrollToTop();
    }
    
    addScrollToTop() {
        // This could be extended for longer pages
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add some scroll-based effects here if needed
            if (scrollTop > 100) {
                document.querySelector('.theme-toggle').style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                document.querySelector('.theme-toggle').style.background = '';
            }
        });
    }
}

// Performance optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Lazy load images
        this.lazyLoadImages();
        
        // Optimize animations
        this.optimizeAnimations();
    }
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    optimizeAnimations() {
        // Reduce motion for users who prefer it
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            document.body.classList.add('reduce-motion');
        }
        
        // Add CSS for reduced motion
        if (prefersReducedMotion.matches) {
            const style = document.createElement('style');
            style.textContent = `
                .reduce-motion *,
                .reduce-motion *::before,
                .reduce-motion *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new ThemeManager();
    new AnimationManager();
    new SmoothScroll();
    new PerformanceOptimizer();
    
    // Add typing animation to name (optional, can be disabled for simplicity)
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        // Uncomment next line to enable typing animation
        // new TypingAnimation(nameElement, originalText, 80).start();
    }
    
    // Add CSS for ripple animation
    const rippleCSS = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .loaded {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        
        .animate-in {
            animation-play-state: running;
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = rippleCSS;
    document.head.appendChild(style);
    
    console.log('🎨 V-Card initialized with modern interactions and theme support!');
});

// Add some easter eggs for fun
document.addEventListener('keydown', (e) => {
    // Konami code easter egg
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
    window.konamiSequence = window.konamiSequence || [];
    window.konamiSequence.push(e.keyCode);
    
    if (window.konamiSequence.length > konamiCode.length) {
        window.konamiSequence.shift();
    }
    
    if (JSON.stringify(window.konamiSequence) === JSON.stringify(konamiCode)) {
        document.querySelector('.vcard').style.animation = 'pulse 0.5s ease-in-out 3';
        console.log('🎉 Easter egg activated!');
        window.konamiSequence = [];
    }
});