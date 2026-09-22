(() => {
  const mobileQuery = window.matchMedia('(max-width: 800px)');
  const phoneQuery = window.matchMedia('(max-width: 540px)');
  let menuButton;
  let menuSheet;
  let menuBackdrop;

  const getAssistantTrigger = () => document.querySelector('.assistant-trigger');
  const getAssistantPanel = () => document.querySelector('.assistant-panel');

  function setTextIfChanged(element, value) {
    if (element && element.textContent !== value) element.textContent = value;
  }

  function setAttributeIfChanged(element, name, value) {
    if (element && element.getAttribute(name) !== value) element.setAttribute(name, value);
  }

  function applyBranding() {
    if (document.title !== 'Ahmed Bouamama — AI Product Enabler & Product Designer') {
      document.title = 'Ahmed Bouamama — AI Product Enabler & Product Designer';
    }
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((meta) => {
      setAttributeIfChanged(meta, 'content', 'I turn complex problems into AI-enabled digital products, services and user journeys.');
    });
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((meta) => {
      setAttributeIfChanged(meta, 'content', 'Ahmed Bouamama — AI Product Enabler & Product Designer');
    });

    setTextIfChanged(document.querySelector('.hero-eyebrow'), 'AI Product Enabler & Product Designer — Doha, Qatar');
    setTextIfChanged(document.querySelector('.hero-intro'), 'I turn complex problems into AI-enabled digital products, services and user journeys — from research and UX to systems, prototypes and front-end delivery.');
  }

  function closeMenu({ returnFocus = true } = {}) {
    menuSheet?.remove();
    menuBackdrop?.remove();
    menuSheet = undefined;
    menuBackdrop = undefined;
    menuButton?.setAttribute('aria-expanded', 'false');
    if (returnFocus) menuButton?.focus();
  }

  function closeAssistant() {
    const trigger = getAssistantTrigger();
    if (getAssistantPanel() && trigger?.getAttribute('aria-expanded') === 'true') trigger.click();
  }

  function openMenu() {
    if (!mobileQuery.matches || menuSheet) return;
    if (getAssistantPanel()) closeAssistant();

    menuBackdrop = document.createElement('div');
    menuBackdrop.className = 'mobile-menu-backdrop';
    menuBackdrop.addEventListener('click', () => closeMenu());

    menuSheet = document.createElement('nav');
    menuSheet.className = 'mobile-menu-sheet';
    menuSheet.id = 'mobile-navigation';
    menuSheet.setAttribute('aria-label', 'Mobile navigation');
    menuSheet.innerHTML = [
      ['#work', 'Work'],
      ['#about', 'About'],
      ['#services', 'Services'],
      ['#contact', 'Contact'],
    ].map(([href, label]) => `<a href="${href}">${label}</a>`).join('');
    menuSheet.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu({ returnFocus: false })));

    document.body.append(menuBackdrop, menuSheet);
    menuButton?.setAttribute('aria-expanded', 'true');
    menuSheet.querySelector('a')?.focus();
  }

  function installMenu() {
    const dock = document.querySelector('.header-dock');
    if (!dock || menuButton) return;

    menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.className = 'mobile-menu-trigger';
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'mobile-navigation');
    menuButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
    menuButton.addEventListener('click', () => (menuSheet ? closeMenu() : openMenu()));
    dock.append(menuButton);
  }

  function installAssistantAccessibility() {
    const trigger = getAssistantTrigger();
    const panel = getAssistantPanel();

    if (trigger) setAttributeIfChanged(trigger, 'aria-label', trigger.getAttribute('aria-expanded') === 'true' ? 'Close portfolio assistant' : 'Open portfolio assistant');

    if (!panel) {
      document.querySelector('.assistant-modal-backdrop')?.remove();
      document.body.classList.remove('assistant-open');
      return;
    }

    setAttributeIfChanged(panel, 'aria-modal', 'true');
    setAttributeIfChanged(panel, 'aria-label', 'Ask Ahmed, portfolio assistant');
    setTextIfChanged(panel.querySelector('.assistant-header strong'), 'Ask Ahmed');
    setAttributeIfChanged(panel.querySelector('input'), 'aria-label', 'Ask a question about Ahmed’s portfolio');

    if (phoneQuery.matches) {
      document.body.classList.add('assistant-open');
      if (!document.querySelector('.assistant-modal-backdrop')) {
        const backdrop = document.createElement('div');
        backdrop.className = 'assistant-modal-backdrop';
        backdrop.addEventListener('click', closeAssistant);
        panel.before(backdrop);
      }
    }
  }

  function trapFocus(event) {
    if (event.key !== 'Tab') return;
    const panel = getAssistantPanel();
    if (!panel || !phoneQuery.matches) return;
    const items = [...panel.querySelectorAll('button, a[href], input:not([disabled])')].filter((element) => element.offsetParent !== null);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  const observer = new MutationObserver(() => {
    installMenu();
    installAssistantAccessibility();
    applyBranding();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (menuSheet) closeMenu();
      else closeAssistant();
    }
    trapFocus(event);
  });
  mobileQuery.addEventListener('change', () => { if (!mobileQuery.matches) closeMenu({ returnFocus: false }); });
  phoneQuery.addEventListener('change', installAssistantAccessibility);

  observer.observe(document.body, { childList: true, subtree: true });
  installMenu();
  installAssistantAccessibility();
  applyBranding();
})();
