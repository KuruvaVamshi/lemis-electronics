---
name: motion-design
description: Use this skill for ANY task that involves web animation, motion design, micro-interactions, scroll effects, transitions, or "make this feel premium / alive / awwwards-worthy." Covers hero sections, scroll storytelling, cards, buttons, navigation, loaders, backgrounds, SVG, 3D/WebGL, and business UI. This skill does not just list effects — it teaches you how to invent new ones and choose correctly among them.
companion_reference: animation-bible.md (100+ named, pre-specced animations — your lookup table, not your ceiling)
---

# Motion Design Skill — Generative System

You are not a catalog-lookup tool. `animation-bible.md` (bundled alongside this file) is your **reference library** of ~280 named, battle-tested effects with tech/timing/easing pre-filled — use it whenever an entry already fits. But the real job is bigger: **most great motion on a real project is a *new* combination that isn't in anyone's list.** This file teaches you the underlying grammar so you can generate those combinations yourself, judge whether they're any good, and implement them correctly.

Read this file fully before writing animation code. Then, if you need a specific named effect's exact spec, grep `animation-bible.md` for it.

---

## 1. The Motion Grammar (how to invent new effects)

Every animation — named or novel — is a composition of six independent choices. Treat them as slots you can recombine, not a fixed recipe:

| Slot | Options |
|---|---|
| **Trigger** | page load · scroll into view · scroll-scrub (tied to scroll position) · hover · click/tap · focus · drag · idle/loop · state change (success/error/loading) · cursor proximity · velocity (scroll/drag speed) · time-of-day/context |
| **Subject** | whole section · container · single element · text (chars/words/lines) · SVG path · image · particle field · 3D mesh · cursor itself · background layer |
| **Mechanism** | opacity · translate · scale · rotate · skew · clip-path/mask · blur/filter · color/gradient shift · path draw (stroke-dashoffset) · morph (shape A→B) · physics (spring/momentum) · shader/displacement |
| **Choreography** | single element · staggered group (fixed delay) · staggered group (distance-from-cursor or distance-from-click delay) · sequential timeline (A finishes, then B starts) · parallel layers at different speeds · scroll-scrubbed (progress-driven, not time-driven) |
| **Easing/feel** | linear (mechanical, loops) · ease-out/power2-3.out (natural deceleration, default for entrances) · ease-in-out (loops, state changes) · back.out/elastic (playful overshoot) · spring physics (natural, interruptible, best for drag/gesture-driven UI) · steps() (typewriter, glitch, retro) |
| **Constraint** | duration budget · perf budget (see §4) · reduced-motion fallback · mobile fallback · one-signature-move-per-viewport rule (see §3) |

**To invent a new effect:** pick a trigger the page doesn't already use for something else nearby, pick a subject that matches the content's semantic weight (hero headline vs. a stat number vs. a whole section), pick a mechanism that reinforces the *meaning* of the trigger (e.g. a "success" mechanism should feel resolved/settling, not chaotic), then choreograph it, then constrain it. Always ask: **does this mechanism make the interaction easier to understand, or is it decoration?** If purely decorative, it must be cheap (see §4) and must not block content.

**Combinatorics as an idea generator:** cross a Trigger with a Mechanism you haven't used yet on this project, sanity-check against §2 and §3, and you have a candidate nobody wrote down in a listicle. Example: `scroll-scrub` × `chromatic aberration` on a product photo as the user scrolls past it = a novel "lens focus" moment that isn't entry #278 verbatim but is built from the same primitives.

---

## 2. Decision Engine (context → animation, before you touch code)

Before implementing anything, classify the project on these axes — they gate what's allowed:

1. **Site category**: utility/finance/healthcare/checkout (restraint-first) · SaaS/product (confident but clean) · agency/portfolio/creative (wow-factor expected) · e-commerce (conversion-first, motion must not slow scanning) · editorial/content (motion must not compete with reading).
2. **Audience device reality**: if you don't know, assume majority mobile — build the mobile-safe version first, then progressively enhance for desktop hover/cursor/WebGL effects. Never build desktop-first and "fix" mobile later.
3. **Performance ceiling**: does the page already ship heavy assets (video, large images, 3D)? If yes, your animation budget shrinks — prefer CSS/compositor-only effects over JS-driven or WebGL ones.
4. **Brand tone**: playful (elastic/back easing, bounce, color) vs. premium/quiet (power.out, longer durations, subtle scale) vs. technical/precise (linear, steps, monospace-adjacent timing). Pick one tone and hold it — mixing elastic bounce on a fintech dashboard and linear precision on a kids' app both read as wrong.

**Hard rule — one signature move per viewport.** Every screen the user sees at once gets at most one "wow" (⭐⭐⭐⭐+) effect. Everything else in that viewport is a quiet supporting animation (fade-up, hover lift, underline slide). Agents left unsupervised tend to stack five ⭐⭐⭐⭐⭐ effects on one hero — this reads as amateur, not premium. If asked for "as much wow as possible," concentrate it: one flagship scroll-scrubbed or WebGL moment for the whole page, not one per section.

**When the user says "make it feel premium/alive" with no other spec**, default to the system in §6 below rather than inventing from scratch — it's the calibrated default that works for ~90% of business sites.

**When the user explicitly wants experimental/showcase/awwwards-tier work**, that's your license to reach for §1's rarer combinations (shaders, particle systems, scroll-scrubbed 3D) — but still obey the one-signature-move rule per screen, and still ship a reduced-motion fallback.

---

## 3. Restraint Rules (non-negotiable, regardless of what's asked)

- **Never gate content behind an animation completing.** A slow loader or a long entrance sequence must never block the user from reading/clicking once the DOM is ready. Skip-on-second-visit for load animations (session-check), always.
- **Never animate accessibility-critical content in a way that delays legibility** — hero H1/CTA text should be readable within ~1 second even if still mid-animation.
- **No more than one looping/pulsing element competing for attention at a time** on a given screen (one CTA pulse, not three).
- **Hover-dependent effects (magnetic, tilt, custom cursor, glow-follow) must have zero effect on touch devices** — don't just "let them fail silently," actively branch them out via a pointer:fine media query or JS pointer-type check, and provide the tap-equivalent (ripple/scale) instead.
- **Respect `prefers-reduced-motion`** on every project by default, without being asked: collapse entrances to instant/near-instant opacity changes, disable parallax/particle/looping backgrounds (swap for a static frame), and never rely on motion alone to convey state (also change color/icon/text).

---

## 4. Performance Budget (check before shipping any effect)

| Tier | What's in it | Cost discipline |
|---|---|---|
| **Free** (use liberally) | opacity, transform (translate/scale/rotate), CSS transitions on compositor-friendly properties | Always safe, GPU-composited, no layout thrash. Default to these for 80% of the page. |
| **Cheap** (use per-section) | stagger via CSS/GSAP, IntersectionObserver-triggered entrances, SVG stroke-dashoffset, backdrop-filter blur (used sparingly), CSS conic/radial gradient animation | Fine on mobile if not combined with 5 other things on the same screen. |
| **Moderate** (budget it) | ScrollTrigger scrub/pin, Canvas 2D particle fields, `filter` blur/hue-rotate animated continuously, JS-driven mouse-follow | One or two per page max; test on a mid-tier Android device, not just your laptop. |
| **Expensive** (justify explicitly, desktop-gated) | Three.js/WebGL scenes, shader effects, scroll-scrubbed 3D, image-to-particle dissolves | Only when the brief calls for a genuine showcase moment. Lazy-load the WebGL bundle, show a static/CSS fallback while it loads, and never ship it as the *only* way to see hero content. |

**Rules of thumb:**
- Animate `transform` and `opacity`; avoid animating `width`, `height`, `top/left`, or `box-shadow` in loops — use `transform: scale`/translate and a pre-rendered shadow instead.
- `will-change` only on the element actively animating, removed after — not applied blanket across a page.
- Any scroll-linked (scrub) animation must be built on ScrollTrigger/Framer's scroll hooks (RAF-batched), never a raw unthrottled `scroll` event listener.
- Particle counts, blur radii, and shadow layers are the first things to cut for a mobile variant — build a `reduceEffects` flag from a device/viewport check and thread it through.

---

## 5. Implementation Patterns (so you don't reinvent syntax)

Pick the lightest stack that satisfies the effect — don't reach for Three.js when CSS solves it, and don't hand-roll physics when Motion's spring does it in one prop.

### CSS-only entrance (free tier)
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.is-visible { opacity: 1; transform: translateY(0); }
```
```js
// IntersectionObserver driver — reusable for any .reveal element
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible'));
}, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```

### GSAP + ScrollTrigger (staggered reveal, scrub, pin)
```js
gsap.from('.card', {
  y: 40, opacity: 0, duration: 0.6, ease: 'power2.out',
  stagger: 0.1,
  scrollTrigger: { trigger: '.card-grid', start: 'top 80%' }
});

// scroll-scrubbed (progress-driven, not time-driven)
gsap.to('.hero-img', {
  scale: 1.15, ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
});
```
Always `gsap.registerPlugin(ScrollTrigger)` once at app init. Kill/refresh ScrollTriggers on route change in SPA setups (`ScrollTrigger.getAll().forEach(t => t.kill())`) to avoid stacked triggers.

### Motion (Framer Motion) — spring-based, React state-driven UI
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-10%' }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
/>
```
Use Motion (not GSAP) whenever the animation depends on React state/props — layout animations, shared-element transitions (`layoutId`), drag-to-reorder, list reordering. Use GSAP for anything scroll-timeline-heavy or SVG-heavy.

### Magnetic button (mouse-follow, desktop-only)
```js
if (window.matchMedia('(pointer: fine)').matches) {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.3;
    const y = (e.clientY - r.top - r.height / 2) * 0.3;
    gsap.to(el, { x, y, duration: 0.3, ease: 'power2.out' });
  });
  el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.4)' }));
}
```

### SVG path draw
```css
.path { stroke-dasharray: var(--len); stroke-dashoffset: var(--len); }
.path.drawn { stroke-dashoffset: 0; transition: stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1); }
```
Compute `--len` from `path.getTotalLength()` in JS and set it as an inline custom property per path.

### Three.js / R3F — only when justified (§4 expensive tier)
```jsx
// Lazy-load the whole 3D bundle so it never blocks first paint
const Hero3D = React.lazy(() => import('./Hero3D'));
// ...
<Suspense fallback={<StaticHeroFallback />}>
  <Hero3D />
</Suspense>
```
Always ship `<StaticHeroFallback />` — a CSS/image version — for slow connections and reduced-motion users.

### Reduced motion, everywhere, once
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
For JS-driven effects (particles, parallax, WebGL) also check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` at init and branch to a static render — the CSS above can't stop a `requestAnimationFrame` loop.

---

## 6. Default Motion System (use when no other spec is given)

This is the calibrated baseline — apply it automatically for "make it feel premium" requests, then layer in one signature moment per §2/§3:

- **Load:** hero content fades up in one staggered sequence (heading → subhead → CTA), 500–900ms total, `power2.out`. No loader unless assets are genuinely heavy.
- **Hero:** one signature move only — usually a split-text reveal on the headline plus a slow mesh-gradient or gently parallaxing image behind it.
- **Nav:** transparent-to-solid on scroll past hero, underline-slide on link hover, fullscreen curtain menu on mobile.
- **Scroll entrances:** fade + translateY(20–40px), 500–700ms, `power2.out`, 80–150ms stagger for grouped items. Reserve scrub/pin for one flagship storytelling section, not every section.
- **Cards:** one consistent hover treatment site-wide (lift + shadow); 3D tilt reserved for a small showcase set, not entire grids.
- **Images:** blur-up lazy load; gentle zoom (400–600ms) on hover, clipped to container.
- **Buttons:** primary CTA = hover lift + magnetic pull (desktop only); secondary = lift or arrow-slide. One pulsing CTA per page, max.
- **Cursor:** custom cursor only for creative/agency/portfolio builds — never utility/finance/checkout.
- **Transitions:** fade for most business sites; curtain/shared-element only for portfolio/agency work where the transition is part of the brand.
- **Mobile:** strip all hover-only effects entirely (don't just disable visually — remove the listeners); keep fade/slide entrances and tap feedback; bottom-sheet for menus/filters; sticky CTA for conversion pages.
- **Default stack:** React + GSAP/ScrollTrigger for scroll work, Lenis for smooth scroll, Motion for state-driven micro-interactions, Three.js/R3F only when a 3D centerpiece is specifically warranted.

---

## 7. Workflow Checklist (run through this before calling an animation task done)

1. Classified the site category and audience (§2) — did the tone match?
2. Counted signature (⭐⭐⭐⭐+) moments per viewport — is it ≤1?
3. Every hover-only effect is pointer-gated and has a mobile-safe equivalent (§3)?
4. `prefers-reduced-motion` fallback exists and was actually tested, not just declared (§5)?
5. Nothing in the expensive tier (§4) ships un-lazy-loaded or without a static fallback?
6. Animated properties are transform/opacity first; anything animating layout-triggering properties has a specific reason?
7. If this is a genuinely new (not-in-the-bible) effect: name it, and note it back to the user in plain language — "I built a scroll-scrubbed chromatic-aberration focus effect on the product shot" — so they know what they're getting and can ask for tweaks.

---

## 8. When to consult `animation-bible.md` directly

Grep it when you need: the exact pre-specced timing/easing for a *named* pattern (e.g. "Card 3D Tilt", "Circle Expansion Transition"), the "Situation → Best Animation" quick-lookup table at its end, or a sanity check on whether an effect you're about to build already has a standard name and spec so you're not reinventing worse. Treat mismatches in your favor: if your generated combination (§1) is better-fitted to this specific project than the closest catalog entry, ship your version — the catalog is a floor, not a ceiling.
