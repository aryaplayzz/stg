document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('introText'); 
    const skipButton = document.getElementById('skipButton');

    // Check if introText exists before running the animation
    if (!introText) {
        console.log("Skipping animation: '#introText' not found on this page. aryaplayzz was here");
        return; // Stop execution to avoid errors
    }

    const letters = introText.querySelectorAll('span');

    letters.forEach((letter, index) => {
        letter.style.setProperty('--index', index);

        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';

            if (index === letters.length - 1) {
                setTimeout(navigateToNextPage, 3800);
            }
        }, 100 * index);
    });

    function skipAnimation() {
        letters.forEach(letter => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
        });
        navigateToNextPage();
    }

    if (skipButton) {
        skipButton.addEventListener('click', skipAnimation);
    }

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            skipAnimation();
        }
    });

    function navigateToNextPage() {
        window.location.href = 'main.html';
    }
});

// Functions for overlay navigation menu
function openNav() {
    document.getElementById("overlayNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("overlayNav").style.width = "0%";
}
