import { gsap } from 'https://cdn.skypack.dev/gsap';

document.querySelectorAll('.service-box').forEach(box => {
    // Mouse enter animation
    box.addEventListener('mouseenter', () => {
        gsap.to(box, { y: -10, scale: 1.1, duration: 0.3 });
    });

    // Mouse leave animation
    box.addEventListener('mouseleave', () => {
        gsap.to(box, { y: 0, scale: 1, duration: 0.3 });
    });

    // Click event to navigate to a specific page
    box.addEventListener('click', () => {
        const service = box.getAttribute('data-service');
        switch (service) {
            case 'arya':
                window.location.href = 'arya.html'; // Redirect to arya page
                break;
            case 'gavin':
                window.location.href = 'gavin.html'; // Redirect to gavin page
                break;
            case 'dev':
                window.location.href = 'dev.html'; // Redirect to dev page
                break;
            case 'aidan':
                window.location.href = 'aidan.html'; // Redirect to aidan page
            default:
                console.error('Service not found');
        }
    });
});
