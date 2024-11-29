document.addEventListener("DOMContentLoaded", () => {
    // Dynamically load the navbar and highlight the active page after it's loaded
    loadNavbar().then(highlightCurrentPage).catch(error => console.error(error));
});

function loadNavbar() {
    return fetch("navbar.html") // Ensure the path to navbar.html is correct
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load navbar");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
            throw error; // Propagate the error for debugging
        });
}

function highlightCurrentPage() {
    const links = document.querySelectorAll(".navigation-bar a");
    const currentPath = window.location.pathname.split("/").pop(); // Get current file name

    links.forEach(link => {
        const linkPath = link.getAttribute("href").split("/").pop(); // Get href file name

        if (currentPath === linkPath) {
            link.classList.add("active"); // Add active class
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".project-carousel");

    carousels.forEach(carousel => {
        const slides = carousel.querySelector(".carousel-slides");
        const prevButton = carousel.querySelector(".carousel-button.prev");
        const nextButton = carousel.querySelector(".carousel-button.next");

        let currentIndex = 0;

        // Navigate to the previous slide
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
            updateCarousel();
        });

        // Navigate to the next slide
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.children.length;
            updateCarousel();
        });

        // Update carousel transform
        function updateCarousel() {
            const offset = -currentIndex * 100; // Shift by percentage width
            slides.style.transform = `translateX(${offset}%)`;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-slides");
    const slides = document.querySelectorAll(".carousel-slides img");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");

    let currentIndex = 1; // Start at the first real slide (after prepending the last slide)
    const slideWidth = slides[0].clientWidth;

    // Clone first and last slides for infinite looping
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    // Add clones to the carousel
    carousel.appendChild(firstClone); // Add first clone to the end
    carousel.insertBefore(lastClone, slides[0]); // Add last clone to the beginning

    // Set initial position to show the first real slide
    carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

    // Navigate to the previous slide
    prevButton.addEventListener("click", () => {
        currentIndex--;
        updateCarousel();
    });

    // Navigate to the next slide
    nextButton.addEventListener("click", () => {
        currentIndex++;
        updateCarousel();
    });

    // Update carousel position
    function updateCarousel() {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

        // Handle looping
        carousel.addEventListener("transitionend", () => {
            if (currentIndex === 0) {
                carousel.style.transition = "none"; // Disable transition for instant jump
                currentIndex = slides.length; // Jump to the last real slide
                carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
            }
            if (currentIndex === slides.length + 1) {
                carousel.style.transition = "none"; // Disable transition for instant jump
                currentIndex = 1; // Jump to the first real slide
                carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
            }
        });
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//     const carousels = document.querySelectorAll(".carousel");

//     carousels.forEach((carousel) => {
//         const slides = carousel.querySelector(".carousel-slides");
//         const images = slides.querySelectorAll("img");
//         const prevButton = carousel.querySelector(".carousel-button.prev");
//         const nextButton = carousel.querySelector(".carousel-button.next");

//         let currentIndex = 0;

//         // Dynamically set the total width of slides
//         slides.style.width = `${images.length * 100}%`;

//         // Ensure each image has the correct width
//         images.forEach((img) => {
//             img.style.width = `${carousel.clientWidth}px`; // Set image width to match carousel width
//         });

//         // Update the carousel position
//         function updateCarousel() {
//             const slideWidth = carousel.clientWidth; // Width of a single slide
//             slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`; // Move to the current slide
//         }

//         // Navigate to the previous slide
//         prevButton.addEventListener("click", () => {
//             currentIndex = (currentIndex - 1 + images.length) % images.length;
//             updateCarousel();
//         });

//         // Navigate to the next slide
//         nextButton.addEventListener("click", () => {
//             currentIndex = (currentIndex + 1) % images.length;
//             updateCarousel();
//         });

//         // Initialize carousel position on page load
//         updateCarousel();

//         // Adjust carousel on window resize to ensure proper dimensions
//         window.addEventListener("resize", () => {
//             images.forEach((img) => {
//                 img.style.width = `${carousel.clientWidth}px`; // Adjust image width on resize
//             });
//             updateCarousel();
//         });
//     });
// });

document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    
    let index = 0;
  
    function updateCarousel() {
      images.style.transform = `translateX(-${index * 100}%)`;
    }
  
    prevButton.addEventListener('click', () => {
      index = (index - 1 + images.children.length) % images.children.length;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      index = (index + 1) % images.children.length;
      updateCarousel();
    });
  });