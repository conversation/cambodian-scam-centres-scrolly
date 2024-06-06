gsap.registerPlugin(ScrollTrigger);

function createScrollFades() {
  gsap.utils.toArray(".pinned_section").forEach((pinnedSection) => {
    const bgArr = pinnedSection.querySelector(".pinned_media").children;

    const parTriggersArr = pinnedSection.querySelectorAll(".step");

    parTriggersArr.forEach((par, index) => {
      ScrollTrigger.create({
        fastScrollEnd: true,
        trigger: par,
        start: `top ${par.classList.contains("delay") ? "70" : "90"}%`,
        onEnter: () => {
          bgArr[par.dataset.imageIndex || index + 1].classList.add(
            "make_visible"
          );
        },
        onLeaveBack: () => {
          bgArr[par.dataset.imageIndex || index + 1].classList.remove(
            "make_visible"
          );
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Lazy load videos
  new LazyLoad({
    threshold: 800
  });

  const images = document.querySelectorAll(".title_media img");
  const dataText = document.querySelector(".date");
  let currentIndex = 0; // Start with the first image

  function cycleImages() {
    const nextIndex = (currentIndex + 1) % images.length; // Calculate the next image index
    dataText.innerHTML = images[currentIndex].dataset.date;
    images[currentIndex].style.opacity = 0; // Remove active from current image
    images[nextIndex].style.opacity = 1; // Add active to next image
    currentIndex = nextIndex; // Update current index to the next one
  }

  setInterval(cycleImages, 1500); // Change image every 2 seconds

  createScrollFades();

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  });
});
