(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "talia-theme";
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function systemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function currentTheme() {
    return root.getAttribute("data-theme") || systemTheme();
  }

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* ignore */
    }
  }

  applyTheme(getStoredTheme());

  /* Animate a stat like "~500" or "$35K+" from zero, keeping its prefix and suffix */
  function countUp(el) {
    var text = el.textContent.trim();
    var match = text.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match) return;
    var prefix = match[1];
    var target = parseInt(match[2], 10);
    var suffix = match[3];
    var duration = 1100;
    var start = null;

    function frame(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (t < 1) {
        window.requestAnimationFrame(frame);
      } else {
        el.textContent = text;
      }
    }
    el.textContent = prefix + "0" + suffix;
    window.requestAnimationFrame(frame);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* Theme toggle */
    var themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", currentTheme() === "dark" ? "true" : "false");
      themeToggle.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
        storeTheme(next);
        themeToggle.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
      });
    }

    /* Mobile navigation */
    var navToggle = document.getElementById("nav-toggle");
    var mainNav = document.getElementById("main-nav");
    function setNav(open) {
      mainNav.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    }
    if (navToggle && mainNav) {
      navToggle.addEventListener("click", function () {
        setNav(!mainNav.classList.contains("open"));
      });
      mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { setNav(false); });
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && mainNav.classList.contains("open")) {
          setNav(false);
          navToggle.focus();
        }
      });
      document.addEventListener("click", function (e) {
        if (
          mainNav.classList.contains("open") &&
          !mainNav.contains(e.target) &&
          !navToggle.contains(e.target)
        ) {
          setNav(false);
        }
      });
    }

    /* Scroll progress bar, header shadow, and back-to-top button */
    var header = document.querySelector(".site-header");
    var progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    var toTop = document.createElement("button");
    toTop.type = "button";
    toTop.className = "to-top";
    toTop.setAttribute("aria-label", "Back to top");
    toTop.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
    document.body.appendChild(toTop);

    var ticking = false;
    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.setProperty("--progress", max > 0 ? Math.min(y / max, 1) : 0);
      if (header) header.classList.toggle("scrolled", y > 8);
      toTop.classList.toggle("show", y > 600);
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(onScroll);
        }
      },
      { passive: true }
    );
    onScroll();

    /* Scroll-reveal and count-up animations */
    var revealEls = document.querySelectorAll(".reveal");
    var counters = document.querySelectorAll("[data-count]");
    if ("IntersectionObserver" in window && !reduceMotion) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in-view");
            entry.target.querySelectorAll("[data-count]").forEach(countUp);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("in-view"); });
      counters.forEach(function (el) { el.removeAttribute("data-count"); });
    }
  });
})();
