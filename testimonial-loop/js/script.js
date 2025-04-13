const container = document.querySelector(".testimonial-container");
const cardWidth = container.children[0].offsetWidth + 16; // card + margin
const visibleCards = 3;

setInterval(() => {
  container.style.transition = "transform 0.5s ease-in-out";
  container.style.transform = `translateX(-${cardWidth}px)`;

  // After the transition ends
  container.addEventListener(
    "transitionend",
    () => {
      container.appendChild(container.firstElementChild); // move first to end
      container.style.transition = "none";
      container.style.transform = "translateX(0)"; // reset without jump
    },
    { once: true }
  );
}, 3000);
