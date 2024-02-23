// Function to change the background color of the header when clicked
function changeHeaderColor() {
    var header = document.querySelector('header');
    header.style.backgroundColor = 'lightblue';
}

// Function to add a border to the main content sections
function addBorderToSections() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.border = '2px solid darkblue';
    });
}

// Function to toggle the visibility of the footer
function toggleFooterVisibility() {
    var footer = document.querySelector('footer');
    footer.style.display = (footer.style.display === 'none') ? 'block' : 'none';
}

function toggleSectionVisibility(sectionId) {
    var sections = document.querySelectorAll('section'); // Get all sections
    sections.forEach(function (section) {
        if (section.id === sectionId) { // Show the clicked section
            section.style.display = 'block';
        } else { // Hide other sections
            section.style.display = 'none';
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Hide all sections except the Home section when the page loads
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        if (section.id !== 'home-section') {
            section.style.display = 'none';
        }
    });
});

// Clear the fragment identifier when the page is reloaded
window.onload = function () {
    history.replaceState({}, document.title, window.location.pathname);
};

// Function to adjust the margin-left of the main element
function adjustMainMargin() {
    var main = document.querySelector('main');
    main.classList.toggle('main-hovered'); // Toggle the 'main-hovered' class
}

// Event listener for hover on the nav bar
var nav = document.querySelector('nav');
nav.addEventListener('mouseenter', function () {
    // Adjust the margin-left of the main element when the nav bar is hovered over
    adjustMainMargin();
});

nav.addEventListener('mouseleave', function () {
    // Reset the margin-left of the main element when the mouse leaves the nav bar
    adjustMainMargin();
});



