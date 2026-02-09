// Smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Rate limiting for form submissions
let submitCount = 0;
const submitLimit = 5;
const timeFrame = 60000; // 1 minute
let lastSubmitTime = 0;

function canSubmit() {
    const now = Date.now();
    if (now - lastSubmitTime < timeFrame) {
        return submitCount < submitLimit;
    }
    submitCount = 0;
    lastSubmitTime = now;
    return true;
}

// Contact form handling (demo – add real backend later)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!canSubmit()) {
            alert('You have reached the submission limit for now. Please try again in a minute.');
            return;
        }
        submitCount++;
        lastSubmitTime = Date.now();
        alert('Thank you! Your message has been sent. (This is a demo – no real email sent)');
        form.reset();
    });
}

// Visitor tracking (simple counter)
(function() {
    let visits = parseInt(localStorage.getItem('visits') || '0', 10);
    visits += 1;
    localStorage.setItem('visits', visits);
    console.log(`This is visit number ${visits} to the AgriConat ZZ Plant site.`);
})();

// Optional: Soft bot detection (log only, no block)
const botUserAgents = ['bot', 'crawler', 'slurp', 'spider'];
if (botUserAgents.some(bot => navigator.userAgent.toLowerCase().includes(bot))) {
    console.log('Bot-like user agent detected.');
}
