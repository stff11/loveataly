// script.js
function showFullImage(src) {
    const modal = document.getElementById("fullImageModal");
    const fullImage = document.getElementById("fullImage");
    fullImage.src = src;
    modal.style.display = "flex";
}

function closeFullImage() {
    const modal = document.getElementById("fullImageModal");
    modal.style.display = "none";
}


//  Closes the menu on mobile when clicking a link 
document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Use event delegation on the navbar
    navbarCollapse.addEventListener('click', (event) => {
        if (event.target.matches('.nav-link')) {
            // Close the navbar if it's open
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});