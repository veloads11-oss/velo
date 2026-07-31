# Velo Website — Base44 Build Plan

Website built in Base44, used live on Zoom sales calls as a demo tool to
sell Facebook/Instagram ad management to local service businesses.
Building via sequential Base44 prompts (one per section), not one giant
prompt — easier to review/fix each piece before moving on.

## Status: gathering references, not yet building in Base44

## Visual Style (from reference screenshots — a course called
"The AI Arbitrage System")
- Dark theme: near-black/navy background, glow-bordered cards
- Cards: emoji or icon → small-caps muted category label → bold headline
  → plain-English body text
- Color-as-meaning: categories/steps are color-coded consistently
  (e.g. Campaign=blue, Ad Set=purple, Ad=teal; SCALE=green, WATCH=yellow,
  KILL=red)
- Teaching device: one relatable running example (a fictional local
  business) walked through every funnel stage instead of abstract
  explanations
- Funnel/waterfall pattern: numbered circle stat badges connected by
  arrows, ending in a plain-math payoff line
- Stats panel pattern: bordered card, row of big-number tiles with small
  muted labels, divider, then derived/highlighted metrics (hero stat in
  green)
- Interactive calculator pattern: input fields (dark boxes) → "Monthly
  Projection" output panel → bold hero row (net profit) → green summary
  banner translating the math into one plain sentence
- Minor UI patterns: colored pill badges in tables (SCALE/WATCH/KILL),
  "Copy" button on template cards

Foundation prompt (already drafted) proposes: deep navy #1E2761 primary,
ice blue #CADCFC supporting, white backgrounds, teal/emerald accent for
CTAs, clean sans-serif (Inter-style) typography — placeholder pending
final style confirmation from references above.

## Roadmap

1. **Foundation & Design System** — pages, nav, brand palette, typography
   (prompt already written, not yet sent to Base44)
2. **Homepage Hero** — headline/subhead/CTA for local service business
   owners
3. **"How It Works" Visual Flow** — Ad → Landing Page → Lead Capture →
   CRM → Follow-up → Appointment, using the funnel/waterfall pattern from
   references
4. **Industry Playbook Selector — "THE BIG ONE" / flagship feature.**
   Tabbed niche picker (Restaurant, Real Estate, Home Services, Med Spa,
   Gym/Studio, Roofing, Clothing, etc.). Selecting a niche shows: niche
   description, 3 key stats (Daily Budget range, Targeting Radius, Target
   CPL) + Objective, "6 Ad Angles That Work" (numbered cards: hook name +
   description), and a full example ad (headline/body/CTA) for that
   niche. Designed to be clicked live on a sales call so the site
   personalizes to the prospect's exact business type in real time.
   Placed right after the Hero — bigger priority than the Process section.
5. **Interactive Lead/ROI Calculator** — "Napkin Math" pattern: inputs
   (avg customer value, daily ad budget, cost per lead, lead→customer
   conversion %, monthly fee) → Monthly Projection output (ad spend,
   leads/mo, customers/mo, revenue, ROAS, total cost, net profit as hero
   row) → green summary sentence. Needs to reflect Velo's actual pricing
   model once finalized ($500 setup + 20% commission — commission
   structure still being decided, see open questions).
6. **Process & Strategy Section** — Velo's methodology; candidates from
   references: The Testing Framework (5 steps) and/or The Scaling Ladder
   (step-chain visual, $15→$18→$22...→$40 with % labels)
7. **Trust & Credibility Section** — no case studies yet, so lean on
   founder credibility / guarantees / "why local businesses choose Velo"
8. **Offer Section** — presenting pricing without over-committing details
   better closed live on the call
9. **Booking Section** — call scheduling embed
10. **Footer & Legal** — contact, privacy/terms
11. **Polish Pass** — responsiveness, motion, copy tightening

## Open questions before drafting prompts 2+

- Which niches launch first — all 7 seen in references, or trimmed to
  Hussein's actual target verticals?
- Ad angles/example copy per niche: AI-generate via Base44 then Hussein
  edits, or Hussein supplies exact content per niche?
- Final brand palette confirmation (placeholder navy/ice-blue/teal vs.
  matching the course's near-black/glow-blue style more directly)
- Commission structure for the calculator (see
  `clients/onboarding-process.md` / pricing discussion — 20% of closed
  revenue vs. flat per-lead fee still undecided as of last discussion)

## Prompt 1 — Foundation & Design System (drafted, not yet sent)

See conversation history / recreate from this brief: pages (Home, How It
Works, Pricing/Offer, Book a Call, Privacy Policy), sticky nav with
"Book a Call" CTA always visible, placeholder brand palette above,
clean sans-serif typography, minimal/confident SaaS-agency tone, no
stock clip-art icons.
