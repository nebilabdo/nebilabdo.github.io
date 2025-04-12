'use strict';
//adding hover effect
const navbar = document.querySelector('.navbar');
const food_menu = document.querySelector('.food-section');
const intro = document.querySelector('.intro');
const navbarHeight = navbar.getBoundingClientRect().height;
const handleHover = function (e) {
  if (e.target.classList.contains('link')) {
    const clicked = e.target;
    const logo = clicked.closest('.navbar').querySelector('.logo');
    const menu_links = clicked.closest('.navbar').querySelectorAll('.link');
    menu_links.forEach(el => {
      if (clicked !== el) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navbar.addEventListener('mouseover', handleHover.bind(0.3));
navbar.addEventListener('mouseout', handleHover.bind(1));

//page navigations
navbar.addEventListener('click', function (e) {
  const linked = e.target;
  if (linked.classList.contains('link')) {
    const linkname = linked.textContent.toLowerCase().trim();
    const section = document.getElementById(linkname);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
});
//// sticky navigation
///getting initial cord
// const initialCoords = navbar.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) {
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// });
const navSticky = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) navbar.classList.add('sticky');
  else {
    navbar.classList.remove('sticky');
  }
};
const navbarObserver = new IntersectionObserver(navSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navbarHeight}px`,
});
navbarObserver.observe(intro);

//revealing scroll
const allFoodsections = document.querySelectorAll('.section');
const revealingSection = function (entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.add('section--hidden');
    } else {
      entry.target.classList.remove('section--hidden');
    }
  });
};
const foodSectionObserver = new IntersectionObserver(revealingSection, {
  root: null,
  threshold: 0.2,
});
allFoodsections.forEach(function (foodSection) {
  foodSectionObserver.observe(foodSection);
  foodSection.classList.add('section--hidden');
});

document.addEventListener('DOMContentLoaded', function () {
  const foodItems = document.querySelectorAll('.food-item');

  foodItems.forEach((foodItem, index) => {
    // Set an incremental delay for each food item
    const delay = index * 0.2; // 0.2s delay for each subsequent item
    foodItem.style.transitionDelay = `${delay}s`;

    // Use IntersectionObserver to detect when each food item enters the viewport
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the 'loaded' class to trigger fade-in effect
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target); // Stop observing after it's loaded
          }
        });
      },
      {
        threshold: 0.5, // Load the item when 50% of it is in the viewport
      }
    );

    // Observe each food item
    observer.observe(foodItem);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const foodItems = document.querySelectorAll('.food-item img'); // Select all images inside food items

  // Create the IntersectionObserver to detect when the images come into the viewport
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'loaded' class when image comes into view
          entry.target.classList.add('loaded');

          // Apply transition delay dynamically based on the index each time it comes into view
          const index = Array.from(foodItems).indexOf(entry.target);
          entry.target.style.transitionDelay = `${0.5 + index * 0.1}s`;
        } else {
          // Remove the 'loaded' class when the image goes out of view
          entry.target.classList.remove('loaded');

          // Reset the transition delay when the image is out of view
          entry.target.style.transitionDelay = '0s';
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the image is visible
    }
  );

  // Start observing each image
  foodItems.forEach(foodItem => {
    observer.observe(foodItem);
  });
});
