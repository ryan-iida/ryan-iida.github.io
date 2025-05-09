document.addEventListener("DOMContentLoaded", function () {
  // Array of image objects with src and description
  const images = [
    {
      src: "furrow house/1.png",
      description: "Perspective Photograph",
    },
    {
      src: "furrow house/2.png",
      description: "Study Model",
    },
    {
      src: "furrow house/3.jpg",
      description: "Study Models",
    },
    {
      src: "furrow house/4.jpg",
      description: "Perspective Photograph",
    },
    {
      src: "furrow house/5.jpg",
      description: "Perspective Photograph",
    },
    {
      src: "furrow house/6.jpg",
      description: "Perspective Photograph",
    },
    {
      src: "furrow house/7.jpg",
      description: "Perspective Photograph",
    },
    {
      src: "furrow house/8.jpg",
      description: "Perspective Photograph",
    },
    {
      src: "furrow house/9.jpg",
      description: "Perspective Photograph",
    },
    {
      src: "furrow house/10.png",
      description: "Perspective Photograph",
    },
    {
      src: "furrow house/11.png",
      description: "Model Photograph",
    },
    {
      src: "furrow house/12.png",
      description: "Sketch",
    },
    {
      src: "furrow house/13.png",
      description: "Sketch",
    },
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
