// security.js

// Function to calculate SHA-256 hash of a message
async function sha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedMessage = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashedMessage;
}

// Function to validate captcha input
function validateCaptcha(captchaInput, correctCaptchaValue) {
    return captchaInput === correctCaptchaValue;
}

// You can add more security-related functions as needed.
