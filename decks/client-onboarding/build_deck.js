const pptxgen = require("pptxgenjs");
const path = require("path");

const COLORS = {
  primary: "028090", // deep teal
  secondary: "00A896", // seafoam
  accent: "02C39A", // mint
  dark: "023436", // near-black teal for text
  white: "FFFFFF",
  lightGray: "6B7B7C",
};

const FONT_HEAD = "Cambria";
const FONT_BODY = "Calibri";

function icon(name) {
  return path.join(__dirname, `${name}.png`);
}

function iconCircle(slide, { x, y, d = 0.9, icon: iconName, bg = COLORS.primary, iconScale = 0.5 }) {
  slide.addShape("ellipse", {
    x, y, w: d, h: d,
    fill: { color: bg },
    line: { type: "none" },
  });
  const iw = d * iconScale;
  slide.addImage({
    path: icon(iconName),
    x: x + (d - iw) / 2,
    y: y + (d - iw) / 2,
    w: iw,
    h: iw,
  });
}

function footer(slide, pageNum, onDark = false) {
  const color = onDark ? "CADCFC" : COLORS.lightGray;
  slide.addText("Velo — Client Onboarding", {
    x: 0.5, y: 7.15, w: 6, h: 0.3,
    fontFace: FONT_BODY, fontSize: 10, color,
    margin: 0,
  });
  slide.addText(String(pageNum), {
    x: 12.3, y: 7.15, w: 0.5, h: 0.3,
    fontFace: FONT_BODY, fontSize: 10, color,
    align: "right", margin: 0,
  });
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5

  // ---------- Slide 1: Title ----------
  {
    const slide = pres.addSlide();
    slide.background = { color: COLORS.primary };

    iconCircle(slide, { x: 0.9, y: 0.9, d: 1.0, icon: "building", bg: COLORS.accent });

    slide.addText("Welcome to Velo", {
      x: 0.9, y: 2.6, w: 11.5, h: 1.2,
      fontFace: FONT_HEAD, bold: true, fontSize: 44, color: COLORS.white,
      margin: 0,
    });
    slide.addText("Getting your ads live — a quick walkthrough for new clients", {
      x: 0.9, y: 3.75, w: 10.5, h: 0.6,
      fontFace: FONT_BODY, fontSize: 18, color: "CADCFC",
      margin: 0,
    });
    slide.addText("FACEBOOK & INSTAGRAM AD ACCOUNT SETUP", {
      x: 0.9, y: 6.6, w: 8, h: 0.4,
      fontFace: FONT_BODY, fontSize: 12, color: COLORS.accent, charSpacing: 2, bold: true,
      margin: 0,
    });
  }

  // ---------- Slide 2: What we need from you ----------
  {
    const slide = pres.addSlide();
    slide.background = { color: COLORS.white };

    slide.addText("What We Need From You", {
      x: 0.7, y: 0.55, w: 11.5, h: 0.8,
      fontFace: FONT_HEAD, bold: true, fontSize: 34, color: COLORS.dark,
      margin: 0,
    });
    slide.addText("Three quick things and we're ready to launch your campaigns.", {
      x: 0.7, y: 1.3, w: 10.5, h: 0.5,
      fontFace: FONT_BODY, fontSize: 15, color: COLORS.lightGray,
      margin: 0,
    });

    const items = [
      { icon: "shield", title: "Secure Access", body: "Add us as a Partner in Meta Business Manager. No passwords — you stay in control." },
      { icon: "card", title: "Payment Method", body: "A card on file on your ad account. Ad spend bills directly to you, always." },
      { icon: "images", title: "Brand Assets", body: "Logo, photos or video, and any brand guidelines we should follow in your ads." },
    ];
    const colW = 3.6, gap = 0.5, startX = 0.7, y = 2.4;
    items.forEach((it, i) => {
      const x = startX + i * (colW + gap);
      iconCircle(slide, { x, y, d: 0.85, icon: it.icon, bg: COLORS.primary });
      slide.addText(it.title, {
        x, y: y + 1.05, w: colW, h: 0.45,
        fontFace: FONT_HEAD, bold: true, fontSize: 18, color: COLORS.dark,
        margin: 0,
      });
      slide.addText(it.body, {
        x, y: y + 1.5, w: colW, h: 1.6,
        fontFace: FONT_BODY, fontSize: 13, color: COLORS.lightGray,
        margin: 0, lineSpacingMultiple: 1.25,
      });
    });

    footer(slide, 2);
  }

  // ---------- Slide 3: Step 1 - Partner Access ----------
  {
    const slide = pres.addSlide();
    slide.background = { color: COLORS.white };

    slide.addText("Step 1 — Grant Partner Access", {
      x: 0.7, y: 0.55, w: 11.5, h: 0.8,
      fontFace: FONT_HEAD, bold: true, fontSize: 32, color: COLORS.dark,
      margin: 0,
    });

    const steps = [
      { n: "1", t: "Go to Business Settings", d: "business.facebook.com/settings" },
      { n: "2", t: "Open Partners", d: "Users → Partners → Add → “Give a partner access to your assets”" },
      { n: "3", t: "Enter our Business ID", d: "Paste Velo's Business Manager ID and click Next" },
    ];
    let y = 1.9;
    steps.forEach((s) => {
      slide.addShape("ellipse", {
        x: 0.7, y, w: 0.6, h: 0.6,
        fill: { color: COLORS.accent }, line: { type: "none" },
      });
      slide.addText(s.n, {
        x: 0.7, y, w: 0.6, h: 0.6,
        fontFace: FONT_HEAD, bold: true, fontSize: 20, color: COLORS.white,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(s.t, {
        x: 1.55, y: y - 0.05, w: 6.5, h: 0.4,
        fontFace: FONT_HEAD, bold: true, fontSize: 17, color: COLORS.dark,
        margin: 0,
      });
      slide.addText(s.d, {
        x: 1.55, y: y + 0.32, w: 8.5, h: 0.5,
        fontFace: FONT_BODY, fontSize: 13, color: COLORS.lightGray,
        margin: 0,
      });
      y += 1.15;
    });

    // Business Manager ID callout card
    slide.addShape("roundRect", {
      x: 8.6, y: 1.9, w: 4.0, h: 3.2,
      rectRadius: 0.12,
      fill: { color: "F2FBF9" },
      line: { type: "none" },
    });
    iconCircle(slide, { x: 9.0, y: 2.3, d: 0.7, icon: "building", bg: COLORS.primary, iconScale: 0.5 });
    slide.addText("Velo Business Manager ID", {
      x: 8.9, y: 3.15, w: 3.4, h: 0.4,
      fontFace: FONT_BODY, bold: true, fontSize: 13, color: COLORS.dark,
      margin: 0,
    });
    slide.addText("1670265237374847", {
      x: 8.9, y: 3.6, w: 3.4, h: 0.8,
      fontFace: FONT_BODY, fontSize: 18, bold: true, color: COLORS.secondary,
      margin: 0,
    });
    slide.addText("This ID is safe to share — it only lets a business request access, never grants it automatically.", {
      x: 8.9, y: 4.35, w: 3.4, h: 0.7,
      fontFace: FONT_BODY, fontSize: 10.5, color: COLORS.lightGray,
      margin: 0,
    });

    footer(slide, 3);
  }

  // ---------- Slide 4: Step 2 - Assign assets ----------
  {
    const slide = pres.addSlide();
    slide.background = { color: COLORS.white };

    slide.addText("Step 2 — Assign the Right Assets", {
      x: 0.7, y: 0.55, w: 11.5, h: 0.8,
      fontFace: FONT_HEAD, bold: true, fontSize: 32, color: COLORS.dark,
      margin: 0,
    });
    slide.addText("Check these boxes and assign us the access level shown.", {
      x: 0.7, y: 1.3, w: 10, h: 0.5,
      fontFace: FONT_BODY, fontSize: 15, color: COLORS.lightGray,
      margin: 0,
    });

    const assets = [
      { icon: "bullhorn", title: "Ad Account", perm: "Manage campaigns" },
      { icon: "facebook", title: "Facebook Page", perm: "Manage Page" },
      { icon: "instagram", title: "Instagram Account", perm: "Manage access" },
      { icon: "chart", title: "Pixel / Dataset", perm: "Manage" },
    ];
    const cardW = 2.75, cardH = 2.6, gap = 0.35, startX = 0.7, y = 2.35;
    assets.forEach((a, i) => {
      const x = startX + i * (cardW + gap);
      slide.addShape("roundRect", {
        x, y, w: cardW, h: cardH,
        rectRadius: 0.1,
        fill: { color: "F2FBF9" },
        line: { type: "none" },
      });
      iconCircle(slide, { x: x + (cardW - 0.75) / 2, y: y + 0.35, d: 0.75, icon: a.icon, bg: COLORS.primary, iconScale: 0.5 });
      slide.addText(a.title, {
        x: x + 0.15, y: y + 1.3, w: cardW - 0.3, h: 0.5,
        fontFace: FONT_HEAD, bold: true, fontSize: 14, color: COLORS.dark,
        align: "center", margin: 0,
      });
      slide.addText(a.perm, {
        x: x + 0.15, y: y + 1.85, w: cardW - 0.3, h: 0.6,
        fontFace: FONT_BODY, fontSize: 12, color: COLORS.secondary, bold: true,
        align: "center", margin: 0,
      });
    });

    footer(slide, 4);
  }

  // ---------- Slide 5: Step 3 - Payment method ----------
  {
    const slide = pres.addSlide();
    slide.background = { color: COLORS.primary };

    iconCircle(slide, { x: 0.9, y: 1.0, d: 1.1, icon: "card", bg: COLORS.accent, iconScale: 0.5 });

    slide.addText("Step 3 — Add Your Payment Method", {
      x: 0.9, y: 2.3, w: 10.5, h: 0.8,
      fontFace: FONT_HEAD, bold: true, fontSize: 32, color: COLORS.white,
      margin: 0,
    });
    slide.addText("Ads Manager → Billing (or Business Settings → Payment Methods)", {
      x: 0.9, y: 3.0, w: 10, h: 0.5,
      fontFace: FONT_BODY, fontSize: 15, color: "CADCFC",
      margin: 0,
    });

    const points = [
      "Your card bills directly through Meta — spend goes straight to you, no markup.",
      "We never see or store your card details.",
      "You're never waiting on us to front ad spend before a campaign can launch.",
    ];
    let y = 4.0;
    points.forEach((p) => {
      slide.addShape("ellipse", { x: 0.95, y: y + 0.08, w: 0.12, h: 0.12, fill: { color: COLORS.accent }, line: { type: "none" } });
      slide.addText(p, {
        x: 1.25, y, w: 9.5, h: 0.55,
        fontFace: FONT_BODY, fontSize: 14, color: COLORS.white,
        margin: 0,
      });
      y += 0.65;
    });

    footer(slide, 5, true);
  }

  // ---------- Slide 6: Closing ----------
  {
    const slide = pres.addSlide();
    slide.background = { color: COLORS.white };

    iconCircle(slide, { x: 0.9, y: 1.0, d: 1.0, icon: "check", bg: COLORS.primary });

    slide.addText("You're All Set", {
      x: 0.9, y: 2.3, w: 10, h: 0.9,
      fontFace: FONT_HEAD, bold: true, fontSize: 40, color: COLORS.dark,
      margin: 0,
    });
    slide.addText("Once access and your payment method are confirmed, we'll get your first campaign into review.", {
      x: 0.9, y: 3.25, w: 9.5, h: 0.7,
      fontFace: FONT_BODY, fontSize: 16, color: COLORS.lightGray,
      margin: 0,
    });

    slide.addShape("roundRect", {
      x: 0.9, y: 4.4, w: 7.5, h: 1.4,
      rectRadius: 0.12,
      fill: { color: "F2FBF9" },
      line: { type: "none" },
    });
    slide.addText("Questions? Just reply to this video or message me directly.", {
      x: 1.3, y: 4.4, w: 6.8, h: 1.4,
      fontFace: FONT_BODY, fontSize: 14, color: COLORS.dark,
      valign: "middle", margin: 0,
    });

    footer(slide, 6);
  }

  await pres.writeFile({ fileName: path.join(__dirname, "velo-client-onboarding.pptx") });
  console.log("wrote velo-client-onboarding.pptx");
}

main();
