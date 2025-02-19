// Show button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        scrollToTopButton.classList.add("show-scroll-button");
    } else {
        scrollToTopButton.classList.remove("show-scroll-button");
    }
});

// Scroll to top on button click
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});