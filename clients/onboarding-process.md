# Client Onboarding Process — From "Yes" to Live Campaign

Run through these phases in order. Don't skip Phase 1 to rush to launch —
a client running ads with no contract or no pixel is a problem waiting to
happen.

## Phase 1 — Paperwork & Access (day 0-1)

1. **Get the agreement signed** before touching their account: scope of
   work, monthly fee / pricing model, who owns the ad account (always
   them), cancellation terms.
2. **Create their file**: copy `clients/TEMPLATE.md` → `clients/<name>.md`.
   Fill in Basics as you learn them.
3. **Send the onboarding video**: record the Loom using
   `clients/onboarding-loom-script.md`, screen-sharing
   `decks/client-onboarding/velo-client-onboarding.pdf`. Send it over.
4. **Confirm access came through**: check Business Settings → Partners
   that they added Velo (BM ID `1670265237374847`), and that Ad Account /
   Page / Instagram / Pixel access actually landed — clients sometimes
   stop halfway through.
5. **Confirm payment method is on file** on their ad account. Don't launch
   anything until this is done — a campaign with no funding source just
   sits in limbo.

## Phase 2 — Info & Creative (day 1-3)

6. **Fill out Goals** in their client file: primary objective, target
   cost/result, target ROAS, target CTR. Ask if they don't know — give
   them rough benchmarks for their industry if they need a starting point.
7. **Fill out Offer & Audience**: what's being sold, who to, what's
   worked/not worked before (ask about past ads even if not on Meta).
8. **Fill out Creative / Content Sourcing**: what assets do they actually
   have, do we need UGC creators, who's editing. Don't wait until launch
   day to discover there's no usable creative.
9. **Verify the Pixel is installed** on their website (or install it if
   you have access). No pixel = no reliable tracking = no real reporting
   later. Set up Conversions API too if it's an e-commerce account.

## Phase 3 — Build & Launch (day 3-5)

10. **Write ad copy**: 3-5 headline variations + primary text, following
    the Ad Copy Rules (natural, simple, not salesy). Flag anything that
    risks Meta policy issues before it goes anywhere near review.
11. **Get client sign-off** on creative and copy before spending a dollar
    — avoids "why does my ad say that" conversations after launch.
12. **Build the campaign** in Ads Manager (objective, audience, budget
    matching their target from Phase 2).
13. **Launch**, and tell the client it's live and roughly when to expect
    early data (usually 3-4 days before numbers mean anything — Meta's
    learning phase).

## Phase 4 — Reporting Rhythm (ongoing)

14. **Lock in reporting cadence** from their client file (weekly? biweekly?)
    and put it on a recurring reminder.
15. **First real check-in at day 4-7**: run
    `python scripts/report.py --period last_7d`, paste it in, get the
    flagged issues before reporting to the client — never send a client
    raw numbers you haven't sanity-checked yourself.
16. **Update their client file's Notes** with wins, changes, and decisions
    as you go — this is what makes month 3 easier than month 1.

---

**Golden rule**: never let "we'll figure it out as we go" apply to
Phase 1. Contract, access, and payment method are non-negotiable before
a single dollar of their money moves.
