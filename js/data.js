/* Ember & Clay — product data
   Each product has a hand-drawn-style SVG so the site needs no image files. */

const ICONS = {
  mug: `<svg viewBox="0 0 120 120"><path d="M28 34h50v46c0 12-11 22-25 22s-25-10-25-22V34z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M78 46h8c8 0 14 6 14 14s-6 14-14 14h-8" fill="none" stroke="currentColor" stroke-width="3"/><path d="M34 30c2-6 8-10 15-10s13 4 15 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  bowl: `<svg viewBox="0 0 120 120"><path d="M20 56h80c-2 20-19 34-40 34S22 76 20 56z" fill="none" stroke="currentColor" stroke-width="3"/><ellipse cx="60" cy="56" rx="40" ry="9" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
  candle: `<svg viewBox="0 0 120 120"><rect x="42" y="40" width="36" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M60 40c-3-8 3-12 0-20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M55 26c3 4 3 8 0 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  vase: `<svg viewBox="0 0 120 120"><path d="M50 22h20l4 18c8 6 12 16 12 28 0 22-12 34-26 34s-26-12-26-34c0-12 4-22 12-28l4-18z" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
  tray: `<svg viewBox="0 0 120 120"><rect x="18" y="42" width="84" height="36" rx="10" fill="none" stroke="currentColor" stroke-width="3"/><ellipse cx="60" cy="60" rx="30" ry="10" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  planter: `<svg viewBox="0 0 120 120"><path d="M30 44h60l-8 46H38l-8-46z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 44h72" stroke="currentColor" stroke-width="3"/><path d="M52 44c-2-14 4-24 8-24s10 10 8 24" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>`,
  apron: `<svg viewBox="0 0 120 120"><path d="M40 26h40l-6 20H46l-6-20z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M34 46h52l-8 54H42l-8-54z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M30 26c-10 4-10 16 0 20M90 26c10 4 10 16 0 20" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>`,
  basket: `<svg viewBox="0 0 120 120"><path d="M24 50h72l-9 40a10 10 0 0 1-10 8H43a10 10 0 0 1-10-8l-9-40z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 50c0-20 14-32 36-32s36 12 36 32" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M36 50v42M60 50v46M84 50v42" stroke="currentColor" stroke-width="1.6" opacity=".6"/></svg>`
};

const PRODUCTS = [
  { id: "p1", name: "Riverbed Mug", category: "kitchen", price: 24, icon: "mug", blurb: "Stoneware mug, ash glaze, holds a full pour of coffee." },
  { id: "p2", name: "Low Tide Bowl", category: "kitchen", price: 32, icon: "bowl", blurb: "Wide serving bowl thrown in speckled clay." },
  { id: "p3", name: "Smoke Candle", category: "home", price: 18, icon: "candle", blurb: "Soy wax, cedar and clove, hand-poured in small batches." },
  { id: "p4", name: "Dune Vase", category: "home", price: 46, icon: "vase", blurb: "Tall bud vase with a matte sand finish." },
  { id: "p5", name: "Morning Tray", category: "kitchen", price: 28, icon: "tray", blurb: "Oak-handled ceramic tray for tea or trinkets." },
  { id: "p6", name: "Terracotta Planter", category: "home", price: 22, icon: "planter", blurb: "Unglazed pot that breathes with your plant." },
  { id: "p7", name: "Studio Apron", category: "wearable", price: 38, icon: "apron", blurb: "Heavyweight canvas, cross-back straps, one clay-stained pocket." },
  { id: "p8", name: "Market Basket", category: "wearable", price: 34, icon: "basket", blurb: "Hand-woven seagrass, big enough for a Saturday haul." },
  { id: "p9", name: "Ash Mug, Pair", category: "kitchen", price: 44, icon: "mug", blurb: "Two mugs, slightly different — like the people drinking from them." }
];
