// safeguard.js


// Simple email regex for validation
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Basic input sanitization (strip tags)
export function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Get CSRF token from cookies (assuming it's set by backend)
export function getCsrfToken() {
    const cookieName = 'csrftoken';
    const matches = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
    return matches ? matches[2] : null;
}

// Add CSRF token to fetch/post headers for safe API calls
export function getSecureHeaders() {
    const headers = {
        'Content-Type': 'application/json',
    };
    const csrfToken = getCsrfToken();
    if (csrfToken) {
        headers['X-CSRFToken'] = csrfToken;
    }
    return headers;
}

// Example: rate limiting debounce helper
export function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
