(() => {
  const mobileQuery = window.matchMedia('(max-width: 800px)');
  const phoneQuery = window.matchMedia('(max-width: 540px)');
  let menuButton;
  let menuSheet;
  let menuBackdrop;
  let lockedScrollY = null;
  let keyboardResizeFrame = 0;
  let viewportLayoutHeight = window.innerHeight;
  const CHAT_HISTORY_KEY = 'ahmed-portfolio-assistant-history-v1';

  const getAssistantTrigger = () => document.querySelector('.assistant-trigger');
  const getAssistantPanel = () => document.querySelector('.assistant-panel');

  function readChatHistory() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(CHAT_HISTORY_KEY) || '[]');
      return Array.isArray(saved) ? saved : [];
    } catch (_) { return []; }
  }

  function writeChatHistory(messages) {
    try { sessionStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages)); } catch (_) {}
  }

  function lockPortfolioScroll() {
    if (lockedScrollY !== null) return;
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    document.documentElement.classList.add('assistant-page-locked');
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  }

  function unlockPortfolioScroll() {
    if (lockedScrollY === null) return;
    const restoreY = lockedScrollY;
    lockedScrollY = null;
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.documentElement.classList.remove('assistant-page-locked');
    window.scrollTo(0, restoreY);
  }

  function scrollConversation(panel, behavior = 'auto') {
    const messages = panel?.querySelector('.assistant-messages');
    if (!messages) return;
    const move = () => { messages.scrollTop = messages.scrollHeight; };
    move();
    requestAnimationFrame(move);
    if (behavior === 'smooth' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });
    }
  }

  function syncAssistantViewport() {
    const panel = getAssistantPanel();
    if (!panel || !phoneQuery.matches) return;
    const viewport = window.visualViewport;
    const viewportHeight = Math.round(viewport?.height || window.innerHeight);
    const viewportTop = Math.round(viewport?.offsetTop || 0);
    /* iOS keeps the layout viewport while shrinking visualViewport. Keep the
       largest recent layout height as the reference for keyboard size. */
    if (viewportHeight >= viewportLayoutHeight - 80) {
      viewportLayoutHeight = Math.max(viewportLayoutHeight, window.innerHeight, viewportHeight + viewportTop);
    }
    const keyboardOffset = Math.max(0, viewportLayoutHeight - viewportHeight - viewportTop);
    const keyboardOpen = keyboardOffset > 80;
    const available = Math.max(200, viewportHeight - 16);
    panel.style.setProperty('--assistant-keyboard-offset', `${keyboardOffset}px`);
    panel.style.setProperty('--assistant-available-height', `${available}px`);
    panel.classList.toggle('is-keyboard-open', keyboardOpen);
    scrollConversation(panel);
  }

  function scheduleAssistantViewportSync() {
    cancelAnimationFrame(keyboardResizeFrame);
    keyboardResizeFrame = requestAnimationFrame(syncAssistantViewport);
  }

  function sendFromInput(input) {
    const value = input?.value || '';
    if (!value.trim()) return false;
    sendMobileChatMessage(value);
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus({ preventScroll: true });
    return true;
  }

  function defaultAssistantReply(question) {
    const value = question.toLowerCase().trim();
    if (/\b(hello|hi|hey|bonjour|salut)\b/.test(value)) return 'Hello! I’m here and I remember this conversation. Ask me about Ahmed’s projects, services, experience, or contact details.';
    if (/(contact|email|mail|whatsapp|phone|call)/.test(value)) return 'You can contact Ahmed by email at ahmedbouamama3105@gmail.com or on WhatsApp at +974 5031 4732.';
    if (/(service|skill|offer|what do)/.test(value)) return 'Ahmed offers product design, UX/UI, research, design systems, React front-end delivery, bilingual EN/AR and RTL design, plus AI-accelerated prototyping.';
    if (/(project|portfolio|work|zest|orizon|docuverse|pilo|lingua|agropulse|dosia)/.test(value)) return 'You can explore Ahmed’s case studies in the Selected work section. They cover product design, AI, mobility, healthcare, language learning and more.';
    if (/(experience|about|based|doha|process)/.test(value)) return 'Ahmed is an AI Product Enabler and Product Designer based in Doha. His process goes from research and UX to systems, prototypes and front-end delivery.';
    return 'Thanks for your message. I can help with Ahmed’s projects, services, design process, experience, or contact details.';
  }

  function messageNode(from, text) {
    const node = document.createElement('div');
    node.className = `assistant-message is-${from}`;
    node.dataset.mobileChatMessage = 'true';
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    node.append(paragraph);
    return node;
  }

  function restoreChatHistory(panel) {
    const messages = panel?.querySelector('.assistant-messages');
    if (!messages) return;
    const saved = readChatHistory();
    if (!saved.length) {
      const welcome = messages.querySelector('.assistant-message.is-assistant p')?.textContent?.trim();
      if (welcome) writeChatHistory([{ from: 'assistant', text: welcome }]);
      return;
    }
    if (messages.querySelector('[data-mobile-chat-message]')) return;
    saved.slice(1).forEach((message) => messages.append(messageNode(message.from, message.text)));
    scrollConversation(panel);
  }

  function sendMobileChatMessage(text) {
    const panel = getAssistantPanel();
    const messages = panel?.querySelector('.assistant-messages');
    const value = text.trim();
    if (!panel || !messages || !value) return;
    const history = readChatHistory();
    const welcome = messages.querySelector('.assistant-message.is-assistant p')?.textContent?.trim();
    if (!history.length && welcome) history.push({ from: 'assistant', text: welcome });
    const answer = defaultAssistantReply(value);
    history.push({ from: 'visitor', text: value }, { from: 'assistant', text: answer });
    writeChatHistory(history);
    messages.append(messageNode('visitor', value), messageNode('assistant', answer));
    scrollConversation(panel, 'smooth');
  }

  function interceptMobileChat(event) {
    if (!phoneQuery.matches) return;
    const form = event.target?.closest?.('.assistant-form');
    if (!form) return;
    const input = form.querySelector('input');
    if (!input?.value?.trim()) return;
    // Handle the message before React's delegated submit handler. This avoids
    // resetting the conversation when the portal re-renders on mobile.
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    sendFromInput(input);
  }

  function interceptSendButton(event) {
    if (!phoneQuery.matches) return;
    const button = event.target?.closest?.('.assistant-form button');
    if (!button) return;
    const input = button.closest('.assistant-form')?.querySelector('input');
    if (!input?.value?.trim()) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    sendFromInput(input);
  }

  function interceptSendKey(event) {
    if (!phoneQuery.matches || event.key !== 'Enter' || event.isComposing) return;
    const input = event.target?.closest?.('.assistant-form input');
    if (!input?.value?.trim()) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    sendFromInput(input);
  }

  function preventBackgroundScroll(event) {
    if (!phoneQuery.matches || !document.body.classList.contains('assistant-open')) return;
    const messages = getAssistantPanel()?.querySelector('.assistant-messages');
    if (messages?.contains(event.target)) return;
    event.preventDefault();
  }

  function interceptQuickQuestion(event) {
    if (!phoneQuery.matches) return;
    const button = event.target?.closest?.('.assistant-suggestions button');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    sendMobileChatMessage(button.textContent || '');
  }

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
    if (!dock || menuButton || !mobileQuery.matches) return;

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
      unlockPortfolioScroll();
      return;
    }

    setAttributeIfChanged(panel, 'aria-modal', 'true');
    setAttributeIfChanged(panel, 'aria-label', 'Ask Ahmed, portfolio assistant');
    setTextIfChanged(panel.querySelector('.assistant-header strong'), 'Ask Ahmed');
    setAttributeIfChanged(panel.querySelector('input'), 'aria-label', 'Ask a question about Ahmed’s portfolio');

    if (phoneQuery.matches) {
      document.body.classList.add('assistant-open');
      lockPortfolioScroll();
      restoreChatHistory(panel);
      syncAssistantViewport();
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
  document.addEventListener('submit', interceptMobileChat, true);
  document.addEventListener('click', interceptSendButton, true);
  document.addEventListener('click', interceptQuickQuestion, true);
  document.addEventListener('keydown', interceptSendKey, true);
  document.addEventListener('touchmove', preventBackgroundScroll, { capture: true, passive: false });
  document.addEventListener('wheel', preventBackgroundScroll, { capture: true, passive: false });
  document.addEventListener('focusin', (event) => {
    if (event.target?.matches?.('.assistant-form input')) scheduleAssistantViewportSync();
  });
  window.visualViewport?.addEventListener('resize', scheduleAssistantViewportSync);
  window.visualViewport?.addEventListener('scroll', scheduleAssistantViewportSync);
  window.addEventListener('resize', scheduleAssistantViewportSync);
  mobileQuery.addEventListener('change', () => {
    if (!mobileQuery.matches) {
      closeMenu({ returnFocus: false });
      menuButton?.remove();
      menuButton = undefined;
    } else installMenu();
  });
  phoneQuery.addEventListener('change', () => {
    installAssistantAccessibility();
    if (!phoneQuery.matches) unlockPortfolioScroll();
    else scheduleAssistantViewportSync();
  });

  observer.observe(document.body, { childList: true, subtree: true });
  installMenu();
  installAssistantAccessibility();
  applyBranding();
})();
