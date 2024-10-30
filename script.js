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
