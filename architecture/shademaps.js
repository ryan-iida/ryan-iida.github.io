document.addEventListener("DOMContentLoaded", function () {
  // Array of image objects with src and description
  const images = [
    { src: "shademaps/shademaps.jpg", description: "Layered Map Detail" },
    { src: "shademaps/shademaps2.jpg", description: "Layered Map Comparison" },
    { src: "shademaps/shademaps3.jpg", description: "Layered Map Comparison" },
    { src: "shademaps/shademaps4.jpg", description: "Model Layers" },
  ];

  let currentIndex = 0;
  const mainImage = document.getElementById("main-project-image");
  const imageDesc = document.querySelector(".image-description");
  const prevButton = document.querySelector(".slider-nav.prev");
  const nextButton = document.querySelector(".slider-nav.next");

  // Initialize the slider
  function updateSlider() {
    mainImage.src = images[currentIndex].src;
    mainImage.alt = "Project image " + (currentIndex + 1);
    imageDesc.textContent = images[currentIndex].description;
  }

  // Previous button click handler
  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  // Next button click handler
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  // Initialize the slider on page load
  updateSlider();
});
