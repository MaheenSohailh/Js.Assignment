window.addEventListener("DOMContentLoaded", () => {

  //  Page1 circle ////
  const cir = gsap.timeline();

  cir.to(".circle-stroke", {
    strokeDashoffset: 0,
    duration: 1.5,
    ease: "power2.out"
  })

  .to(".circle-fill", {
    opacity: 1,
    duration: 0.2,
    ease: "power1.in"
  }, "-=0.3")

  .to(".circle1", {
    scale: 1,
    duration: 1,
    ease: "back.out(2)"
  })

  .from(".move", {
    y: 200,
    scale: 0.8,
    opacity: 0,
    duration: 0.7,
    ease: "expo.out"
  }, "<")

  .from(".shop-img", {
    x: 200,
    opacity: 0,
    duration: 0.7,
    ease: "expo.out"
  }, "<")

  .from(".gift-img", {
    x: 120,
    opacity: 0,
    duration: 1,
    ease: "expo.out"
  }, "<+0.2");
});


/////  Page2 card /// //
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".gsap-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

// //////////// page3 start ////
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "top 70%",
    toggleActions: "play none none none"
  },
  defaults: {
    ease: "power3.out"
  }
});

//// 🔵 Circle animation page3
tl.from(".page3-circle", {
  scale: 0,
  rotate: -180,
  duration: 1.2
})

//// ⬜ Cards animation
.from(".card-1", {
  y: 60,
  opacity: 0,
  duration: 0.6
}, "-=0.4")

.from(".card-2", {
  y: 60,
  opacity: 0,
  duration: 0.6
}, "-=0.3")

.from(".card-3", {
  y: 60,
  opacity: 0,
  duration: 0.6
}, "-=0.3");

// ////// pgae3 end ////
