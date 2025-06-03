document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".club");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < triggerBottom) {
        sec.style.opacity = "1";
        sec.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.real-section').forEach(section => {
  observer.observe(section);
});



const links = document.querySelectorAll('nav a');

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-link');
  }
});