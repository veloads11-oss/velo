# Client Onboarding Deck

Slide deck for the [onboarding Loom video](../../clients/onboarding-loom-script.md) —
screen-share this instead of the raw Business Settings page.

## Regenerate

```bash
cd decks/client-onboarding
npm install
node gen_icons.js    # only needed if icons change
node build_deck.js   # writes velo-client-onboarding.pptx
```

Business Manager ID (`1670265237374847`) is hardcoded into slide 3 —
update it in `build_deck.js` if it ever changes.
