export const CASH_APP_HANDLE = "icoss";
export const CASH_APP_URL = "https://cash.app/$icoss";

export const DESK_LIVE = "https://newsroom-desk-five.vercel.app";
export const DESK_PAGES = "https://onnxscibroccoli.github.io/desk";
export const DESK_GITHUB = "https://github.com/onnxscibroccoli/newsroom-desk";

export const DESK_PHONE = "267-667-2321";
export const DESK_PHONE_DISPLAY = "(267) 667-2321";
export const DESK_PHONE_TEL = "tel:+12676672321";

export const SISTER_SITES = [
  {
    slug: "half-a-mile",
    title: "Half a Mile",
    dek: "A five-year-old walked to a neighborhood pond. Virginia made it a crime.",
    href: "https://half-a-mile.vercel.app",
    pages: "https://onnxscibroccoli.github.io/",
    date: "2026-09-09",
  },
] as const;

export const SOUTH_SHORE_TOWNS = [
  "Quincy",
  "Braintree",
  "Weymouth",
  "Hingham",
  "Hull",
  "Cohasset",
  "Scituate",
  "Norwell",
  "Hanover",
  "Rockland",
  "Abington",
  "Whitman",
  "Holbrook",
  "Randolph",
  "Marshfield",
  "Duxbury",
  "Kingston",
  "Pembroke",
  "Hanson",
  "Halifax",
] as const;

/** Approximate South Shore MA bounding box. Used only after ads + location opt-in. */
export const SOUTH_SHORE_BOX = {
  minLat: 41.98,
  maxLat: 42.32,
  minLng: -71.12,
  maxLng: -70.64,
} as const;

export function inSouthShore(lat: number, lng: number) {
  return (
    lat >= SOUTH_SHORE_BOX.minLat &&
    lat <= SOUTH_SHORE_BOX.maxLat &&
    lng >= SOUTH_SHORE_BOX.minLng &&
    lng <= SOUTH_SHORE_BOX.maxLng
  );
}

export const JULES_AD = {
  advertiser: "Jules Gutter Cleaning",
  kicker: "Paid · South Shore",
  line: "Gutters cleared. Downspouts flowing. South Shore Massachusetts.",
  cta: "Call Jules",
  phone: DESK_PHONE,
  phoneDisplay: DESK_PHONE_DISPLAY,
  tel: DESK_PHONE_TEL,
  href: CASH_APP_URL,
} as const;

/** National paying placement when ads are on but the reader is outside the Jules fence. */
export const HOUSE_AD = {
  advertiser: "Advertise on this desk",
  kicker: "Paid placement",
  line: "A non-intrusive paying ad funds the next investigation. Tip if you want; this bar is the other door.",
  cta: "Buy this space",
  href: CASH_APP_URL,
} as const;
