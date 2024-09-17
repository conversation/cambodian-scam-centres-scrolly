gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
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
      .fromTo(
        figureWrapper,
        { scale: 1.5 },
        { scale: 1, ease: "power1.inOut" },
      );

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
    const messageBubblesInitial = document
      .querySelector(".message_bubbles_initial")
      .querySelectorAll(".message_bubble");

    const messageBubblesDigCurrency = document
      .querySelector(".message_bubbles_digital_currency")
      .querySelectorAll(".message_bubble");

    const messageBubblesFinal = document
      .querySelector(".message_bubbles_final")
      .querySelectorAll(".message_bubble");

    const messagesBubbles = [
      messageBubblesInitial,
      messageBubblesDigCurrency,
      messageBubblesFinal,
    ];

    messagesBubbles.forEach((el) => {
      el.forEach((message) => {
        ScrollTrigger.create({
          // markers: true,
          trigger: message,
          start: "top 70%",
          end: "bottom bottom",
          onEnter: () => {
            message.classList.add("make_visible");
          },
          onLeaveBack: () => {
            message.classList.remove("make_visible");
          },
        });
      });
    });
  }

  createFrankAnimaiton();

  createMapboxMap(map1Config, map1Locations);

  createKKParkAnim();

  createPigButchering();

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  });

  ScrollTrigger.refresh();

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
});
