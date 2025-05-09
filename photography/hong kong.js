document.addEventListener("DOMContentLoaded", function () {
  // Array of image objects with src and description
  const images = [
    { src: "hong kong/hong kong-01.jpg", description: "" },
    { src: "hong kong/hong kong-02.jpg", description: "" },
    { src: "hong kong/hong kong-03.jpg", description: "" },
    { src: "hong kong/hong kong-04.jpg", description: "" },
    { src: "hong kong/hong kong-05.jpg", description: "" },
    { src: "hong kong/hong kong-06.jpg", description: "" },
    { src: "hong kong/hong kong-07.jpg", description: "" },
    { src: "hong kong/hong kong-08.jpg", description: "" },
    { src: "hong kong/hong kong-09.jpg", description: "" },
    { src: "hong kong/hong kong-10.jpg", description: "" },
    { src: "hong kong/hong kong-11.jpg", description: "" },
    { src: "hong kong/hong kong-12.jpg", description: "" },
    { src: "hong kong/hong kong-13.jpg", description: "" },
    { src: "hong kong/hong kong-14.jpg", description: "" },
    { src: "hong kong/hong kong-15.jpg", description: "" },
    { src: "hong kong/hong kong-16.jpg", description: "" },
    { src: "hong kong/hong kong-17.jpg", description: "" },
    { src: "hong kong/hong kong-18.jpg", description: "" },
    { src: "hong kong/hong kong-19.jpg", description: "" },
    { src: "hong kong/hong kong-20.jpg", description: "" },
    { src: "hong kong/hong kong-21.jpg", description: "" },
    { src: "hong kong/hong kong-22.jpg", description: "" },
    { src: "hong kong/hong kong-23.jpg", description: "" },
    { src: "hong kong/hong kong-24.jpg", description: "" },
    { src: "hong kong/hong kong-25.jpg", description: "" },
    { src: "hong kong/hong kong-26.jpg", description: "" },
    { src: "hong kong/hong kong-27.jpg", description: "" },
    { src: "hong kong/hong kong-28.jpg", description: "" },
    { src: "hong kong/hong kong-29.jpg", description: "" },
    { src: "hong kong/hong kong-30.jpg", description: "" },
    { src: "hong kong/hong kong-31.jpg", description: "" },
    { src: "hong kong/hong kong-32.jpg", description: "" },
    { src: "hong kong/hong kong-33.jpg", description: "" },
    { src: "hong kong/hong kong-34.jpg", description: "" },
    { src: "hong kong/hong kong-35.jpg", description: "" },
    { src: "hong kong/hong kong-36.jpg", description: "" },
    { src: "hong kong/hong kong-37.jpg", description: "" },
    { src: "hong kong/hong kong-38.jpg", description: "" },
    { src: "hong kong/hong kong-39.jpg", description: "" },
    { src: "hong kong/hong kong-40.jpg", description: "" },
    { src: "hong kong/hong kong-41.jpg", description: "" },
    { src: "hong kong/hong kong-42.jpg", description: "" },
    { src: "hong kong/hong kong-43.jpg", description: "" },
    { src: "hong kong/hong kong-44.jpg", description: "" },
    { src: "hong kong/hong kong-45.jpg", description: "" },
    { src: "hong kong/hong kong-46.jpg", description: "" },
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
