document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('introText');
    const letters = introText.querySelectorAll('span');

    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';

            // Check if it's the last letter
            if (index === letters.length - 1) {
                // Add a delay before navigating to main.html (adjust as needed)
                setTimeout(() => {
                    window.location.href = 'main.html';
                }, 5000);
            }
        }, 100 * index);
    });
});
