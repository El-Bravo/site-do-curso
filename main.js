// === HEADER SCROLL EFFECT ===
(() => {
  const header = document.querySelector('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// === CARD HOVER EFFECT ===
document.querySelectorAll('.zoom').forEach(el => {
  el.addEventListener('mouseenter', () => el.classList.add('hovered'));
  el.addEventListener('mouseleave', () => el.classList.remove('hovered'));
});

// === MENU LATERAL RETRÁTIL ===
(() => {
  const aside = document.getElementById('leftPanel');
  const btn = document.getElementById('asideToggle');
  let leaveTimer;

  if (!aside || !btn) return;

  // Toggle manual
  btn.addEventListener('click', () => {
    const isOpen = aside.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    btn.title = isOpen ? 'Fechar menu' : 'Abrir menu';
  });

  // Hover abre / sai
  btn.addEventListener('mouseenter', () => aside.classList.add('hover'));
  btn.addEventListener('mouseleave', () => {
    leaveTimer = setTimeout(() => aside.classList.remove('hover'), 300);
  });

  aside.addEventListener('mouseenter', () => clearTimeout(leaveTimer));
  aside.addEventListener('mouseleave', () => {
    if (!aside.classList.contains('open')) {
      leaveTimer = setTimeout(() => aside.classList.remove('hover'), 600);
    }
  });

  // Clique fora fecha
  document.addEventListener('click', (e) => {
    if (!aside.classList.contains('open')) return;
    if (aside.contains(e.target) || btn.contains(e.target)) return;
    aside.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.title = 'Abrir menu';
  });

  // ESC fecha
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aside.classList.contains('open')) {
      aside.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
