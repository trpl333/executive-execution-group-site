/* jshint esversion: 6 */
(function () {
  'use strict';

  /* ── nav scroll effect ── */
  const nav = document.querySelector('.nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── mobile nav toggle ── */
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // close on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── copyright year ── */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ── contact form submission ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      btn.textContent = 'Message Sent ✓';
      btn.disabled = true;
      btn.style.opacity = '0.7';
      setTimeout(function () {
        form.reset();
        btn.textContent = 'Send Message';
        btn.disabled = false;
        btn.style.opacity = '';
      }, 3000);
    });
  }

  /* ── simple intersection-based fade-in ── */
  if ('IntersectionObserver' in window) {
    const style = document.createElement('style');
    style.textContent = [
      '.fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }',
      '.fade-in.visible { opacity: 1; transform: none; }'
    ].join('');
    document.head.appendChild(style);

    const targets = document.querySelectorAll(
      '.service-card, .process-step, .result-card, .stat-card, .about-block, .pillar'
    );
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el) {
      el.classList.add('fade-in');
      io.observe(el);
    });
  }
})();
