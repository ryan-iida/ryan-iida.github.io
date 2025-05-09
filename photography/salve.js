document.addEventListener("DOMContentLoaded", function () {
  // Array of image objects with src and description
  const images = [
    { src: "salve/salve-1.jpg", description: "" },
    { src: "salve/salve-2.jpg", description: "" },
    { src: "salve/salve-3.jpg", description: "" },
    { src: "salve/salve-4.jpg", description: "" },
    { src: "salve/salve-5.jpg", description: "" },
    { src: "salve/salve-6.jpg", description: "" },
    { src: "salve/salve-7.jpg", description: "" },
    { src: "salve/salve-8.jpg", description: "" },
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
