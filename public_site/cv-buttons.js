/*
 * Progressive enhancements layered on top of the pre-built export:
 *   1. CV buttons (View / Download) next to the contact pills + hero CTAs.
 *   2. Nav-link fix: the in-page anchor links (#work/#about/...) were being
 *      swallowed by the client router; we handle them directly (smooth-scroll
 *      on the home page, hard navigation from sub-pages).
 *   3. A personal "off the clock" section (animal / beekeeping photos).
 * All are re-asserted via a throttled observer so they survive re-renders.
 */
(function () {
  var BASE = '/portfolio_designer/';
  var CV = BASE + 'ahmed-bouamama-cv.pdf';

  /* ---------- 1. CV buttons ---------- */
  function pill(id, label, arrow, download) {
    var a = document.createElement('a');
    a.id = id;
    a.className = 'whatsapp-button';
    a.href = CV;
    if (download) a.setAttribute('download', 'Ahmed-Bouamama-CV.pdf');
    else { a.target = '_blank'; a.rel = 'noreferrer'; }
    a.innerHTML = label + '<span aria-hidden="true">' + arrow + '</span>';
    return a;
  }
  function heroBtn(id, label) {
    var a = document.createElement('a');
    a.id = id; a.className = 'button button-outline';
    a.href = CV; a.target = '_blank'; a.rel = 'noreferrer';
    a.textContent = label;
    return a;
  }

  /* ---------- Extra projects (Zest, Orizon) prepended to the Work grid ---------- */
  var PROJECTS = [
    { slug: 'orizon', name: 'Orizon', cat: 'Travel · High-fidelity UI/UX',
      desc: 'A travel & stays booking experience — explore to checkout, confirmation and account, designed end to end.' },
    { slug: 'zest', name: 'Zest', cat: 'Entertainment · UI/UX',
      desc: 'A premium entertainment product, curated with energy — mobile, desktop, prototype and motion in one system.' },
  ]; // reverse order: prepending each puts Zest first, then Orizon

  function buildCard(p) {
    var a = document.createElement('a');
    a.id = 'card-' + p.slug;
    a.className = 'project-card';
    a.href = BASE + 'work/' + p.slug;
    a.setAttribute('data-tilt', 'project');
    a.innerHTML =
      '<div class="project-cover" style="position:relative;overflow:hidden;">' +
      '<img src="' + BASE + 'projects/' + p.slug + '/cover.jpg" alt="' + p.name + ' product preview" loading="lazy" ' +
      'style="display:block;width:100%;height:100%;aspect-ratio:16/10;object-fit:cover;">' +
      '<span class="year-pill">2026</span></div>' +
      '<div class="project-card-copy">' +
      '<p class="project-category">' + p.cat + '</p><h3>' + p.name + '</h3><p>' + p.desc + '</p>' +
      '<span class="project-link">Live Figma review <b aria-hidden="true">→</b></span></div>';
    return a;
  }

  function ensureProjects() {
    var sample = document.querySelector('.project-card');
    if (!sample) return;
    var grid = sample.parentNode;
    if (!grid || document.getElementById('card-zest')) return;
    PROJECTS.forEach(function (p) { grid.insertBefore(buildCard(p), grid.firstChild); });
  }

  function ensure() {
    ensureProjects();
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

  /* ---------- 2. Nav-link fix ---------- */
  function onClick(e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var hi = href.indexOf('#');
    if (hi === -1) return;                 // not an anchor link
    var id = href.slice(hi + 1);
    if (!id) return;
    var el = document.getElementById(id);
    if (el) {                              // target is on this page -> smooth scroll
      e.preventDefault();
      e.stopImmediatePropagation();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', '#' + id); } catch (x) {}
    } else {                               // target on the home page -> hard nav (bypass router)
      e.preventDefault();
      e.stopImmediatePropagation();
      window.location.href = BASE + '#' + id;
    }
  }

  var scheduled = false;
  function schedule() { if (!scheduled) { scheduled = true; requestAnimationFrame(function () { scheduled = false; ensure(); }); } }

  // Inject DOM only AFTER hydration (post window.load) to avoid a React
  // hydration text mismatch (#418). The click handler is safe to attach early.
  function startInjection() {
    ensure();
    try { new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
    var n = 0, iv = setInterval(function () { ensure(); if (++n > 24) clearInterval(iv); }, 300);
  }

  function boot() {
    document.addEventListener('click', onClick, true); // capture: beat the router
    if (document.readyState === 'complete') {
      setTimeout(startInjection, 350);
    } else {
      window.addEventListener('load', function () { setTimeout(startInjection, 350); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
