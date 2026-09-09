export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; kicker: string; text: string; cite: string }
  | { type: "note"; text: string };

export type Article = {
  slug: string;
  story: "4" | "5" | "6";
  kicker: string;
  title: string;
  dek: string;
  date: string;
  status: "published";
  related: string[];
  blocks: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "the-cost-of-proving-youre-right",
    story: "4",
    kicker: "Investigation 4 · Consumer rights",
    title: "Your credit-report rights are free. The receipt is not.",
    dek: "Federal law gives you a free reinvestigation, generally within 30 days. The agencies that police that right still tell you to buy a certified-mail receipt if you want proof the letter arrived.",
    date: "2026-09-09",
    status: "published",
    related: ["android-can-see-the-button", "the-invisible-phone"],
    blocks: [
      {
        type: "p",
        text: "The Fair Credit Reporting Act does not charge you to be believed. If an item on a nationwide file is incomplete or inaccurate, Equifax, Experian, and TransUnion must reinvestigate, free of charge, generally within 30 days of notice. That is the statute, not a slogan.",
      },
      {
        type: "quote",
        kicker: "FCRA",
        text: "the agency shall, free of charge, conduct a reasonable reinvestigation … before the end of the 30-day period beginning on the date on which the agency receives the notice of the dispute",
        cite: "15 U.S.C. § 1681i(a)(1)(A)",
      },
      {
        type: "p",
        text: "The Consumer Financial Protection Bureau’s public guidance, last reviewed 2 September 2026, lists three official doors: the bureaus’ websites, their phone lines, and the U.S. mail. Email is not on the list. Fax is not on the list. That is an absence in the official channel list, not proof of a motive.",
      },
      {
        type: "h2",
        text: "The receipt the government recommends",
      },
      {
        type: "p",
        text: "The Federal Trade Commission’s sample letter, updated April 2024, tells consumers to send the dispute by certified mail, return receipt requested, “so you can document that the credit bureaus got it.” The CFPB’s furnisher guidance says the same thing: certified mail or another method that provides proof of delivery.",
      },
      {
        type: "quote",
        kicker: "FTC",
        text: "Send your letter by certified mail with “return receipt requested,” so you can document that the credit bureaus got it.",
        cite: "FTC sample letter, April 2024",
      },
      {
        type: "p",
        text: "The investigation is free. The recommended paper trail is not. At the USPS July 2026 Notice 123 rates, a one-ounce stamped letter sent certified with electronic return receipt is $9.28. A three-bureau set is on the order of $28 in postage alone, before copies, envelopes, or a trip to the counter. Those figures are time-limited. They must be rechecked against the live Notice 123 PDF before any later reprint.",
      },
      {
        type: "h2",
        text: "The website is not always a complete path",
      },
      {
        type: "p",
        text: "TransUnion’s own dispute FAQ, rechecked 9 September 2026, caps online evidence at five documents and five megabytes, with a one-hour window to attach them. Public-record disputes cannot be documented through that upload. Neither can a change of name, Social Security number, date of birth, or address. Those go by mail. Equifax and Experian still publish postal boxes — Atlanta and Allen, Texas — alongside their online centers.",
      },
      {
        type: "p",
        text: "A 2022 CFPB circular says bureaus and furnishers may not refuse to investigate because a consumer skipped a preferred form or attachment. The product, meanwhile, is a form: portals, upload caps, mail-only categories. Both facts can be true. The copy should not pick a side.",
      },
      {
        type: "h2",
        text: "The wrong address is a legal dead end",
      },
      {
        type: "p",
        text: "If you write the company that furnished the item, Regulation V is unforgiving about the envelope. A furnisher must investigate a direct dispute only if it arrives at an address the furnisher has specified. Send it to a general customer-service box and the company may have no duty at all. (12 CFR 1022.43(c).)",
      },
      {
        type: "p",
        text: "The CFPB’s own complaint door tightened in 2026. As of 7 April, credit-reporting complainants are told to wait 45 days after disputing with a bureau. As of 24 June, creating an online complaint account requires two-factor authentication — email and a mobile phone. Address validation is a stated plan, not a confirmed live gate. Do not write that it has shipped.",
      },
      {
        type: "note",
        text: "This story does not find that dispute rights are inaccessible to disabled people. That remains an investigative hypothesis. It does not find that the bureaus refuse email in order to evade the FCRA. It does not find that online disputes are “fake.” Those claims are not ready.",
      },
      {
        type: "p",
        text: "The 2024 ADA Title II rule on WCAG 2.1 AA binds state and local government, not Equifax, Experian, or TransUnion. The Justice Department moved large-government compliance from 24 April 2026 to 26 April 2027. Do not write the old date, and do not write that the bureaus are Title II entities.",
      },
    ],
  },
  {
    slug: "android-can-see-the-button",
    story: "5",
    kicker: "Investigation 5 · Accessibility",
    title: "Android can see the button. It cannot finish the form.",
    dek: "The accessibility APIs on an Android phone are real, documented, and powerful. They are not a license for an ordinary app to plan and tap its way through someone else’s life.",
    date: "2026-09-09",
    status: "published",
    related: ["the-cost-of-proving-youre-right", "the-invisible-phone"],
    blocks: [
      {
        type: "p",
        text: "If the remaining path to a consumer right is a smartphone, the next question is not whether Android has accessibility features. It does. The question is whether a person can tell an assistant what they want and have the phone carry the task through — safely, with the person still in charge.",
      },
      {
        type: "p",
        text: "Android documents an accessibility service that, once the user turns it on in Settings, can read on-screen controls and perform actions. That is the same primitive set TalkBack uses. It is also the primitive set that Play treats as a malware surface.",
      },
      {
        type: "quote",
        kicker: "Play policy",
        text: "Any use of the Accessibility API that enables an app to autonomously initiate, plan, and execute actions or decisions is strictly prohibited.",
        cite: "Google Play, Use of the AccessibilityService API",
      },
      {
        type: "p",
        text: "The ban is for ordinary apps. Genuine accessibility tools — whose core purpose is assisting people with disabilities — are carved out. Assistants, automation tools, password managers, and launchers do not qualify. Play still allows a non-tool to run a deterministic script: if trigger X, then action Y. An LLM planner is the banned category.",
      },
      {
        type: "h2",
        text: "True does not mean done",
      },
      {
        type: "p",
        text: "Google’s own AccessibilityService documentation states that many apps do not appropriately support ACTION_CLICK, and it describes a gesture-tap fallback — dispatchGesture — for those controls. A service can also call ACTION_SET_TEXT. A true return from performAction does not prove the app did the thing. Custom editors ignore the action. Overlay windows steal the tap. OEM battery managers kill the service.",
      },
      {
        type: "p",
        text: "Android 16 added accessibilityDataSensitive: views marked that way are hidden from services that are not accessibility tools. Screenshots through takeScreenshot fail on FLAG_SECURE windows. Neither of those facts is a complete privacy story, and neither is a how-to.",
      },
      {
        type: "quote",
        kicker: "Voice Access",
        text: "If your device is awake and unlocked, anyone can control it with their voice.",
        cite: "Android Accessibility Help",
      },
      {
        type: "note",
        text: "This story does not find that enabling an accessibility service lets an AI “use your phone.” It does not treat any automation testbed as evidence that a disabled consumer can complete a bureau dispute. Those claims are not ready, and they will not be smuggled in through a product name.",
      },
      {
        type: "p",
        text: "The reporting question that remains is empirical: on the actual dispute portals, how complete is the accessibility tree, and where does a documented action fail? That is lab work. It is not a finding in this edition.",
      },
    ],
  },
  {
    slug: "the-invisible-phone",
    story: "6",
    kicker: "Investigation 6 · Platform",
    title: "Google built background phone control — for Google",
    dek: "Android can run apps the user is not looking at. The documented way to do it is not the accessibility tree. It is a privileged, screenshot-driven virtual device reserved for the OEM assistant.",
    date: "2026-09-09",
    status: "published",
    related: ["the-cost-of-proving-youre-right", "android-can-see-the-button"],
    blocks: [
      {
        type: "p",
        text: "There are two stacks. Journalism that collapses them will get the platform wrong.",
      },
      {
        type: "p",
        text: "The public stack is AccessibilityService: a user-enabled service that reads the tree and acts on the display the user is looking at. It can run as a background service. It still occupies the screen. MediaProjection captures pixels after a consent dialog. It is not an input API.",
      },
      {
        type: "p",
        text: "The privileged stack is Computer Control. Google documents it as a way for an OEM-preloaded assistant, holding ACCESS_COMPUTER_CONTROL, to run apps on a background virtual display. Third-party apps cannot hold that permission. The compatibility documents say the virtual-device allowlist MUST be enabled only for the assistant role, and MUST NOT be enabled for third-party apps.",
      },
      {
        type: "quote",
        kicker: "Computer Control",
        text: "the assistant app determines how to navigate by analyzing screenshots of the target app’s UI.",
        cite: "Android Developers, Computer Control",
      },
      {
        type: "p",
        text: "That sentence is the story. Computer Control does not drive the accessibility tree. It looks at pictures of the target app. Sessions are capped. The user gets a system dialog. This is not an app API rolling out to everyone. It is the opposite of that.",
      },
      {
        type: "h2",
        text: "What FLAG_SECURE does not do",
      },
      {
        type: "p",
        text: "FLAG_SECURE blocks screenshots. The accessibility screenshot APIs return an error on those windows. FLAG_SECURE does not hide a view from the accessibility tree. The tree-side control in Android 16 is accessibilityDataSensitive. Anyone who writes that FLAG_SECURE “stops accessibility malware” is describing the wrong door.",
      },
      {
        type: "p",
        text: "Developer-option paths exist — wireless debugging paired to a user-side bridge, dumpsys, experimental display dumps. Those are not public app APIs. They are not “Android supports invisible third-party agents.” Treating a user-paired debug bridge as a hidden Google API is a category error.",
      },
      {
        type: "note",
        text: "There is, in the public API surface, no general, root-free, provider-agnostic way for a third-party agent to operate Android without occupying the user’s screen. That is a verified absence, not a dare.",
      },
      {
        type: "p",
        text: "Android lets a trusted OEM assistant drive apps the user is not looking at, by analyzing screenshots. Android lets a user-enabled accessibility service drive the UI the user is looking at, by reading the tree. Between those poles there is no public invisible control plane. That is the platform fact this edition will stand on.",
      },
    ],
  },
];

export function articleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => articleBySlug(slug))
    .filter((a): a is Article => Boolean(a));
}

export function otherArticles(except?: string) {
  return ARTICLES.filter((a) => a.slug !== except);
}
