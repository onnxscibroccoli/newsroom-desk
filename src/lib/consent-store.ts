import { useEffect, useState } from "react";
import { DEFAULT_CONSENT, readConsent, writeConsent, type Consent } from "@/lib/consent";

export function useConsent() {
  const [consent, setConsent] = useState<Consent>(DEFAULT_CONSENT);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
    const onChange = () => setConsent(readConsent());
    window.addEventListener("desk-consent", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("desk-consent", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  function update(partial: Partial<Consent>) {
    const ads = partial.ads ?? consent.ads;
    const next: Consent = {
      ...consent,
      ...partial,
      ads,
      geo: ads ? (partial.geo ?? consent.geo) : false,
      updatedAt: new Date().toISOString(),
    };
    writeConsent(next);
    setConsent(next);
  }

  return { consent, ready, update };
}
