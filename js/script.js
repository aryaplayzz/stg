document.addEventListener('DOMContentLoaded', function() {
    const skipButton = document.getElementById('skipButton');
    let hasNavigated = sessionStorage.getItem('hasNavigated');

    function navigateToNextPage() {
        if (!hasNavigated) {  
            sessionStorage.setItem('hasNavigated', 'true'); // Prevent future reloads
            window.location.href = 'main.html';
        }
    }

    // Automatically navigate after 3 seconds
    setTimeout(navigateToNextPage, 3000);

    // Skip button event listener
    if (skipButton) {
        skipButton.addEventListener('click', navigateToNextPage);
    }

    // Spacebar key to skip
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            navigateToNextPage();
        }
    });
});


// Functions for overlay navigation menu
function openNav() {
    document.getElementById("overlayNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("overlayNav").style.width = "0%";
}
