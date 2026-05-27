// MITL Campus — small interactions
(function () {
  // ---------- Mobile menu ----------
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.site-header');

  if (toggle && nav) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'primary-nav');
    nav.id = nav.id || 'primary-nav';

    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(!nav.classList.contains('open'));
    });

    // Close when a nav link is tapped
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setOpen(false));
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('open')) return;
      if (nav.contains(e.target) || (header && header.contains(e.target))) return;
      setOpen(false);
    });

    // Esc to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) setOpen(false);
    });

    // Reset on resize past breakpoint
    let lastW = window.innerWidth;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && lastW <= 1024) setOpen(false);
      lastW = window.innerWidth;
    });
  }

  // ---------- Contact form success banner ----------
  const successBanner = document.getElementById('form-success');
  const contactForm = document.getElementById('contact-form');
  if (successBanner && new URLSearchParams(window.location.search).get('success') === 'true') {
    successBanner.style.display = 'block';
    if (contactForm) contactForm.style.display = 'none';
    successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // ---------- Reveal on scroll ----------
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }
})();
