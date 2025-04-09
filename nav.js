// nav.js - Shared navigation logic for all pages
document.addEventListener("DOMContentLoaded", function () {
  // Function to get correct path to nav.html from current location
  function getNavPath() {
    const currentDepth =
      window.location.pathname.split("/").filter(Boolean).length - 1;
    return "../".repeat(currentDepth) + "nav.html";
  }

  // Load navigation placeholder with correct path
  $("#nav-placeholder").load(getNavPath(), function (response, status, xhr) {
    if (status == "error") {
      console.error("Error loading navigation:", xhr.status, xhr.statusText);
      return;
    }

    const links = document.querySelectorAll(".nav1 a");
    const subLinks = document.querySelectorAll(".nav2 a");
    const nav2s = document.querySelectorAll(".nav2");
    const currentPath = window.location.pathname;

    // Function to normalize paths for comparison
    const normalizePath = (path) => {
      if (!path) return "";
      // Remove leading ../ or ./
      return path.replace(/^(\.\.\/|\.\/)+/, "");
    };

    // Function to ensure clean path for comparison
    const cleanPath = (path) => {
      if (!path) return "";
      return path.replace(/\/$/, ""); // Remove trailing slash
    };

    // Clear all menus if on index.html
    if (
      currentPath.endsWith("/index.html") ||
      currentPath === "/" ||
      currentPath.endsWith("/")
    ) {
      sessionStorage.removeItem("activeNav");
      sessionStorage.removeItem("activeSubNav");
      nav2s.forEach((nav) => (nav.style.display = "none"));
    }

    // Initialize active main link/section
    links.forEach((link) => {
      const targetId = link.getAttribute("data-target");
      let linkHref = link.getAttribute("href");

      // Set active state on page load for main nav
      if (
        linkHref &&
        cleanPath(currentPath).endsWith(cleanPath(normalizePath(linkHref)))
      ) {
        link.classList.add("active");
        if (targetId) {
          document.getElementById(targetId).style.display = "block";
          sessionStorage.setItem("activeNav", targetId);
        }
      } else if (targetId && sessionStorage.getItem("activeNav") === targetId) {
        link.classList.add("active");
        document.getElementById(targetId).style.display = "block";
      } else if (targetId) {
        document.getElementById(targetId).style.display = "none";
      }

      // Click handler for main nav
      link.addEventListener("click", function (e) {
        if (targetId) {
          e.preventDefault();

          // Update UI
          links.forEach((l) => l.classList.remove("active"));
          nav2s.forEach((nav) => (nav.style.display = "none"));
          this.classList.add("active");
          document.getElementById(targetId).style.display = "block";

          // Store state
          if (linkHref && !linkHref.includes("index.html")) {
            sessionStorage.setItem("activeNav", targetId);
            sessionStorage.removeItem("activeSubNav");
          }

          // Navigate if href exists
          if (linkHref) {
            // Handle relative paths correctly
            let navigateTo = linkHref;
            if (!navigateTo.startsWith("http") && !navigateTo.startsWith("/")) {
              const currentDepth =
                window.location.pathname.split("/").filter(Boolean).length - 1;
              navigateTo = "../".repeat(currentDepth) + navigateTo;
            }
            window.location.href = navigateTo;
          }
        }
      });
    });

    // Initialize active submenu items
    subLinks.forEach((subLink) => {
      let subLinkHref = subLink.getAttribute("href");
      if (!subLinkHref || subLink.classList.contains("blank")) return;

      // Set active state for submenu items
      if (
        subLinkHref &&
        cleanPath(currentPath).endsWith(cleanPath(normalizePath(subLinkHref)))
      ) {
        subLink.classList.add("active");
        const parentNavId = subLink.closest(".nav2").id;
        sessionStorage.setItem("activeNav", parentNavId);
        sessionStorage.setItem("activeSubNav", normalizePath(subLinkHref));
        document.getElementById(parentNavId).style.display = "block";

        // Also activate the parent nav link
        links.forEach((link) => {
          if (link.getAttribute("data-target") === parentNavId) {
            link.classList.add("active");
          }
        });
      } else if (
        subLinkHref &&
        sessionStorage.getItem("activeSubNav") === normalizePath(subLinkHref)
      ) {
        subLink.classList.add("active");
      }

      // Click handler for submenu items
      subLink.addEventListener("click", function (e) {
        if (subLinkHref && !subLink.classList.contains("blank")) {
          e.preventDefault();

          // Update UI for submenu items
          subLinks.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");

          const parentNavId = this.closest(".nav2").id;
          sessionStorage.setItem("activeNav", parentNavId);
          sessionStorage.setItem("activeSubNav", normalizePath(subLinkHref));

          // Activate the parent nav link
          links.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("data-target") === parentNavId) {
              link.classList.add("active");
            }
          });

          // Handle navigation for submenu items
          let navigateTo = subLinkHref;
          if (!navigateTo.startsWith("http") && !navigateTo.startsWith("/")) {
            // Get the correct number of parent directories to go up
            const currentPathParts = window.location.pathname
              .split("/")
              .filter(Boolean);
            const targetPathParts = normalizePath(subLinkHref)
              .split("/")
              .filter(Boolean);

            // Remove the filename from current path parts
            if (
              currentPathParts.length > 0 &&
              currentPathParts[currentPathParts.length - 1].includes(".")
            ) {
              currentPathParts.pop();
            }

            // Find common path segments
            let commonDepth = 0;
            while (
              commonDepth < currentPathParts.length &&
              commonDepth < targetPathParts.length &&
              currentPathParts[commonDepth] === targetPathParts[commonDepth]
            ) {
              commonDepth++;
            }

            // Calculate the correct number of ../ needed
            const upLevels = currentPathParts.length - commonDepth;
            navigateTo =
              "../".repeat(upLevels) +
              targetPathParts.slice(commonDepth).join("/");
          }

          window.location.href = navigateTo;
        }
      });
    });
  });
});
