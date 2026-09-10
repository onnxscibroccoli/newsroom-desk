# Newsroom Desk

Published investigations 4, 5, and 6 — credit-report rights, Android accessibility, and background phone control — plus the reporting record behind them.

## Live

- **Public site (Vercel):** [https://newsroom-desk.vercel.app](https://newsroom-desk.vercel.app)
- **Static pages:** [https://onnxscibroccoli.github.io/desk](https://onnxscibroccoli.github.io/desk)
- **GitHub:** [https://github.com/onnxscibroccoli/newsroom-desk](https://github.com/onnxscibroccoli/newsroom-desk)
- **Sister essay:** [Half a Mile](https://half-a-mile.vercel.app) · [GitHub Pages](https://onnxscibroccoli.github.io/)

Vercel is the public front door. GitHub Pages serves the full `docs/` snapshot (stories, record, opt-in ads). Every published story back-links the others; the record lists them all. Search Console verification lives at `/google509c8bb541abfc72.html`.

## Edition

- [Your credit-report rights are free. The receipt is not.](https://newsroom-desk.vercel.app/story/the-cost-of-proving-youre-right/)
- [Android can see the button. It cannot finish the form.](https://newsroom-desk.vercel.app/story/android-can-see-the-button/)
- [Google built background phone control — for Google](https://newsroom-desk.vercel.app/story/the-invisible-phone/)
- [The record](https://newsroom-desk.vercel.app/record/) — every live story is linked here
- [Support and ads](https://newsroom-desk.vercel.app/privacy/)

## Support

Ads stay **off** unless the reader opts in. The default slot is Buy me a coffee via [Cash App $icoss](https://cash.app/$icoss). If the reader would rather not tip, opt-in paying ads sit in a non-intrusive bar at the bottom of the screen. Local Jules Gutter Cleaning ads ([267-667-2321](tel:+12676672321)) show only after a separate South Shore location opt-in. No third-party ad network loads until opt-in.

## Stack

`src/` is React 19 + TanStack Start + Tailwind v4. `docs/` is the static snapshot for Vercel and GitHub Pages.

```bash
npm install
npm run dev
npm run build
npm run build:pages
```
