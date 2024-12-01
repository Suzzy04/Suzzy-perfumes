const slider = document.querySelector("#perfume-slider .slider");
const slides = slider.querySelectorAll(".slide");
const prevButton = document.querySelector("#perfume-slider .prev");
const nextButton = document.querySelector("#perfume-slider .next");

let currentSlide = 0;

// Add event listeners for navigation buttons
nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide
  updateSlider();
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Go to the previous slide
  updateSlider();
});

// Update slider position
function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`; // Adjust position based on currentSlide
  });
}
