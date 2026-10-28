const finalTitle = "Cybersecurity Master's Student";
let charIndex = 0;
const typingSpeed = 100;

function typeOnce() {
    const typedTextElement = document.getElementById("typed-text");

    if (charIndex < finalTitle.length) {
        typedTextElement.textContent += finalTitle.charAt(charIndex);
        charIndex++;
        setTimeout(typeOnce, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeOnce();
});