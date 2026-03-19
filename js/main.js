/* ============================================
   Burger Yoni 71 — Main JavaScript
   WOW Animations + Accessibility Widget
   ============================================ */

(function () {
  'use strict';

  // === Feature Detection ===
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(pointer: coarse)').matches;
  var isMobile = window.innerWidth < 768;

  // === Smooth Scroll ===
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var target = document.querySelector(href);
      if (target) {
        var headerHeight = document.querySelector('.site-header').offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // === Mobile Hamburger Menu ===
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // === Sticky Header with Shrink Effect ===
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.pageYOffset > 50);
    }, { passive: true });
    header.classList.toggle('scrolled', window.pageYOffset > 50);
  }

  // === Hero Scroll Down — fade out on scroll ===
  var scrollDown = document.querySelector('.hero-scroll-down');
  if (scrollDown) {
    window.addEventListener('scroll', function () {
      scrollDown.classList.toggle('hidden', window.pageYOffset > 150);
    }, { passive: true });
  }

  // === Hero Word-by-Word Reveal ===
  if (!prefersReducedMotion) {
    var heroQuote = document.querySelector('.hero-quote');
    if (heroQuote && !heroQuote.querySelector('.word')) {
      var text = heroQuote.textContent.trim();
      var words = text.split(/\s+/);
      heroQuote.textContent = '';
      heroQuote.style.opacity = '1';
      words.forEach(function (word, i) {
        var span = document.createElement('span');
        span.className = 'word';
        span.textContent = word;
        span.style.animationDelay = (0.6 + i * 0.08) + 's';
        heroQuote.appendChild(span);
        if (i < words.length - 1) {
          heroQuote.appendChild(document.createTextNode(' '));
        }
      });
    }
  }

  // === Active nav link on scroll (Intersection Observer) ===
  var sections = document.querySelectorAll('section[id]');
  var navItems = document.querySelectorAll('.nav-link');

  if (sections.length && navItems.length) {
    var observerOptions = { root: null, rootMargin: '-20% 0px -80% 0px', threshold: 0 };
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navItems.forEach(function (item) { item.classList.remove('active'); });
          var activeLink = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, observerOptions);

    sections.forEach(function (section) { navObserver.observe(section); });
  }

  // === Scroll Reveal System ===
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    if (prefersReducedMotion) {
      revealElements.forEach(function (el) { el.classList.add('active'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

      revealElements.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  // === Menu tabs functionality ===
  var menuTabs = document.querySelectorAll('.menu-tab');
  var menuCategories = document.querySelectorAll('.menu-category');

  menuTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var category = tab.dataset.category;

      menuTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      menuCategories.forEach(function (cat) {
        cat.classList.toggle('active', cat.id === category);
      });
    });
  });

  // === Parallax on Scroll (Desktop only) ===
  if (!prefersReducedMotion && !isTouch) {
    var heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      window.addEventListener('scroll', function () {
        var scrollY = window.pageYOffset;
        if (scrollY < window.innerHeight) {
          heroBg.style.transform = 'scale(' + (1 + scrollY * 0.0001) + ') translateY(' + (scrollY * 0.3) + 'px)';
        }
      }, { passive: true });
    }
  }

  // === Magnetic Button Effect (Desktop only) ===
  if (!isTouch && !prefersReducedMotion) {
    document.querySelectorAll('.magnetic').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var rect = el.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;
        var deltaX = (e.clientX - centerX) * 0.25;
        var deltaY = (e.clientY - centerY) * 0.25;
        el.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px)';
      });

      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
        el.style.transition = 'transform 0.3s ease';
        setTimeout(function () { el.style.transition = ''; }, 300);
      });
    });
  }

  // === 3D Tilt on Dish Cards (Desktop only) ===
  if (!isTouch && !prefersReducedMotion) {
    document.querySelectorAll('.dish-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = (y - centerY) / centerY * -5;
        var rotateY = (x - centerX) / centerX * 5;
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  // === Floating WhatsApp — add visible class after entrance ===
  var floatingWa = document.querySelector('.floating-whatsapp');
  if (floatingWa) {
    setTimeout(function () {
      floatingWa.classList.add('visible');
    }, 4000);
  }

  // === Lazy load images ===
  if ('IntersectionObserver' in window) {
    var lazyImages = document.querySelectorAll('img[data-src]');
    if (lazyImages.length) {
      var imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });
      lazyImages.forEach(function (img) { imageObserver.observe(img); });
    }
  }

  // ============================================
  // === Israeli Accessibility Widget ===
  // ============================================

  var a11yWidget = document.querySelector('.a11y-widget');
  if (a11yWidget) {
    var toggle = a11yWidget.querySelector('.a11y-toggle');
    var panel = a11yWidget.querySelector('.a11y-panel');
    var STORAGE_KEY = 'yoni71_a11y';

    // Load saved settings
    var savedSettings = {};
    try {
      savedSettings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) { /* ignore */ }

    function applySettings(settings) {
      document.body.classList.remove('a11y-high-contrast', 'a11y-grayscale', 'a11y-highlight-links', 'a11y-font-lg', 'a11y-font-xl', 'a11y-big-cursor');

      if (settings.contrast) document.body.classList.add('a11y-high-contrast');
      if (settings.grayscale) document.body.classList.add('a11y-grayscale');
      if (settings.highlightLinks) document.body.classList.add('a11y-highlight-links');
      if (settings.fontSize === 1) document.body.classList.add('a11y-font-lg');
      if (settings.fontSize === 2) document.body.classList.add('a11y-font-xl');
      if (settings.bigCursor) document.body.classList.add('a11y-big-cursor');

      // Update button states
      var contrastBtn = panel.querySelector('[data-a11y="contrast"]');
      var grayscaleBtn = panel.querySelector('[data-a11y="grayscale"]');
      var linksBtn = panel.querySelector('[data-a11y="links"]');
      var cursorBtn = panel.querySelector('[data-a11y="cursor"]');
      var fontUpBtn = panel.querySelector('[data-a11y="font-up"]');
      var fontDownBtn = panel.querySelector('[data-a11y="font-down"]');

      if (contrastBtn) contrastBtn.classList.toggle('active', !!settings.contrast);
      if (grayscaleBtn) grayscaleBtn.classList.toggle('active', !!settings.grayscale);
      if (linksBtn) linksBtn.classList.toggle('active', !!settings.highlightLinks);
      if (cursorBtn) cursorBtn.classList.toggle('active', !!settings.bigCursor);
    }

    function saveSettings() {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(savedSettings)); } catch (e) { /* ignore */ }
    }

    // Apply on load
    applySettings(savedSettings);

    // Toggle panel
    toggle.addEventListener('click', function () {
      panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', panel.classList.contains('open'));
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (!a11yWidget.contains(e.target)) {
        panel.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Keyboard shortcut: Ctrl+F1
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.key === 'F1') {
        e.preventDefault();
        panel.classList.toggle('open');
        toggle.setAttribute('aria-expanded', panel.classList.contains('open'));
        if (panel.classList.contains('open')) toggle.focus();
      }
    });

    // Widget buttons
    panel.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-a11y]');
      if (!btn) return;

      var action = btn.dataset.a11y;

      switch (action) {
        case 'contrast':
          savedSettings.contrast = !savedSettings.contrast;
          break;
        case 'grayscale':
          savedSettings.grayscale = !savedSettings.grayscale;
          break;
        case 'links':
          savedSettings.highlightLinks = !savedSettings.highlightLinks;
          break;
        case 'cursor':
          savedSettings.bigCursor = !savedSettings.bigCursor;
          break;
        case 'font-up':
          savedSettings.fontSize = Math.min((savedSettings.fontSize || 0) + 1, 2);
          break;
        case 'font-down':
          savedSettings.fontSize = Math.max((savedSettings.fontSize || 0) - 1, 0);
          break;
        case 'reset':
          savedSettings = {};
          break;
      }

      applySettings(savedSettings);
      saveSettings();
    });
  }

})();
