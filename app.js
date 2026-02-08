// Security Features Implementation

// Bot detection
const botUserAgents = ['bot', 'crawler', 'slurp', 'spider'];
function isBot(userAgent) {
    return botUserAgents.some(bot => userAgent.toLowerCase().includes(bot));
}

// Rate limiting on form submissions
let submitCount = 0;
const submitLimit = 5; // Max 5 submissions
const timeFrame = 60000; // 1 minute
let lastSubmitTime = 0;

function canSubmit() {
    const currentTime = new Date().getTime();
    if (currentTime - lastSubmitTime < timeFrame) {
        return submitCount < submitLimit;
    }
    submitCount = 0; // reset count if time frame passed
    lastSubmitTime = currentTime;
    return true;
}

// Smooth scroll animations
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

// Right-click protection
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Visitor tracking
(function() {
    const visits = localStorage.getItem('visits') || 0;
    localStorage.setItem('visits', Number(visits) + 1);
})(); 

// Safety measures against automated access
if (isBot(navigator.userAgent)) {
    alert('Access not permitted for bots.');
    window.location.href = 'about:blank'; 
} // Redirecting bots