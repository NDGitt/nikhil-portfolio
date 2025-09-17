// AI Thought Logger Guide - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initScrollProgress();
    initBackToTop();
    initSmoothScrolling();
    initFadeInAnimations();
    initCopyToClipboard();
    initWorkflowCopy();
});

// Scroll Progress Indicator
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
    
    // Throttle scroll events for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollProgress);
            ticking = true;
        }
    }
    
    function handleScroll() {
        ticking = false;
        requestTick();
    }
    
    window.addEventListener('scroll', handleScroll);
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    // Throttle scroll events
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(toggleBackToTop);
            ticking = true;
        }
    }
    
    function handleScroll() {
        ticking = false;
        requestTick();
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Back to top functionality
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Fade-in Animations on Scroll
function initFadeInAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all step sections
    const stepSections = document.querySelectorAll('.step-section');
    stepSections.forEach(section => {
        observer.observe(section);
    });
}

// Step Navigation removed - no longer needed

// Copy to Clipboard Functionality
function initCopyToClipboard() {
    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll('code');
    
    codeBlocks.forEach(codeBlock => {
        if (codeBlock.textContent.length > 20) { // Only for longer code blocks
            const copyButton = document.createElement('button');
            copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            copyButton.className = 'copy-btn absolute top-2 right-2 px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity';
            copyButton.setAttribute('aria-label', 'Copy to clipboard');
            
            // Wrap code block in relative container
            const wrapper = document.createElement('div');
            wrapper.className = 'relative group';
            codeBlock.parentNode.insertBefore(wrapper, codeBlock);
            wrapper.appendChild(codeBlock);
            wrapper.appendChild(copyButton);
            
            copyButton.addEventListener('click', function() {
                navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                    copyButton.innerHTML = '<i class="fas fa-check text-green-600"></i>';
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 2000);
                });
            });
        }
    });
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // 'T' key for back to top
    if (e.key === 't' || e.key === 'T') {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    
    // 'B' key for bottom
    if (e.key === 'b' || e.key === 'B') {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    }
});

// Analytics Tracking (placeholder)
function trackStepView(stepNumber) {
    // Placeholder for analytics tracking
    console.log(`Step ${stepNumber} viewed`);
    
    // Example: Send to analytics service
    // gtag('event', 'step_view', {
    //     'step_number': stepNumber,
    //     'page_title': document.title
    // });
}

// Track step views when they come into view
function initStepTracking() {
    const stepSections = document.querySelectorAll('.step-section');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stepNumber = entry.target.querySelector('.step-number').textContent;
                trackStepView(stepNumber);
            }
        });
    }, { threshold: 0.5 });
    
    stepSections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize step tracking
initStepTracking();

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Print functionality removed

// Workflow Copy Functionality
function initWorkflowCopy() {
    const copyBtn = document.getElementById('copyWorkflowBtn');
    const successMsg = document.getElementById('copySuccess');
    
    if (!copyBtn) return;
    
    copyBtn.addEventListener('click', async function() {
        try {
            // Fetch the workflow JSON file
            const response = await fetch('AI-Thought-Logger-Workflow.json');
            const workflowData = await response.text();
            
            // Copy to clipboard
            await navigator.clipboard.writeText(workflowData);
            
            // Show success message
            successMsg.classList.remove('hidden');
            
            // Update button temporarily
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Copied!';
            copyBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
            copyBtn.classList.add('bg-green-700');
            
            // Reset after 3 seconds
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.classList.remove('bg-green-700');
                copyBtn.classList.add('bg-green-600', 'hover:bg-green-700');
                successMsg.classList.add('hidden');
            }, 3000);
            
        } catch (error) {
            console.error('Failed to copy workflow:', error);
            
            // Show error state
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Failed to Copy';
            copyBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
            copyBtn.classList.add('bg-red-600');
            
            // Reset after 3 seconds
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.classList.remove('bg-red-600');
                copyBtn.classList.add('bg-green-600', 'hover:bg-green-700');
            }, 3000);
        }
    });
}
