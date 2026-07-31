---
name: unit-economics
description: LTV/CAC analysis and profitability assessment
primary-agent: stratos
expert-source: Business Expert, Media Buying Expert
---

# Unit Economics Skill

## When to Use
- Before launching any paid campaign
- Evaluating offer profitability
- Setting target CPA/ROAS goals

## Core Metrics

### Essential Formulas
```
CAC = Total Marketing Spend / New Customers
LTV = Average Order Value × Purchase Frequency × Customer Lifespan
ROAS = Revenue / Ad Spend
MER = Total Revenue / Total Marketing Spend
Contribution Margin = Price - Variable Costs
```

### The Golden Rules ([Expert])
```
RULE 1: LTV > 3x CAC minimum
  - Below 3x = unprofitable long-term
  - 3x = sustainable
  - 5x+ = highly scalable

RULE 2: Break-even within 30-60 days
  - Day 0-30: Acceptable
  - Day 30-60: Concerning
  - Day 60+: Red flag

RULE 3: Back-end should be 3-5x front-end value
  - Front-end: Acquisition offer
  - Back-end: Upsells, recurring, high-ticket
```

### Front-End vs Back-End (Media Buying Expert)
```
FRONT-END:
- Purpose: Acquire customer, break even
- Target ROAS: 1.5-2.5x
- Timeline: Immediate to 7 days

BACK-END:
- Purpose: Generate profit
- Target ROAS: 5-15x
- Timeline: 30-90 days

"Front-end pays the ads, back-end is the profit"
```

## Analysis Framework

### Step 1: Map the Offer Stack
```
FRONT-END OFFER:
- Price: CAD$____
- Variable cost: CAD$____
- Contribution margin: CAD$____
- Expected conversion rate: ____%

UPSELL 1:
- Price: CAD$____
- Take rate: ____%
- Expected revenue per buyer: CAD$____

UPSELL 2:
- Price: CAD$____
- Take rate: ____%
- Expected revenue per buyer: CAD$____

BACK-END OFFER:
- Price: CAD$____
- Conversion rate: ____%
- Expected revenue per front-end buyer: CAD$____
```

### Step 2: Calculate True LTV
```
LTV (90-day) =
  Front-end revenue
  + Upsell 1 revenue × take rate
  + Upsell 2 revenue × take rate
  + Back-end revenue × conversion rate
  + Recurring revenue × months retained

EXAMPLE:
Front-end: CAD$297
Upsell 1: CAD$97 × 30% = CAD$29.10
Upsell 2: CAD$497 × 15% = CAD$74.55
Back-end: CAD$2,997 × 8% = CAD$239.76
───────────────────────────────
LTV (90-day): CAD$640.41
```

### Step 3: Set Target CAC
```
Target CAC = LTV / 3

EXAMPLE:
LTV: CAD$640
Target CAC: CAD$640 / 3 = CAD$213
```

### Step 4: Determine Required ROAS
```
Required Front-End ROAS = Front-End Price / Target CAC

EXAMPLE:
Front-end price: CAD$297
Target CAC: CAD$213
Required ROAS: CAD$297 / CAD$213 = 1.39x

This means: Achieve 1.39x ROAS on front-end
           to be profitable on full customer journey
```

## Brazilian Market Adjustments

### Payment Reality
```
INSTALLMENT FACTOR:
- Most Brazilian customers pay in 12x
- Immediate cash: ~40% of ticket
- Full collection: 8-10 months

CASH FLOW IMPLICATION:
- Budget for 60-day break-even
- Reserve cash for ad spend gap
- Consider boleto payment delays (3-5 days)
```

### Tax Considerations
```
NET REVENUE FACTOR:
- Payment gateway: 4-6%
- Taxes (MEI/Simples): 6-15%
- Chargebacks: 1-3%

ADJUSTED MARGIN:
Actual margin = Listed price × 0.80 to 0.85
```

## Output: Unit Economics Report

```
UNIT ECONOMICS ANALYSIS: {Offer Name}
DATE: {Date}

OFFER STACK:
┌────────────────────────────────────────┐
│ FRONT-END: {name}                      │
│ Price: CAD${price}                       │
│ Cost: CAD${cost}                         │
│ Margin: CAD${margin} ({X}%)              │
├────────────────────────────────────────┤
│ UPSELL 1: {name}                       │
│ Price: CAD${price} × {X}% = CAD${expected} │
├────────────────────────────────────────┤
│ UPSELL 2: {name}                       │
│ Price: CAD${price} × {X}% = CAD${expected} │
├────────────────────────────────────────┤
│ BACK-END: {name}                       │
│ Price: CAD${price} × {X}% = CAD${expected} │
└────────────────────────────────────────┘

CALCULATED METRICS:
- LTV (90-day): CAD${ltv}
- Target CAC: CAD${ltv/3}
- Break-even CPA: CAD${front_end_price}
- Required ROAS: {X}x

PROFITABILITY SCENARIO:
At CPA of CAD${target}:
- Immediate loss: CAD${loss}
- 30-day recovery: CAD${recovery}
- 90-day profit: CAD${profit}

VERDICT: {PROFITABLE / MARGINAL / UNPROFITABLE}

RECOMMENDATION:
{proceed / adjust pricing / increase back-end / don't launch}

RISKS:
1. {risk}
2. {risk}

OPTIMIZATION OPPORTUNITIES:
1. {opportunity}
2. {opportunity}
```

## Expert Attribution
- **Business Expert**: LTV > 3x CAC rule, break-even timing
- **Media Buying Expert**: Front-end/back-end split, challenge economics
