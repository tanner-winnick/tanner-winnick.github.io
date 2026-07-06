// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Progressive reveal on scroll (skips entirely if user prefers reduced motion,
// since CSS already removes the transition in that case)
const revealTargets = document.querySelectorAll(".log-entry, .edu-card, .skills-col");

if ("IntersectionObserver" in window && revealTargets.length){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
