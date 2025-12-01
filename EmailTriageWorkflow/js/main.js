// AI Email Manager - Interactive JavaScript

// ============================================
// 1. COPY WORKFLOW JSON TO CLIPBOARD
// ============================================
const copyWorkflowBtn = document.getElementById('copy-workflow-btn');
const workflowJsonElement = document.getElementById('workflow-json');

// Load workflow JSON from external file
async function loadWorkflowJson() {
    try {
        const response = await fetch('workflow.json');
        const json = await response.json();
        if (workflowJsonElement) {
            workflowJsonElement.textContent = JSON.stringify(json, null, 2);
        }
    } catch (error) {
        console.error('Error loading workflow JSON:', error);
    }
}

// Copy workflow JSON to clipboard
if (copyWorkflowBtn && workflowJsonElement) {
    copyWorkflowBtn.addEventListener('click', async () => {
        const workflowText = workflowJsonElement.textContent;

        try {
            await navigator.clipboard.writeText(workflowText);

            // Update button to show success
            const originalText = copyWorkflowBtn.innerText;
            copyWorkflowBtn.innerText = 'Copied!';
            copyWorkflowBtn.classList.add('bg-green-600', 'hover:bg-green-500');
            copyWorkflowBtn.classList.remove('bg-blue-600', 'hover:bg-blue-500');

            // Reset button after 2 seconds
            setTimeout(() => {
                copyWorkflowBtn.innerText = originalText;
                copyWorkflowBtn.classList.remove('bg-green-600', 'hover:bg-green-500');
                copyWorkflowBtn.classList.add('bg-blue-600', 'hover:bg-blue-500');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            alert('Failed to copy to clipboard. Please try again.');
        }
    });
}

// ============================================
// 2. SMOOTH SCROLLING FOR ANCHOR LINKS
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
// 3. FADE-IN ANIMATION ON SCROLL
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
    loadWorkflowJson();
    console.log('AI Email Manager loaded successfully');
});
