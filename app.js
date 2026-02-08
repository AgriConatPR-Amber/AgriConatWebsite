// app.js

// Smooth Scroll Animation
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Bot Detection (simple example)
function isBot() {
    const userAgent = navigator.userAgent;
    const bots = ['Googlebot', 'Bingbot', 'Slurp'];
    return bots.some(bot => userAgent.includes(bot));
}

// Rate Limiting for Form Submissions
let lastSubmitted = 0;
const rateLimit = 3000; // 3 seconds

function submitForm() {
    const now = Date.now();
    if (now - lastSubmitted < rateLimit) {
        alert('Please wait before submitting again.');
        return;
    }
    lastSubmitted = now;
    // Submit form logic goes here
}

// Click Protection for Action Buttons
function protectClick(button) {
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
    }, 3000); // 3 seconds
}

// Smooth Scrolling Interactions
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        smoothScroll(targetId, 1000);
    });
});
