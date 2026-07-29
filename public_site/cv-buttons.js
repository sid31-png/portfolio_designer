/*
 * Adds "View CV" / "Download CV" buttons next to the existing contact pills and
 * hero CTAs, reusing the site's own button classes so they match the theme.
 * The site is a hydrated app, so we (a) add the buttons after load and
 * (b) re-assert them via a throttled MutationObserver in case React re-renders.
 */
(function () {
  var CV = '/portfolio_designer/ahmed-bouamama-cv.pdf';

  function pill(id, label, arrow, download) {
    var a = document.createElement('a');
    a.id = id;
    a.className = 'whatsapp-button';
    a.href = CV;
    if (download) {
      a.setAttribute('download', 'Ahmed-Bouamama-CV.pdf');
    } else {
      a.target = '_blank';
      a.rel = 'noreferrer';
    }
    a.innerHTML = label + '<span aria-hidden="true">' + arrow + '</span>';
    return a;
  }

  function heroBtn(id, label) {
    var a = document.createElement('a');
    a.id = id;
    a.className = 'button button-outline';
    a.href = CV;
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.textContent = label;
    return a;
  }

  function ensure() {
    var contact = document.querySelector('.contact-actions');
    if (contact && !document.getElementById('cv-view')) {
      contact.appendChild(pill('cv-view', 'View CV', '↗', false));
      contact.appendChild(pill('cv-download', 'Download CV', '↓', true));
    }
    var hero = document.querySelector('.hero-actions');
    if (hero && !document.getElementById('cv-hero-view')) {
      hero.appendChild(heroBtn('cv-hero-view', 'View CV'));
    }
  }

  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      ensure();
    });
  }

  function boot() {
    ensure();
    // Re-assert if the framework re-renders these containers (throttled).
    try {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    } catch (e) {}
    // Extra safety through the hydration window.
    var n = 0;
    var iv = setInterval(function () {
      ensure();
      if (++n > 24) clearInterval(iv);
    }, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
