document.addEventListener("DOMContentLoaded", () => {
    loadNavbar().then(() => {
        highlightCurrentPage();

        // Add smooth page transitions
        const links = document.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                if (link.href.startsWith(window.location.origin)) {
                    e.preventDefault(); // Prevent immediate navigation
                    document.body.classList.add("fade-out"); // Add fade-out effect
                    setTimeout(() => {
                        window.location.href = link.href; // Navigate after fade-out
                    }, 500); // Match the transition duration
                }
            });
        });
    }).catch(console.error);
});

