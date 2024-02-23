document.addEventListener('DOMContentLoaded', function() {
    const introText = document.querySelector('.intro-text');
    const letters = introText.querySelectorAll('span');

    letters.forEach((letter, index) => {
        letter.style.setProperty('--index', index);

        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';

            if (index === letters.length - 1) {
                // Add a delay before navigating to the next page (adjust as needed)
                setTimeout(() => {
                    // Call a function to navigate to the next page
                    navigateToNextPage();
                }, 3800); // Adjust the delay as needed
            }
        }, 100 * index);
    });

    // Function to navigate to the next page
    function navigateToNextPage() {
        window.location.href = 'main.html'; // Change 'main.html' to your desired next page
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('introText');
    const skipButton = document.getElementById('skipButton');

    // Function to skip animation and proceed to the next page
    function skipAnimation() {
        introText.style.animation = 'none';
        navigateToNextPage();
    }

    // Event listener for space bar keypress
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            skipAnimation();
        }
    });

    // Event listener for skip button click
    skipButton.addEventListener('click', skipAnimation);

    // Function to navigate to the next page
    function navigateToNextPage() {
        window.location.href = 'main.html'; // Change 'main.html' to your desired next page
    }
});

