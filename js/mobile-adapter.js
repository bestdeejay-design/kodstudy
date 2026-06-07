(function() {
  'use strict';
  if (window.innerWidth > 768) return;

  var d = document;

  /* 1. Body padding for fixed nav */
  d.body.style.paddingTop = '71px';

  /* 2. Remove overflow:hidden from artboards that clip oversized shapes.
     Workshop (rec1208881541) and Footer (rec1208894806) have decorative
     shapes extending beyond artboard bounds. Benefits (rec1208855446)
     has 992px content height clipped on short screens. */
  ['rec1208881541', 'rec1208894806', 'rec1208855446'].forEach(function(id) {
    var el = d.getElementById(id);
    if (el) el.style.overflow = 'visible';
  });

  /* 3. Toggle card flip on touch — also works as fallback if the
     inline script at bottom of page fails to load */
  d.querySelectorAll('.card-container').forEach(function(c) {
    c.addEventListener('click', function(e) {
      if (e.target.closest('a')) return;
      this.classList.toggle('is-flipped');
    });
  });
})();
