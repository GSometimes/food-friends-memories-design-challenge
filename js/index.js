// Select DOM Elements
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav-overlay');
const mobileMenuLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelector('.mobile-nav');

// Function to make links fade in
function fadeIn() {
  // Fade in the links in order
  mobileMenuLinks.forEach((link, index) => {
    // 250ms delay before fading in the first link
    // 100ms delay between each link
    // index is the index of the current link in the mobileMenuLinks array
    setTimeout(() => {
      link.style.opacity = '1';
    }, 250 + index * 100);
  });
}

// Function to make links fade out
function fadeOut(callback) {
  // Fade out the links in reverse order
  // Spread syntax (...) is used to convert the NodeList to an array
  // Reverse the array so that the links fade out in the same order they fade in
  [...mobileMenuLinks].reverse().forEach((link, index) => {
    // 100ms delay between each link
    setTimeout(() => {
      link.style.opacity = '0';
    }, index * 100);
  });
  // 250ms delay before callback is called
  setTimeout(callback, mobileMenuLinks.length * 100 + 250); // callback after all links have faded out
}

// Toggle Menu On When Clicked
hamburger.addEventListener('click', () => {
  // If the menu is already active, fade out the links and remove the active class
  // Otherwise, add the active class and fade in the links
  if (mobileMenu.classList.contains('active')) {
    fadeOut(() => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  } else {
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    fadeIn();
  }
});

// Toggle Menu Off When Clicked
mobileMenuLinks.forEach((link) => {
  // When a link is clicked, fade out the links and remove the active class
  link.addEventListener('click', () => {
    fadeOut(() => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
});

// Dynamic Year in footer
const copyrightElement = document.querySelector('.copyrightText');
const year = new Date().getFullYear();
copyrightElement.textContent = `© ${year} Designs by Sometimes`;
