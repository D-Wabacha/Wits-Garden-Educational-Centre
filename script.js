// ============ Wits Garden Educational Centre — shared behavior ============

document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Generic field validator helper
  function validateField(field) {
    var input = field.querySelector('input, textarea, select');
    if (!input) { return true; }
    var valid = input.checkValidity() && input.value.trim() !== '';
    field.classList.toggle('invalid', !valid);
    return valid;
  }

  function wireForm(formId, noteId, successMessage) {
    var form = document.getElementById(formId);
    var note = document.getElementById(noteId);
    if (!form) { return; }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll('.field');
      var allValid = true;
      fields.forEach(function (field) {
        if (!validateField(field)) { allValid = false; }
      });

      if (!allValid) {
        if (note) {
          note.textContent = 'Please fill in the required fields above before sending.';
          note.classList.add('visible');
        }
        return;
      }

      form.reset();
      fields.forEach(function (field) { field.classList.remove('invalid'); });
      if (note) {
        note.textContent = successMessage;
        note.classList.add('visible');
      }
    });

    // Clear error state as the person types
    form.querySelectorAll('.field input, .field textarea, .field select').forEach(function (input) {
      input.addEventListener('input', function () {
        input.closest('.field').classList.remove('invalid');
      });
    });
  }

  wireForm('contactForm', 'contactFormNote', "Thanks for reaching out — we've received your message and will get back to you soon.");
  wireForm('donateForm', 'donateFormNote', "Thank you! We've noted your interest and someone from Wits Garden will follow up with you personally.");

  // Lightbox for gallery images
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = document.getElementById('lightboxImg');
    document.querySelectorAll('.zoom-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var fullSrc = btn.getAttribute('data-full') || btn.parentElement.querySelector('img').src;
        var altText = btn.parentElement.querySelector('img').alt;
        lightboxImg.src = fullSrc;
        lightboxImg.alt = altText;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('open');
        lightboxImg.src = '';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        lightbox.classList.remove('open');
        lightboxImg.src = '';
      }
    });
  }

});
