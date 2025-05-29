document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const navTop = nav.offsetTop;
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  function handleScroll() {
    if (window.scrollY >= navTop) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Hamburger menu toggle
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent this click from immediately closing the menu
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

  // Close menu when clicking on a link
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      navMenu.classList.remove("show");
      hamburger.classList.remove("active");
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });
});

// Lightbox functionality
document.querySelectorAll('.lightbox').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const imgSrc = this.getAttribute('href');
    const lightboxModal = document.createElement('div');
    lightboxModal.className = 'lightbox-modal';
    lightboxModal.innerHTML = `
      <span class="close">&times;</span>
      <img src="${imgSrc}">
    `;
    document.body.appendChild(lightboxModal);
    lightboxModal.style.display = 'block';

    // Close the modal when clicking on the close button
    lightboxModal.querySelector('.close').onclick = function() {
      lightboxModal.remove();
    };

    // Close the modal when clicking anywhere outside the image
    lightboxModal.onclick = function(e) {
      if (e.target == this) {
        lightboxModal.remove();
      }
    };
  });
});