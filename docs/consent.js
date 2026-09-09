(() => {
  const KEY = "newsroom-desk-consent-v1";
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
  }
  window.deskConsent = {
    read,
    write(next) {
      localStorage.setItem(KEY, JSON.stringify({ ...read(), ...next, updatedAt: new Date().toISOString() }));
    }
  };
})();