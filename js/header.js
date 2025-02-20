// collapse button on responsive menu
const toggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');

toggler.addEventListener('click', () => {
    collapse.classList.toggle('show');
});

//change the color of active buttons on menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove 'active-btn' class from all nav links
            navLinks.forEach(item => item.classList.remove("active-btn"));

            // Add 'active-btn' class to the clicked nav link
            this.classList.add("active-btn");
        });
    });
});