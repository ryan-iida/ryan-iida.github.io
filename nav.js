document.addEventListener("DOMContentLoaded", function () {
  // Function to get correct path to nav.html from current location
  function getNavPath() {
    const currentDepth =
      window.location.pathname.split("/").filter(Boolean).length - 1;
    return currentDepth > 0
      ? "../".repeat(currentDepth) + "nav.html"
      : "nav.html";
  }

  // Load navigation
  $("#nav-placeholder").load(getNavPath(), function (response, status, xhr) {
    if (status == "error") {
      console.error("Error loading navigation:", xhr.status, xhr.statusText);
      return;
    }

    const links = document.querySelectorAll(".nav-main a");
    const currentPath = window.location.pathname;

    // Function to normalize paths for comparison
    const normalizePath = (path) => {
      if (!path) return "";
      // Remove .html and trailing slashes
      return path
        .replace(/\.html$/, "")
        .replace(/\/$/, "")
        .toLowerCase();
    };

    // Set active state on page load
    links.forEach((link) => {
      const linkHref = link.getAttribute("href");
      if (linkHref && normalizePath(currentPath) === normalizePath(linkHref)) {
        link.classList.add("active");
      }
    });
  });
});
