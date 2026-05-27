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

  // ---------- Contact form — fetch submission ----------
  const contactForm = document.getElementById('contact-form');
  const successState = document.getElementById('form-success');
  const errorBanner = document.getElementById('form-error');
  const errorMsg = document.getElementById('form-error-msg');
  const submitBtn = document.getElementById('form-submit-btn');
  const btnLabel = document.getElementById('btn-label');
  const btnArrow = document.getElementById('btn-arrow');
  const btnSpinner = document.getElementById('btn-spinner');
  const resetBtn = document.getElementById('form-reset-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (errorBanner) errorBanner.style.display = 'none';

      // Loading state
      submitBtn.disabled = true;
      btnLabel.textContent = 'Sending…';
      btnArrow.style.display = 'none';
      btnSpinner.style.display = 'inline-block';

      try {
        const data = new FormData(contactForm);
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: data,
        });
        const json = await res.json();

        if (res.ok && json.success) {
          contactForm.style.display = 'none';
          if (successState) {
            successState.style.display = 'block';
            successState.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else {
          throw new Error(json.message || 'Submission failed');
        }
      } catch (err) {
        if (errorBanner) errorBanner.style.display = 'block';
        if (errorMsg) errorMsg.textContent = err.message && err.message !== 'Submission failed'
          ? err.message
          : 'Please try again or email us directly at info@mitl.university.';
      } finally {
        submitBtn.disabled = false;
        btnLabel.textContent = 'Send message';
        btnArrow.style.display = '';
        btnSpinner.style.display = 'none';
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.style.display = 'block';
        if (successState) successState.style.display = 'none';
      });
    }
  }

  // ---------- Hero slideshow ----------
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 1) {
    let heroIdx = 0;
    setInterval(() => {
      heroSlides[heroIdx].classList.remove('active');
      heroIdx = (heroIdx + 1) % heroSlides.length;
      heroSlides[heroIdx].classList.add('active');
    }, 4000);
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
