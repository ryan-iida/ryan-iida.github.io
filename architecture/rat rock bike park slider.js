document.addEventListener("DOMContentLoaded", function () {
  // Array of image objects with src and description
  const images = [
    {
      src: "rat rock bike park/1.png",
      description: "Adaptable Area Perspective Drawing",
    },
    {
      src: "rat rock bike park/2.png",
      description: "Bike Workshop Perspective Drawing",
    },
    {
      src: "rat rock bike park/3.png",
      description: "Entrance Area Perspective Drawing",
    },
    { src: "rat rock bike park/4.png", description: "Site Plan" },
    {
      src: "rat rock bike park/5.png",
      description: "Watering and Cooling System Diagram",
    },
    { src: "rat rock bike park/6.png", description: "Thermal Diagram" },
    { src: "rat rock bike park/7.png", description: "Structural Diagram" },
    { src: "rat rock bike park/8.png", description: "Site Props Diagram" },
    { src: "rat rock bike park/9.png", description: "Rock Concept Model" },
    { src: "rat rock bike park/10.png", description: "Rock Concept Model" },
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
