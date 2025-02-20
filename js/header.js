// collapse button on responsive menu
const toggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');

toggler.addEventListener('click', () => {
    collapse.classList.toggle('show');
});

//-----------------------------------------------------------------------

//change the color of active buttons on menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    //detecting the currently viewed section and updating the active link.
    function changeActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });
        //sets up click event listeners for each navigation link would be helpful.
        navLinks.forEach(link => {
            link.classList.remove("active-btn");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active-btn");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(item => item.classList.remove("active-btn"));
            this.classList.add("active-btn");
        });
    });

    //ensures the active link updates as the user scrolls through the sections.
    window.addEventListener("scroll", changeActiveLink);
    changeActiveLink();
});