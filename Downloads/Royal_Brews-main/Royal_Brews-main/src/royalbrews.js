anime({
  targets: '.landing-text, .landing-title, .landing-btn',
  opacity: [0, 1],
  translateY: [60, 0],
  delay: anime.stagger(180),
  duration: 1600,
  easing: 'easeOutExpo'
});

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  const media = document.querySelector(".landing-media");
  if (media) {
    media.style.transform =
      `scale(1.12) translateY(${y * 0.15}px)`;
  }

  document.querySelectorAll(".landing-text").forEach(el => {
    el.style.transform = `translateY(${y * 0.06}px)`;
    el.style.opacity = Math.max(1 - y / 700, 0.35);
  });
});

window.addEventListener("load", () => {
  anime({
    targets: '#preloader',
    opacity: [1, 0],
    duration: 1200,
    easing: 'easeOutExpo',
    complete: () => {
      document.getElementById('preloader').style.display = 'none';
    }
  });
});


