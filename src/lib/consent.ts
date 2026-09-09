export const CONSENT_KEY = "newsroom-desk-consent-v1";

export type Consent = {
  ads: boolean;
  geo: boolean;
  updatedAt: string;
};

export const DEFAULT_CONSENT: Consent = {
  ads: false,
  geo: false,
  updatedAt: "",
};

export function readConsent(): Consent {
  if (typeof window === "undefined") return DEFAULT_CONSENT;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return DEFAULT_CONSENT;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    return {
      ads: parsed.ads === true,
      geo: parsed.geo === true,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return DEFAULT_CONSENT;
  }
}

export function writeConsent(next: Consent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("desk-consent"));
}
