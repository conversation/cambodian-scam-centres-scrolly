gsap.registerPlugin(ScrollTrigger, TextPlugin);

document.addEventListener("DOMContentLoaded", () => {
  function sensitiveImage() {
    const showBtn = document.querySelector("#sensitiveWarning");
    const image = document.querySelector("#sensitiveImg");

    showBtn.addEventListener("click", (e) => {
      e.preventDefault();
      image.classList.toggle("blurred");
      showBtn.classList.toggle("make_hidden");
      // showBtn.style.display = "none";
    });
  }

  function phrasebookScramble() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scramble_wrapper",
        start: "center center",
        end: "center center",
        onEnterBack: () => {
          if (tl.paused()) {
            tl.play();
          }
        },
      },
    });

    tl.to(".scramble_wrapper img", {
      duration: 0.4,
      opacity: 0.2,
    });
    tl.to(
      "#scramble1",
      {
        duration: 2,
        text: {
          value:
            "Do not use a simple emoji to open your conversation because it shows no sense of need from your side.",
          delimiter: " ",
        },
      },
      "0",
    );
    tl.to(
      "#scramble2",
      {
        duration: 2,
        text: {
          value:
            "If a girl shares many selfies with a peace gesture, you could open the conversation saying: ‘You look so cute when you are doing the peace sign in your photos.’ How can a girl say no to a guy who pays attention to details such as her poses?",
          delimiter: " ",
        },
      },
      "<20%",
    );
    tl.to(
      "#scramble3",
      {
        duration: 2,
        text: {
          value: `
          Man: I found that there is something in your eyes (to raise girl’s curiosity)<br>
          Woman: What is that?<br>
          Man: There is a goodlooking guy looking at you (link the answer to yourself)<br>
          Woman: Haha, you are full of yourself (let the girl to make fun of you)<br>
          Man: I have to look good to be able to talk to someone as cute as you.`,
          delimiter: " ",
        },
      },
      "<40%",
    );

    ScrollTrigger.create({
      trigger: ".scramble_wrapper",
      start: `top bottom`,
      end: "bottom top",
      onLeave: () => tl.restart().pause(),
      onLeaveBack: () => tl.restart().pause(),
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

  function droneSection() {
    const section = document.querySelector(".drone_shots");
    const figures = section.querySelectorAll("img");

    gsap.utils.toArray(".drone_shots .step").forEach((step, index) => {
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

  sensitiveImage();

  createFrankAnimaiton();

  createMapboxMap(map1Config, map1Locations);

  droneSection();

  createKKParkAnim();

  createPigButchering();

  phrasebookScramble();

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
