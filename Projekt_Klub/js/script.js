document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".club");

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < trigger) {
        sec.style.opacity = "1";
        sec.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});


function pokazSekcje() {
  document.querySelectorAll('.real-section').forEach(sekcja => {
    const odleglosc = sekcja.getBoundingClientRect().top;
    const wysokoscOkna = window.innerHeight;

    if (odleglosc < wysokoscOkna) {
      sekcja.classList.add('show');
    }
  });
}

window.addEventListener('scroll', pokazSekcje);
pokazSekcje();




const links = document.querySelectorAll('nav a');

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-link');
  }
});