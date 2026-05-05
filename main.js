(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setOpen(false);
      }
    });
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Thanks — this is a demo form. Connect it to Formspree, Netlify Forms, or your backend when you deploy to www.valleynestholidays.com."
      );
    });
  }
})();
