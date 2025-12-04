// AI Email Manager - Interactive JavaScript

// ============================================
// 1. SCROLL PROGRESS INDICATOR
// ============================================
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('resize', updateScrollProgress);

// ============================================
// 2. BACK TO TOP BUTTON
// ============================================
const backToTopBtn = document.getElementById('back-to-top');

function updateBackToTopButton() {
    if (backToTopBtn) {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
            backToTopBtn.classList.add('opacity-100');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
            backToTopBtn.classList.remove('opacity-100');
        }
    }
}

window.addEventListener('scroll', updateBackToTopButton);

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// 3. COPY WORKFLOW JSON TO CLIPBOARD
// ============================================
function initWorkflowCopy() {
    const copyBtn = document.getElementById('copy-workflow-btn');
    const successMsg = document.getElementById('copy-success');
    
    if (!copyBtn) return;
    
    copyBtn.addEventListener('click', async function() {
        try {
            // Fetch the workflow JSON file on-demand
            const response = await fetch('workflow.json');
            const workflowData = await response.text();
            
            // Copy to clipboard
            await navigator.clipboard.writeText(workflowData);
            
            // Show success message
            if (successMsg) {
                successMsg.classList.remove('hidden');
            }
            
            // Update button temporarily
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Copied!';
            copyBtn.classList.remove('bg-white', 'border-gray-200', 'text-gray-700', 'hover:border-blue-500', 'hover:text-blue-600');
            copyBtn.classList.add('bg-green-600', 'text-white', 'border-green-600');
            
            // Reset after 3 seconds
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.classList.remove('bg-green-600', 'text-white', 'border-green-600');
                copyBtn.classList.add('bg-white', 'border-gray-200', 'text-gray-700', 'hover:border-blue-500', 'hover:text-blue-600');
                if (successMsg) {
                    successMsg.classList.add('hidden');
                }
            }, 3000);
            
        } catch (error) {
            console.error('Failed to copy workflow:', error);
            
            // Show error state
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Failed to Copy';
            copyBtn.classList.remove('bg-white', 'border-gray-200', 'text-gray-700', 'hover:border-blue-500', 'hover:text-blue-600');
            copyBtn.classList.add('bg-red-600', 'text-white', 'border-red-600');
            
            // Reset after 3 seconds
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.classList.remove('bg-red-600', 'text-white', 'border-red-600');
                copyBtn.classList.add('bg-white', 'border-gray-200', 'text-gray-700', 'hover:border-blue-500', 'hover:text-blue-600');
            }, 3000);
        }
    });
}

// ============================================
// 4. SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 5. FADE-IN ANIMATION ON SCROLL
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initWorkflowCopy();
    updateScrollProgress();
    updateBackToTopButton();
    console.log('AI Email Manager loaded successfully');
});
