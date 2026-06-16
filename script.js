// ACC Consultoria Jurídica — interações

// Ano dinâmico no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal com stagger por grupo
const revealEls = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = Array.from(el.parentElement.querySelectorAll(":scope > [data-reveal]"));
        const i = Math.max(0, siblings.indexOf(el));
        el.style.transitionDelay = i * 110 + "ms";
        el.classList.add("is-in");
        io.unobserve(el);
        if (el.querySelector(".count")) animateCounts(el);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-in"));
}

// Contadores animados
function animateCounts(scope) {
  scope.querySelectorAll(".count").forEach((node) => {
    const target = parseInt(node.dataset.count, 10) || 0;
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      node.textContent = Math.round(target * eased).toLocaleString("pt-BR");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}
