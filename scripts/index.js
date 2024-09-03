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
            "make_visible",
          );
        },
        onLeaveBack: () => {
          bgArr[par.dataset.imageIndex || index + 1].classList.remove(
            "make_visible",
          );
        },
      });
    });
  });
}

function createFrankAnimaiton() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".frank_text",
        start: "top-=30% bottom",
        end: "top-=30% top",
        scrub: 1,
      },
    })
    .fromTo(".frank_img", { xPercent: -10 }, { xPercent: 0, ease: "linear" });

  const pinnedSection = document.querySelector(".frank_section");

  const bgArr = pinnedSection.querySelectorAll(
    ".frank_section .pinned_background img",
  );

  const parTriggersArr = pinnedSection.querySelectorAll(".step");

  parTriggersArr.forEach((par, index) => {
    ScrollTrigger.create({
      fastScrollEnd: true,
      trigger: par,
      start: `top 90%`,
      onEnter: () => {
        bgArr[par.dataset.imageIndex || index + 1].classList.add(
          "make_visible",
        );
      },
      onLeaveBack: () => {
        bgArr[par.dataset.imageIndex || index + 1].classList.remove(
          "make_visible",
        );
      },
    });
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: pinnedSection.nextElementSibling,
        start: "top 80%",
        end: "top top",
        scrub: 1,
      },
    })
    .to(".frank_section", { alpha: 0 });
}

function createKKParkAnim() {
  const section = document.querySelector(".kk_park");
  const text = section.querySelector(".pinned_foreground");
  const figureWrapper = section.querySelector(".kk_park_sat_wrapper");
  const figures = figureWrapper.querySelectorAll("figure");

  const zoomTl = gsap
    .timeline({
      scrollTrigger: {
        trigger: text,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    })
    .fromTo(figureWrapper, { scale: 1.5 }, { scale: 1, ease: "power1.inOut" });

  gsap.utils.toArray(".kk_park .step").forEach((step, index) => {
    let figure = figures[index + 1];

    ScrollTrigger.create({
      trigger: step,
      start: `top 90%`,
      onEnter: () => {
        figure.classList.add("make_visible");
      },
      onLeaveBack: () => {
        figure.classList.remove("make_visible");
      },
    });
  });
}

function createPigButchering() {
  const pinnedSection = document.querySelector(".pig_butchering");
  const mobileWrapper = pinnedSection.querySelector(".mobile_phone_wrapper");
  const bgArr = mobileWrapper.children;
  const parTriggersArr = pinnedSection.querySelectorAll(".next");

  parTriggersArr.forEach((par, index) => {
    let textPadding = window.getComputedStyle(par).paddingTop;
    let start, stop;
    if (window.innerWidth < 599) {
      start = `top bottom`;
      end = `center ${
        window.innerHeight -
        (window.innerHeight - mobileWrapper.clientHeight) / 2
      }`;
    } else {
      start = `top ${
        (window.innerHeight - mobileWrapper.clientHeight) / 2 +
        mobileWrapper.clientHeight
      }`;
      end = `top center`;
    }

    gsap.fromTo(
      bgArr[par.dataset.imageIndex],
      { clipPath: `inset(100% 0% 0% 0%)` },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: par,
          start: start,
          end: end,
          scrub: 0.4,
        },
      },
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createFrankAnimaiton();

  createMapboxMap(map1Config, map1Locations);

  createKKParkAnim();

  createPigButchering();

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  });
});