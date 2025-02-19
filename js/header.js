// collapse button on responsive menu
const toggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');

toggler.addEventListener('click', () => {
    collapse.classList.toggle('show');
});


// up button javascript code to work

const scrollToTopButton = document.getElementById("scrollToTop");