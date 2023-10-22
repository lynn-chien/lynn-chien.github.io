document.addEventListener('DOMContentLoaded', function () {
    let backgroundImage = document.getElementById('backgroundImage');

    window.addEventListener('scroll', function () {
        let scrollPos = window.scrollY;
        let opacity = 1 - scrollPos / 500; /* Adjust 500 to control when the image fades */

        backgroundImage.style.opacity = opacity.toFixed(2); /* Limit decimal places for opacity */
    });
});

