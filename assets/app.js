/* IDEIA · comportamiento compartido */
(function () {
  /* ---- Configuración de contacto ----
     Cargar el número de WhatsApp en formato internacional, sin + ni espacios.
     Ejemplo: '5493764000000'. Mientras esté vacío, los botones llevan al bloque de contacto. */
  var WHATSAPP = '543765010944';

  document.querySelectorAll('[data-wa]').forEach(function (a) {
    if (!WHATSAPP) { a.setAttribute('href', '#contacto'); return; }
    var msg = 'Hola IDEIA, quiero una demo' + (a.dataset.wa ? ' de ' + a.dataset.wa : '') + '.';
    a.setAttribute('href', 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg));
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
  });

  /* ---- Menú móvil ---- */
  var mb = document.querySelector('.menu-btn'), mn = document.getElementById('mnav');
  if (mb && mn) {
    mb.addEventListener('click', function () {
      var open = mn.hidden;
      mn.hidden = !open;
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mn.addEventListener('click', function (e) { if (e.target.closest('a')) { mn.hidden = true; mb.setAttribute('aria-expanded', 'false'); } });
  }

  /* ---- Galerías de interfaces con pestañas ---- */
  document.querySelectorAll('[data-tabs]').forEach(function (g) {
    var btns = g.querySelectorAll('[role="tab"]'), panels = g.querySelectorAll('[role="tabpanel"]');
    var cap = g.querySelector('.gal-cap');
    function go(i) {
      btns.forEach(function (b, j) { b.setAttribute('aria-selected', i === j ? 'true' : 'false'); b.tabIndex = i === j ? 0 : -1; });
      panels.forEach(function (p, j) { p.hidden = i !== j; });
      if (cap && btns[i].dataset.cap) cap.textContent = btns[i].dataset.cap;
    }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { go(i); });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          var n = (i + (e.key === 'ArrowRight' ? 1 : btns.length - 1)) % btns.length;
          go(n); btns[n].focus();
        }
      });
    });
  });

  /* ---- Copiar mail ---- */
  document.querySelectorAll('.copybtn').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.copy, done = function () { b.textContent = 'Copiado'; setTimeout(function () { b.textContent = 'Copiar'; }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(done, function () { sel(b); });
      } else { sel(b); }
    });
  });
  function sel(b) {
    var el = b.previousElementSibling; if (!el) return;
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }
})();
