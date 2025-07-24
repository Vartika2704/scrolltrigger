gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const slides = gsap.utils.toArray(".slide");
  const backgroundImages = gsap.utils.toArray(".activeslide img");

  const zSpacing = 2000; // Smaller = faster scroll
  const scrollDepth = slides.length * zSpacing;

  // Set dynamic container height
  document.querySelector(".container").style.height = `${scrollDepth}px`;

  slides.forEach((slide, i) => {
    const initialZ = -i * zSpacing;
    const slideImg = backgroundImages[i];

    ScrollTrigger.create({
      trigger: ".container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const currentZ = initialZ + progress * scrollDepth;

        // ✅ Smooth opacity fade in range -2000 to 0
        let opacity = gsap.utils.clamp(0, 1, (currentZ + 2000) / 2000);

        slide.style.transform = `translate(-50%, -50%) translateZ(${currentZ}px)`;
        slide.style.opacity = opacity;

        // ✅ Background image fade
        if (slideImg) {
          gsap.to(slideImg, {
            opacity: currentZ > -1000 ? 1 : 0,
            duration: 1,
            ease: "power3.out",
          });
        }
      },
    });
  });
});
