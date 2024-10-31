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

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('active'); // Toggle the active class
}