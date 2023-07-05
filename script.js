document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    document.getElementById("hamburger-menu").classList.toggle("hidden");
    document.getElementById("close").classList.remove("hidden");
    document.getElementById("navbar").classList.toggle("translate-x-full");
  });

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("translate-x-full");
  document.getElementById("hamburger-menu").classList.toggle("hidden");
  document.getElementById("close").classList.add("hidden");
});

gsap.from("#section1", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#section1",
    scroller: "body",
    start: "top 70%",
  },
});

gsap.from("#section2", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#section2",
    scroller: "body",
    start: "top 70%",
  },
});

gsap.from("#section3", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#section3",
    scroller: "body",
    start: "top 70%",
  },
});

gsap.from("#section4", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#section4",
    scroller: "body",
    start: "top 70%",
  },
});

const timeline = gsap.timeline({ deafaults: { duration: 1 } });

timeline.from(".link", {
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
});

timeline.from(".anim", {
  opacity: 0,
  stagger: 0.2,
});
