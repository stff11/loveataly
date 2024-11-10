// script.js
let currentIndex = 0;
const images = [
    "images/sandwich.webp",
    "images/pasta.webp",
    "images/chicken.webp",
    "images/pies.webp",

    "images/arancini.jpeg",
    "images/buffet.jpeg",
    "images/caprese2.jpeg", 
    "images/chicken.jpeg",
    
    "images/focacce.jpeg",
    "images/sandwiches.jpeg",
    "images/sandwiches2.jpeg",
    "images/parmo.jpeg",
    
    "images/sausage-rolls.jpeg",
    "images/pies.jpeg",
    "images/parmo-bun.jpeg",
    "images/merchandise.jpeg",
    
    "images/pasta.jpeg",
    "images/pasta2.jpeg",
    "images/mix.jpeg",
    "images/mortadella.jpeg",
    
    "images/sweets.jpeg",
    "images/cakes.jpeg",
    "images/fruit&sweets.jpeg",
    "images/tiramisu.jpeg",
    
    "images/van.jpeg",
    "images/van2.jpeg",
    "images/van3.jpeg",
    "images/van4.jpeg"
];

function showFullImage(index) {
    currentIndex = index;
    document.getElementById("fullImageModal").style.display = "block";
    document.getElementById("fullImage").src = images[currentIndex];
}

function closeFullImage() {
    document.getElementById("fullImageModal").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Wrap to last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Wrap to first image
    }
    document.getElementById("fullImage").src = images[currentIndex];
}

// For hidden sections (Menu and Gallery)
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle("active");
  
    // Scroll the section into view with a smooth effect
    if (section.classList.contains("active")) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 300);  // Delay for smooth transition
    }
  }

// Select the blocks
const leftBlock = document.querySelector('.left-block');
const rightBlock = document.querySelector('.right-block');

// Function to change background image on touch
function addBackgroundImage(element, imageUrl) {
  element.style.backgroundImage = `url('${imageUrl}')`;
}

// Function to remove background image
function removeBackgroundImage(element) {
  element.style.backgroundImage = 'none';
}

// Add touchstart and touchend events
leftBlock.addEventListener('touchstart', () => addBackgroundImage(leftBlock, '../images/van2.jpeg'));
leftBlock.addEventListener('touchend', () => removeBackgroundImage(leftBlock));

rightBlock.addEventListener('touchstart', () => addBackgroundImage(rightBlock, '../images/van4.jpeg'));
rightBlock.addEventListener('touchend', () => removeBackgroundImage(rightBlock));