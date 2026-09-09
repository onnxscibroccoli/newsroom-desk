export type Grade =
  | "VERIFIED"
  | "OBSERVED"
  | "REPORTED"
  | "INFERRED"
  | "HYPOTHESIS"
  | "FALSE"
  | "ABSENCE";

export const NAV = [
  { id: "summary", label: "Summary" },
  { id: "story-4", label: "Story 4" },
  { id: "story-5", label: "Story 5" },
  { id: "story-6", label: "Story 6" },
  { id: "evidence", label: "Evidence" },
  { id: "contradictions", label: "Contradictions" },
  { id: "unknowns", label: "Unknowns" },
  { id: "reporting", label: "Field kit" },
  { id: "claims", label: "Claims" },
  { id: "sources", label: "Sources" },
] as const;

export const CHANNELS = [
  {
    bureau: "Equifax",
    online: "myEquifax dispute center",
    phone: "CFPB lists (866) 349-5191; Equifax lists 1-888-378-4329, 9 a.m.–9 p.m. ET weekdays",
    mail: "P.O. Box 740256, Atlanta, GA 30374-0256",
    email: "Not listed",
  },
  {
    bureau: "Experian",
    online: "Dispute Center",
    phone: "CFPB lists (888) 397-3742; Experian help page crawled 9 Sep 2026 did not list a phone",
    mail: "P.O. Box 4500, Allen, TX 75013",
    email: "Not listed",
  },
  {
    bureau: "TransUnion",
    online: "dispute.transunion.com",
    phone: "(800) 916-8800. Hours conflict: CFPB 11 p.m. / TransUnion 10 p.m. ET weekdays",
    mail: "P.O. Box 2000, Chester, PA 19016-2000",
    email: "Not listed",
  },
];

export const FEES = [
  { item: "CRA reinvestigation", fee: "Free by statute", note: "15 U.S.C. § 1681i(a)(1)(A)", grade: "VERIFIED" as Grade },
  { item: "Online / phone / mail intake", fee: "Bureaus state free", note: "TransUnion: “100% free”", grade: "VERIFIED" as Grade },
  { item: "Certified Mail, 1 oz stamped", fee: "$6.37", note: "Postage $0.82 + Certified $5.55. Reconfirm Notice 123 PDF.", grade: "VERIFIED" as Grade },
  { item: "Certified + e-return receipt", fee: "$9.28", note: "The receipt FTC tells consumers to buy", grade: "VERIFIED" as Grade },
  { item: "Certified + green card", fee: "$11.02", note: "PS Form 3811", grade: "VERIFIED" as Grade },
  { item: "Three-bureau certified set, e-receipt", fee: "~$27.84", note: "Postage only; arithmetic", grade: "INFERRED" as Grade },
  { item: "Plus one furnisher letter", fee: "+$9.28", note: "Wrong address can lawfully produce no investigation", grade: "INFERRED" as Grade },
];

export const EVIDENCE = [
  { n: 1, statement: "CRA reinvestigation is free and generally 30 days", grade: "VERIFIED" as Grade, source: "15 U.S.C. § 1681i", story: "4" },
  { n: 2, statement: "FTC/CFPB recommend certified mail for a record", grade: "VERIFIED" as Grade, source: "FTC sample letter; CFPB Ask CFPB", story: "4" },
  { n: 3, statement: "July 2026 certified + e-receipt ≈ $9.28", grade: "VERIFIED" as Grade, source: "USPS Notice 123 tables; reconfirm PDF", story: "4" },
  { n: 4, statement: "Official NCRA channels: online, phone, mail", grade: "VERIFIED" as Grade, source: "CFPB Ask CFPB, reviewed 2 Sep 2026", story: "4" },
  { n: 5, statement: "Email/fax not listed by CFPB for NCRAs", grade: "ABSENCE" as Grade, source: "CFPB Ask CFPB", story: "4" },
  { n: 6, statement: "TransUnion online upload limits / mail-only PII", grade: "VERIFIED" as Grade, source: "TransUnion FAQ, 9 Sep 2026", story: "4" },
  { n: 7, statement: "Wrong furnisher address → no investigation duty", grade: "VERIFIED" as Grade, source: "12 CFR 1022.43(c)", story: "4" },
  { n: 8, statement: "Preferred forms cannot be a lawful gate", grade: "VERIFIED" as Grade, source: "CFPB Circular 2022-07", story: "4" },
  { n: 9, statement: "CFPB 45-day wait after a CRA dispute", grade: "VERIFIED" as Grade, source: "CFPB notice, 7 Apr 2026", story: "4" },
  { n: 10, statement: "CFPB 2FA (email + mobile) on complaint accounts", grade: "VERIFIED" as Grade, source: "CFPB newsroom, 24 Jun 2026", story: "4" },
  { n: 11, statement: "CFPB address validation is live", grade: "FALSE" as Grade, source: "CFPB says “plans to implement”", story: "4" },
  { n: 12, statement: "Title II WCAG binds Equifax, Experian, TransUnion", grade: "FALSE" as Grade, source: "DOJ rule scope: state/local government", story: "4" },
  { n: 13, statement: "Large Title II entities had to comply 24 Apr 2026", grade: "FALSE" as Grade, source: "DOJ IFR moved date to 26 Apr 2027", story: "4" },
  { n: 14, statement: "5% of consumers had tier-changing credit-file errors", grade: "VERIFIED" as Grade, source: "FTC FACTA § 319, 2012 (old, official)", story: "4" },
  { n: 15, statement: "Disparate impact on disabled consumers", grade: "HYPOTHESIS" as Grade, source: "Needs interviews + time-and-motion", story: "4" },
  { n: 16, statement: "AccessibilityService can read UI and act", grade: "VERIFIED" as Grade, source: "Android Developers", story: "5" },
  { n: 17, statement: "ACTION_CLICK often unimplemented; gesture tap is documented fallback", grade: "VERIFIED" as Grade, source: "dispatchGesture API reference", story: "5" },
  { n: 18, statement: "Play bans autonomous plan-and-execute via a11y for non-tools", grade: "VERIFIED" as Grade, source: "Play AccessibilityService policy", story: "5" },
  { n: 19, statement: "isAccessibilityTool is for disability-core tools only", grade: "VERIFIED" as Grade, source: "Play policy", story: "5" },
  { n: 20, statement: "Android 16 accessibilityDataSensitive hides views from non-tools", grade: "VERIFIED" as Grade, source: "Android Developers Blog, 11 Dec 2025", story: "5" },
  { n: 21, statement: "Voice Access: unlocked phone controllable by any speaker", grade: "VERIFIED" as Grade, source: "Google Accessibility Help", story: "5" },
  { n: 22, statement: "Advanced Protection blocks non-tool AccessibilityServices", grade: "REPORTED" as Grade, source: "Android Authority, Bitdefender, MakeUseOf — no CDD quote", story: "5/6" },
  { n: 23, statement: "Computer Control is OEM assistant + privileged permission", grade: "VERIFIED" as Grade, source: "developer.android.com/ai/computer-control", story: "6" },
  { n: 24, statement: "Computer Control navigates by screenshot analysis, not the a11y tree", grade: "VERIFIED" as Grade, source: "Computer Control docs, verbatim", story: "6" },
  { n: 25, statement: "Third parties can hold ACCESS_COMPUTER_CONTROL", grade: "FALSE" as Grade, source: "Assistant role + allowlist MUST", story: "6" },
  { n: 26, statement: "FLAG_SECURE blocks screenshots, not the accessibility tree", grade: "VERIFIED" as Grade, source: "takeScreenshot ERROR_TAKE_SCREENSHOT_SECURE_WINDOW", story: "6" },
  { n: 27, statement: "“Invisible third-party AI phone” is a documented Android feature", grade: "FALSE" as Grade, source: "Absence from public API surface", story: "6" },
];

export const PUBLISHABLE = [
  "Federal law requires the nationwide bureaus to reinvestigate disputed items free of charge, generally within 30 days. (15 U.S.C. § 1681i)",
  "Federal agencies that police this right tell consumers to use certified mail if they want proof the letter arrived. (FTC sample letter; CFPB furnisher guidance)",
  "At current USPS rates that proof is on the order of ten dollars a letter, before copies and travel. Reconfirm Notice 123 before lockup.",
  "The bureaus’ official channels, as listed by the CFPB, are website, phone, and postal mail. Email is not on the list.",
  "Some errors cannot be documented through the website path; TransUnion still requires mail for public records and for changing name, SSN, date of birth, or address.",
  "A furnisher written at the wrong address may have no legal duty to investigate. (12 CFR 1022.43(c))",
  "The CFPB’s complaint door, as of April 2026, tells credit-reporting complainants to wait 45 days after disputing with a bureau.",
  "As of June 2026 the CFPB requires two-factor authentication — email and mobile phone — to create an online complaint account.",
  "The 2024 ADA WCAG 2.1 AA rule applies to state and local government, not the credit bureaus. Large-government compliance is 26 April 2027.",
  "Android documents an accessibility service that can read on-screen controls and act, after the user turns it on in Settings.",
  "Google’s own AccessibilityService documentation states that many apps do not appropriately support ACTION_CLICK, and describes a gesture-tap fallback.",
  "Google Play prohibits ordinary apps from using that API to “autonomously initiate, plan, and execute actions or decisions.” Genuine disability tools are carved out.",
  "Google documents Computer Control, which runs apps on a background virtual display for the OEM assistant and “determines how to navigate by analyzing screenshots of the target app’s UI.”",
  "There is, in the public API surface, no general, root-free, provider-agnostic way for a third-party agent to operate Android without occupying the user’s screen.",
  "Voice Access’s official help: “If your device is awake and unlocked, anyone can control it with their voice.”",
];

export const DO_NOT_PUBLISH = [
  "“Consumer dispute rights are inaccessible to disabled people.” (HYPOTHESIS)",
  "“The bureaus refuse email to evade FCRA.” (UNKNOWN)",
  "“Online disputes are fake / e-OSCAR still ignores documents in 2026.” (needs new testing)",
  "“Certified mail is required.” (Recommended, not statutory.)",
  "“CFPB 2FA is illegal.” / “CFPB now requires address verification at submit.” (2FA exists; address validation is a plan.)",
  "“Large cities had to meet WCAG by April 24, 2026.” (DOJ extended the date.)",
  "“Broccoli proves a disabled user can complete a dispute.” (testbed, not evidence)",
  "“Broccoli proves Android can invisibly automate anything.”",
  "“Just enable AccessibilityService and an AI can use your phone.”",
  "“Shizuku is a hidden Google API for background control.” (It is user-paired ADB.)",
  "“FLAG_SECURE stops accessibility malware.” (It blocks screenshots, not the tree.)",
  "“Computer Control is rolling out to all apps.” (Opposite of the docs.)",
  "Any how-to that automates a login, payment, or bureau submission without the account holder in the loop.",
  "Android 17 Advanced Protection behavior as if it were a stable CDD fact.",
  "Dollar figures after the next USPS change, without a re-check.",
];

export const CONTRADICTIONS = [
  { title: "Free vs. the receipt", body: "The investigation is free. The recommended evidence trail is certified mail. Both are official. Do not pick one." },
  { title: "Circular 2022-07 vs. portal UX", body: "Law: you need not use their form. Product: portals are forms, with upload caps and mail-only categories." },
  { title: "Online fastest vs. mail stronger record", body: "CFPB lists all three. Attorneys often prefer mail. Neither is proven here to produce better investigation quality in 2026." },
  { title: "Android is accessible vs. Play’s agent ban", body: "The same API is the disability primitive and the malware primitive. Tightening the latter also constrains general AI agents." },
  { title: "Background service vs. foreground UI", body: "AccessibilityService runs in the background. It still drives the screen the user is looking at." },
  { title: "FLAG_SECURE vs. the tree", body: "FLAG_SECURE blocks screenshots. Android 16 accessibilityDataSensitive is the tree-side control." },
  { title: "Computer Control as a platform feature", body: "Journalism can make it sound like an app API. Official docs: OEM-preloaded assistant, allowlist, screenshot analysis — not the accessibility tree." },
  { title: "Voice Access safety", body: "It is an accessibility tool. Google also warns that anyone can control an unlocked device with their voice." },
  { title: "CFPB 508 vs. CFPB 2FA", body: "The agency is accessible on paper (TTY, 504). 98% of complaints arrive via the website, now with 2FA and a 45-day wait." },
  { title: "NCLC 2022 vs. 2026", body: "e-OSCAR findings are a lead, not a current fact, until replicated." },
  { title: "Title II date", body: "The 2024 rule set 24 April 2026 for large governments. DOJ moved it to 26 April 2027." },
  { title: "Five million complaints", body: "CFPB attributes the surge to credit repair, influencers, and AI agents. Using that volume as proof that disabled individuals cannot file is a category error." },
  { title: "TransUnion hours", body: "CFPB Ask CFPB lists weekday hours to 11 p.m. ET. TransUnion’s own page lists 10 p.m. Do not pick one." },
];

export const UNKNOWNS = [
  "Mystery-shopper outcomes for email, fax, wrong-address, and no-document disputes.",
  "TalkBack / Voice Access / WCAG audit of Equifax, Experian, TransUnion, AnnualCreditReport, CFPB complaint, SSA iAppeal.",
  "CFPB 2FA drop-off rates. Existence is verified; impact is not.",
  "Whether CFPB address validation has actually shipped.",
  "Current CRA abandonment rates.",
  "Time-and-motion and dollar costs for a disabled vs. non-disabled filer.",
  "Whether furnishers still refuse preferred-form omissions despite Circular 2022-07.",
  "Accessibility-tree completeness on a defined corpus of consumer-rights apps.",
  "Computer Control availability by OEM, device, country — and whether getWindowsOnAllDisplays sees those virtual devices.",
  "Android 17 Advanced Protection as a shipping-stable Google fact.",
  "OEM battery-manager kills of AccessibilityServices, quantitative.",
  "Broccoli device logs (not in this workspace).",
  "HIPAA amendment channel mix at major hospital systems.",
  "Whether SSI initial claims remain non-online. Confirm live SSA.",
];

export const HEADLINES = {
  four: [
    "The Cost of Proving You’re Right",
    "Your Credit-Report Rights Are Free. The Receipt Is Not.",
    "30 Days, Three Bureaus, One Post Office",
    "The 45-Day Door",
  ],
  five: [
    "The Accessible Phone That Doesn’t Exist Yet",
    "Android Can See the Button. It Cannot Finish the Form.",
    "What an AI Is Allowed to Do for a Disabled Smartphone User",
  ],
  six: [
    "The Invisible Phone",
    "Google Built Background Phone Control — for Google",
    "Accessibility Is Background. The Screen Is Still Yours",
  ],
};

export const SOURCES = [
  { group: "Statutes", items: [
    "Fair Credit Reporting Act, 15 U.S.C. §§ 1681–1681x, especially § 1681i (disputes) and § 1681g (file disclosure).",
    "CFPB Regulation V, 12 CFR 1022.43 (direct disputes to furnishers).",
    "HIPAA Privacy Rule, 45 CFR § 164.526 (amendment of PHI).",
    "ADA Title II web/mobile, 28 CFR § 35.200; DOJ IFR April 2026 extending large-entity compliance to 26 April 2027.",
    "Rehabilitation Act §§ 504 / 508; HHS 504 WCAG 2.1 AA for funding recipients (large: 11 May 2026).",
  ]},
  { group: "Agency", items: [
    "CFPB Ask CFPB: How do I dispute an error on my credit report? Last reviewed 2 Sep 2026.",
    "CFPB Circular 2022-07, Reasonable investigation of consumer reporting disputes.",
    "CFPB credit-reporting complaint notice (45-day wait), modified 7 Apr 2026.",
    "CFPB newsroom, 24 Jun 2026: two-factor authentication; 5 million complaints; AI-tools-as-agents rationale.",
    "FTC sample letter to credit bureaus (certified mail instruction), updated April 2024.",
    "FTC FACTA § 319 Fifth Interim Report (December 2012).",
  ]},
  { group: "Bureaus", items: [
    "Equifax mail-in dispute help: P.O. Box 740256; 1-888-378-4329. Rechecked 9 Sep 2026.",
    "Experian Dispute Center / P.O. Box 4500, Allen, TX 75013.",
    "TransUnion mail-or-phone page and dispute FAQ: 5 documents, 5 MB, 1-hour upload window, mail-only public records and PII.",
  ]},
  { group: "Android / Play", items: [
    "Create an accessibility service — Android Developers.",
    "AccessibilityService API: takeScreenshot (API 30), takeScreenshotOfWindow (API 34), dispatchGesture ACTION_CLICK fallback note.",
    "Google Play: Use of the AccessibilityService API (autonomous plan-and-execute ban; isAccessibilityTool exception; deterministic-script carve-out).",
    "Android Computer Control; VirtualDeviceManager allowlist MUST / MUST NOT; ASSISTANT role.",
    "Android 16 accessibilityDataSensitive blog, 11 Dec 2025.",
    "Voice Access help: unlocked-phone warning.",
  ]},
  { group: "Rates / studies", items: [
    "USPS Notice 123, July 2026 Price Change — Final on pe.usps.com. Time-limited 4 Oct 2026–17 Jan 2027 Notice 123 was Proposed as of 9 Sep 2026.",
    "NCLC, Automated Injustice Redux (2022) — e-OSCAR, a lead not a 2026 finding.",
    "GAO on knowledge-based verification (KBA) at federal agencies.",
  ]},
];

export const QUOTES = [
  {
    kicker: "FCRA",
    text: "the agency shall, free of charge, conduct a reasonable reinvestigation … before the end of the 30-day period beginning on the date on which the agency receives the notice of the dispute",
    cite: "15 U.S.C. § 1681i(a)(1)(A)",
  },
  {
    kicker: "FTC",
    text: "Send your letter by certified mail with “return receipt requested,” so you can document that the credit bureaus got it.",
    cite: "FTC sample letter, April 2024",
  },
  {
    kicker: "Play policy",
    text: "Any use of the Accessibility API that enables an app to autonomously initiate, plan, and execute actions or decisions is strictly prohibited.",
    cite: "Google Play, Use of the AccessibilityService API",
  },
  {
    kicker: "Computer Control",
    text: "the assistant app determines how to navigate by analyzing screenshots of the target app’s UI.",
    cite: "Android Developers, Computer Control",
  },
  {
    kicker: "Voice Access",
    text: "If your device is awake and unlocked, anyone can control it with their voice.",
    cite: "Android Accessibility Help",
  },
];

export const EXPERIMENTS = [
  { id: "4A", story: "4", what: "Pull all three reports via AnnualCreditReport.com with TalkBack and with Voice Access", red: "Researchers’ own files" },
  { id: "4B", story: "4", what: "File a benign accuracy dispute online vs. mail vs. phone at one bureau", red: "No false identity-theft claims" },
  { id: "4C", story: "4", what: "Furnisher dispute to the report address vs. a general customer-service address", red: "Own account" },
  { id: "4D", story: "4", what: "Attempt email and fax where numbers exist; record bounce or ignore", red: "No extra PII" },
  { id: "4E", story: "4", what: "Walk CFPB complaint flow up to, but not past, submit", red: "Do not file false complaints" },
  { id: "4F", story: "4", what: "Cost a three-bureau certified set at a real post office", red: "—" },
  { id: "4G", story: "4", what: "TransUnion document-upload limit: public record vs. account", red: "Own data" },
  { id: "5A", story: "5", what: "Tree dump of Settings, Files, a Compose demo, a WebView demo", red: "No bank login" },
  { id: "5B", story: "5", what: "ACTION_CLICK vs. dispatchGesture tap on buttons that do / don’t implement a11y click", red: "—" },
  { id: "5C", story: "5", what: "ACTION_SET_TEXT vs. a custom editor that ignores it", red: "No passwords" },
  { id: "5D", story: "5", what: "takeScreenshot on normal vs. FLAG_SECURE demo", red: "Do not bypass FLAG_SECURE" },
  { id: "5E", story: "5", what: "TalkBack + Voice Access through AnnualCreditReport", red: "Stop at login failure" },
  { id: "6A", story: "6", what: "Drive Settings with a11y while a TYPE_ACCESSIBILITY_OVERLAY is shown vs. hidden", red: "No tapjacking" },
  { id: "6B", story: "6", what: "MediaProjection of default display during a11y actions", red: "User-initiated" },
  { id: "6C", story: "6", what: "getWindowsOnAllDisplays with an external display or Presentation", red: "—" },
  { id: "6D", story: "6", what: "Record existing rish_display.py dumpsys output", red: "No secure-display bypass" },
  { id: "6E", story: "6", what: "If a device has Computer Control: observe the system dialog only", red: "Do not reverse-engineer the allowlist for evasion" },
];

export const PEOPLE = [
  { group: "Lived experience", body: "Disabled consumers via CILs, NFB, NAD, legal aid — not the Broccoli user base as the sole sample." },
  { group: "Legal / policy", body: "NCLC; CFPB; FTC; state AGs (including MA AGO if localized); FCRA plaintiffs’ counsel; NOSSCR." },
  { group: "Accessibility", body: "Google on the record (Play exception + Computer Control); TalkBack/Voice Access power users; UW, CMU, Gallaudet labs." },
  { group: "Industry comment", body: "CDIA, the three bureaus, USPS, hospital HIM directors." },
];

export const DOCUMENTS = [
  "Live Equifax, Experian, TransUnion mail-dispute instructions (they drift).",
  "USPS Notice 123 PDF (July Final; Oct 4 if it goes Final).",
  "CFPB FOIA: complaint-channel mix, 45-day rationale, 2FA failure rates.",
  "Any FACTA accuracy successor after 2012.",
  "Play policy snapshot the week of publication.",
  "Computer Control and VirtualDeviceManager HTML snapshots.",
  "Android 16/17 CDD on restricted settings and Advanced Protection.",
  "NCRA accessibility statements — document the absence.",
  "SSA current identity-proofing rules.",
  "Two or three hospital HIPAA amendment forms.",
  "Broccoli experiment logs and rish_display.py with device headers.",
  "FCRA dockets that mention inability to complete online disputes.",
];
