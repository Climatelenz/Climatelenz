/* ============================================================
   ClimateLenz — Silktide consent manager configuration
   ------------------------------------------------------------
   Loaded on every page AFTER the Silktide library (CDN) script.

   Tag delivery is handled by Google Tag Manager (container
   GTM-PRTLDT72), installed in the <head> / <body> of every page.
   This file's job is purely CONSENT: the `gtag` keys below tell
   Google Consent Mode which category controls which storage, so
   the GA4 tag inside GTM stays off until the visitor opts in.

   GA4 Measurement ID (configure inside GTM): G-KNP3YWYREK
   ============================================================ */
(function () {
  if (!window.silktideConsentManager) {
    console.warn('[ClimateLenz] Silktide consent manager library did not load.');
    return;
  }

  window.silktideConsentManager.init({
    backdrop: { show: true },
    icon: { position: 'bottomLeft' },
    prompt: { position: 'bottomCenter' },
    consentTypes: [
      {
        id: 'essential',
        label: 'Essential',
        description: '<p>These cookies are necessary for the website to function properly and cannot be switched off. They remember your language and your cookie choices.</p>',
        required: true,
        onAccept: function () {}
      },
      {
        id: 'analytics',
        label: 'Analytics',
        description: '<p>These cookies help us improve the site by measuring which pages are most popular and how visitors move around it. We use Google Analytics (loaded through Google Tag Manager), with IP anonymisation enabled.</p>',
        required: false,
        defaultValue: false,
        gtag: 'analytics_storage'
      },
      {
        id: 'marketing',
        label: 'Marketing',
        description: '<p>These cookies are used by us and our advertising partners to show you relevant ads on this site and elsewhere, and to measure how those campaigns perform.</p>',
        required: false,
        defaultValue: false,
        gtag: ['ad_storage', 'ad_user_data', 'ad_personalization']
      },
      {
        id: 'functional',
        label: 'Functional',
        description: '<p>These cookies enable enhanced functionality and personalisation — for example, remembering choices you make to give you a richer experience.</p>',
        required: false,
        defaultValue: false,
        gtag: 'functionality_storage'
      }
    ],
    text: {
      prompt: {
        description: '<p>We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic.</p>',
        acceptAllButtonText: 'Accept all',
        acceptAllButtonAccessibleLabel: 'Accept all cookies',
        rejectNonEssentialButtonText: 'Reject non-essential',
        rejectNonEssentialButtonAccessibleLabel: 'Reject all non-essential cookies',
        preferencesButtonText: 'Preferences',
        preferencesButtonAccessibleLabel: 'Toggle preferences'
      },
      preferences: {
        title: 'Customize your cookie preferences',
        description: '<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>',
        saveButtonText: 'Save and close',
        saveButtonAccessibleLabel: 'Save your cookie preferences',
        creditLinkText: '',
        creditLinkAccessibleLabel: ''
      }
    }
  });

  // Footer "Cookie preferences" links re-open the Silktide preferences modal.
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest && e.target.closest('[data-cookie-prefs]');
    if (!trigger) return;
    e.preventDefault();
    try {
      var inst = window.silktideConsentManager.getInstance();
      if (inst && typeof inst.toggleModal === 'function') inst.toggleModal();
    } catch (err) {
      console.warn('[ClimateLenz] Could not open cookie preferences:', err);
    }
  });
})();
