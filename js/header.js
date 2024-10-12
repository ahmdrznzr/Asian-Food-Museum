document.addEventListener('DOMContentLoaded', function () {
  // Select the menu toggle button and the navigation menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle the navigation menu visibility when the menu toggle button is clicked
  menuToggle.addEventListener('click', function (event) {
    navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
  });

  // Close the navigation menu when clicking outside of it
  document.addEventListener('click', function (event) {
    // Check if the menu is active and the click is outside the menu and the toggle button
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(event.target) && 
        !menuToggle.contains(event.target)) {
      navMenu.classList.remove('active'); // Remove the 'active' class to hide the menu
    }
  });

  // Automatically close the menu when scrolling the page
  window.addEventListener('scroll', function () {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active'); // Remove the 'active' class when scrolling to hide the menu
    }
  });
});
