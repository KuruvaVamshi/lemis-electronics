# 100+ Premium Website Animations, Interactions & Motion Effects
### A Practical Visual Playbook for Designing Modern, Premium, High-Converting Websites

> A long-term motion-idea library for hero sections, scroll storytelling, cards, buttons, navigation, loaders, backgrounds, SVG, 3D/WebGL, and business UI — built to be kept beside you while designing client websites.

---

## How to read each entry

Each animation is listed with:

`Name — What it is / looks like / how it works — Best for — Avoid when — Impact — Difficulty — Perf — Device — Tech — Trigger — Duration — Easing`

**Legend**

- Impact: ⭐ Low · ⭐⭐ Medium · ⭐⭐⭐ High · ⭐⭐⭐⭐ Very High · ⭐⭐⭐⭐⭐ Wow/Showcase
- Difficulty: 🟢 Beginner · 🟡 Intermediate · 🟠 Advanced · 🔴 Expert
- Performance cost: 🟢 Very Low · 🟡 Low · 🟠 Medium · 🔴 High

**Core official references used throughout** (verified, do not substitute with random tutorials):

- GSAP — https://gsap.com/docs/
- GSAP ScrollTrigger — https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Motion (Framer Motion) — https://motion.dev/
- Three.js — https://threejs.org/
- Three.js examples — https://threejs.org/examples/
- React Three Fiber — https://r3f.docs.pmnd.rs/
- Lottie / LottieFiles — https://lottiefiles.com/
- Lenis (smooth scroll) — https://lenis.darkroom.engineering/
- MDN Web Animations / CSS Animations — https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API and https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations
- CodePen (search/demo hub) — https://codepen.io/
- Awwwards (showcase/inspiration) — https://www.awwwards.com/
- Codrops (tutorials + demos) — https://tympanus.net/codrops/

Per-animation entries below reference the most relevant of these rather than inventing a unique URL for all 280 variations — several "URLs" you'll see in random round-ups online are dead links; sticking to a small set of primary sources keeps this document reliably up to date.

---

# A. Hero Section Animations

1. **Fade-Up Hero Reveal** — Heading/subhead/CTA fade in while translating up ~20–40px on load, usually staggered. Best for: any hero. Avoid: if LCP text needs to be instantly readable for SEO/accessibility audits. ⭐⭐ 🟢 🟢 Both — CSS/JS/GSAP — Page load — 500–900ms — power2.out.
2. **Split Text Reveal** — Heading is split into lines/words and each piece animates in with a slight offset and stagger. Best for: hero headlines, section titles. Avoid: long paragraphs (feels slow). ⭐⭐⭐ 🟡 🟡 Both — GSAP SplitText / CSS — Page load / scroll — 600–1200ms — power3.out. Ref: https://gsap.com/docs/v3/Plugins/SplitText/
3. **Character-by-Character Reveal** — Each letter fades/slides in individually. Best for: short punchy headlines, logos. Avoid: long text (feels slow, hurts readability). ⭐⭐⭐⭐ 🟠 🟡 Desktop — GSAP SplitText — Load — 800–1500ms — power2.out.
4. **Word-by-Word Reveal** — Words appear sequentially instead of letters — faster to read, still dynamic. Best for: hero + section headings. ⭐⭐⭐ 🟡 🟢 Both — GSAP/CSS — Load/scroll — 500–900ms — power2.out.
5. **Line-by-Line Text Reveal** — Each line of a multi-line heading slides up from behind a mask. Best for: editorial/agency heroes. ⭐⭐⭐⭐ 🟡 🟡 Both — GSAP + clip-path — Load/scroll — 700–1000ms — expo.out.
6. **Typewriter Effect** — Text appears character by character mimicking typing, often with a blinking cursor. Best for: dev portfolios, playful brands. Avoid: overusing on long copy. ⭐⭐ 🟢 🟢 Both — CSS steps()/JS — Load — 1–3s total — linear (steps).
7. **Text Scramble** — Characters randomly cycle through symbols before settling into the real word. Best for: tech/agency hero, hover CTAs. Avoid: accessibility-critical headings without a static fallback. ⭐⭐⭐⭐ 🟠 🟡 Desktop — JS (custom or GSAP) — Load/hover — 600–1200ms — linear then ease-out. Ref: https://codepen.io/
8. **Blur-to-Sharp Reveal** — Text/image starts blurred and comes into focus while fading in. Best for: cinematic, luxury heroes. ⭐⭐⭐ 🟡 🟡 Both — CSS filter/GSAP — Load — 600–1000ms — power2.out.
9. **Masked Text Reveal** — Text is revealed through an animated clip-path/mask sliding away, like a curtain lifting off the words. Best for: premium hero headlines. ⭐⭐⭐⭐ 🟠 🟡 Both — CSS clip-path + GSAP — Load — 700–1100ms — expo.out.
10. **Clip-Path Text Reveal** — Similar to masked reveal but the text itself is clipped and expands into full shape. Best for: bold display type. ⭐⭐⭐ 🟡 🟢 Both — CSS clip-path — Load/scroll — 500–900ms — power3.out.
11. **Hero Image Reveal** — Hero image slides/unmasks into place (e.g., vertical bars wiping open). Best for: photography-led hero. ⭐⭐⭐⭐ 🟡 🟡 Both — GSAP/CSS clip-path — Load — 700–1200ms — expo.out.
12. **Hero Image Zoom** — Background image starts slightly zoomed-in and slowly settles to normal scale (subtle Ken Burns on load). Best for: nearly every hero. ⭐⭐ 🟢 🟢 Both — CSS transform — Load — 4–8s — ease-out.
13. **Hero Image Parallax** — Hero image moves slower than scroll as user scrolls past. Best for: storytelling sites. Avoid: content-heavy pages needing fast scan. ⭐⭐⭐ 🟡 🟡 Both — CSS/GSAP ScrollTrigger — Scroll — scroll-linked — linear.
14. **Floating Hero Elements** — Decorative shapes/icons gently float up/down in an infinite loop, offset in timing. Best for: SaaS, product heroes. Avoid: dense text-heavy heroes. ⭐⭐ 🟢 🟢 Both — CSS keyframes — Load (loop) — 3–6s loop — ease-in-out.
15. **3D Hero Object Rotation** — A 3D model (product, abstract shape) rotates continuously or in response to scroll/mouse. Best for: product launches, tech brands. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js/R3F — Load/scroll/mouse — continuous — linear. Ref: https://threejs.org/examples/
16. **Hero Gradient Movement** — Background gradient colors slowly shift/rotate. Best for: SaaS, modern startup heroes. ⭐⭐ 🟢 🟡 Both — CSS @property/keyframes — Load (loop) — 8–15s loop — ease-in-out.
17. **Animated Mesh Gradient** — Soft organic blobs of color blend and drift, like a living gradient. Best for: premium SaaS/creative heroes. ⭐⭐⭐⭐ 🟠 🟠 Both — Canvas/WebGL/CSS — Load (loop) — continuous — ease-in-out.
18. **Particle Hero Background** — Small dots/particles drift and sometimes connect with lines. Best for: tech, data, network-themed brands. Avoid: content readability suffers with high density. ⭐⭐⭐ 🟠 🟠 Desktop — Canvas/Three.js — Load (loop) — continuous — linear.
19. **Interactive Hero Background** — Background responds to cursor (particles repel/attract, ripples on click). Best for: agency/portfolio wow-factor heroes. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — Canvas/WebGL — Mouse move/click — continuous — ease-out.
20. **Hero Mouse Parallax** — Foreground/background layers shift slightly opposite to mouse movement, adding depth. Best for: product/app heroes. Avoid: mobile (no mouse). ⭐⭐⭐ 🟡 🟡 Desktop — JS/GSAP — Mouse move — real-time — power1.out.

# B. Typography & Text Animations

21. **Letter Spacing Reveal** — Letters start tightly packed and expand to normal tracking as they fade in. Best for: minimal/luxury headings. ⭐⭐ 🟢 🟢 Both — CSS transition — Load/scroll — 500–800ms — ease-out.
22. **Text Tracking Animation** — Letter-spacing subtly increases on hover for emphasis (common on nav/logo). Best for: nav items, small labels. ⭐ 🟢 🟢 Both — CSS transition — Hover — 200–300ms — ease-out.
23. **Text Wave** — Each character animates up/down in a wave pattern, sequentially offset. Best for: playful brand headings. Avoid: corporate/serious tone. ⭐⭐⭐ 🟡 🟢 Both — CSS/GSAP stagger — Load/hover — 800–1400ms — sine.inOut.
24. **Text Bounce** — Letters/words bounce in with elastic overshoot. Best for: playful/product launch copy. ⭐⭐⭐ 🟡 🟢 Both — GSAP/CSS — Load — 600–900ms — back.out/elastic.out.
25. **Text Elastic Reveal** — Text scales from 0 with springy elastic overshoot before settling. Best for: short CTAs, badges. ⭐⭐⭐ 🟡 🟢 Both — Motion/GSAP — Load/click — 500–800ms — elastic.out.
26. **Text Slide-In** — Text slides in horizontally from off-screen. Best for: section headings. ⭐⭐ 🟢 🟢 Both — CSS/GSAP — Scroll — 500–800ms — power2.out.
27. **Text Split-and-Recombine** — Words split apart then reassemble into final position/order. Best for: agency hero showcase moments. ⭐⭐⭐⭐ 🟠 🟡 Desktop — GSAP SplitText/Flip — Load — 900–1400ms — power3.inOut.
28. **Text Morphing** — One word/phrase visually morphs into another (crossfade + shape change). Best for: rotating value propositions. ⭐⭐⭐⭐ 🟠 🟡 Both — GSAP/Motion — Loop/scroll — 500–800ms per swap — power2.inOut.
29. **Text Color Sweep** — A color fill sweeps across text left-to-right, like a highlighter. Best for: emphasis words in headings. ⭐⭐⭐ 🟡 🟡 Both — CSS background-clip + gradient — Scroll/hover — 400–700ms — ease-out.
30. **Gradient Text Animation** — Text fill is an animated moving gradient. Best for: modern SaaS branding accents. ⭐⭐⭐ 🟢 🟡 Both — CSS background-clip: text — Load (loop) — 4–8s loop — linear.
31. **Glitch Text** — Text briefly distorts with RGB channel splitting and jitter. Best for: gaming, streaming, edgy tech brands. Avoid: corporate/finance/health sites. ⭐⭐⭐⭐ 🟠 🟡 Desktop — CSS/JS — Hover/loop — 200–400ms bursts — steps/linear.
32. **Scrambled Text** — Similar to text scramble but used inline for stat labels/nav hover, not just hero. Best for: nav hover states, numbers. ⭐⭐⭐ 🟡 🟢 Both — JS — Hover — 300–600ms — linear.
33. **Rotating Word Animation** — One word in a sentence cycles through a list (e.g., "Design for **startups / agencies / hotels**"). Best for: hero value-prop headlines. ⭐⭐⭐ 🟢 🟢 Both — GSAP/Motion — Load (loop) — 2–3s per word — power2.inOut. Ref: https://motion.dev/
34. **Vertical Word Carousel** — Like a slot machine, words slide vertically to swap. Best for: same use as above with different visual style. ⭐⭐⭐ 🟡 🟢 Both — CSS transform/GSAP — Loop — 400–600ms per swap — power2.inOut.
35. **Text Mask Wipe** — Text reveal via an animated mask wiping diagonally or horizontally across it. Best for: premium section intros. ⭐⭐⭐⭐ 🟠 🟡 Both — CSS clip-path/GSAP — Scroll — 600–1000ms — expo.out.
36. **Underline Draw Animation** — An underline "draws" itself under a heading or link using stroke-dashoffset. Best for: nav links, emphasized words. ⭐⭐ 🟢 🟢 Both — SVG stroke-dashoffset — Hover/scroll — 300–500ms — ease-out.
37. **SVG Text Stroke Animation** — Heading is set as SVG text with stroke drawn on then filled. Best for: showcase/portfolio intros. ⭐⭐⭐⭐ 🟠 🟡 Both — SVG + GSAP DrawSVG — Load — 1–2s — power2.inOut. Ref: https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/
38. **Text Distortion** — Text warps/liquifies on hover using displacement mapping. Best for: experimental agency sites. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — WebGL/SVG filters — Hover — real-time — ease-out.
39. **Text Hover Magnetic Effect** — Individual letters shift slightly toward the cursor as it passes over the word. Best for: playful headings, footers. ⭐⭐⭐ 🟠 🟡 Desktop — JS — Mouse move — real-time — power2.out.
40. **Kinetic Typography** — Multiple text elements move in choreographed sequence (scale, rotate, translate together) to tell a short story. Best for: about/manifesto sections. ⭐⭐⭐⭐ 🟠 🟠 Desktop — GSAP timeline — Scroll/load — 2–5s sequence — mixed easings.

# C. Scroll-Based Animations

41. **Scroll Fade-In** — Elements fade from 0 to 1 opacity as they enter the viewport. Best for: everywhere, safest default. ⭐ 🟢 🟢 Both — Intersection Observer/CSS — Viewport entry — 400–600ms — ease-out.
42. **Scroll Slide-Up** — Fade combined with translateY(20–40px) on entry. Best for: cards, paragraphs, list items. ⭐⭐ 🟢 🟢 Both — CSS/GSAP ScrollTrigger — Viewport entry — 500–700ms — power2.out.
43. **Scroll Slide-Left** — Element enters from the right, sliding left into place. Best for: alternating content blocks. ⭐⭐ 🟢 🟢 Both — CSS/GSAP — Viewport entry — 500–700ms — power2.out.
44. **Scroll Slide-Right** — Mirror of above, entering from the left. Best for: alternating content blocks. ⭐⭐ 🟢 🟢 Both — CSS/GSAP — Viewport entry — 500–700ms — power2.out.
45. **Staggered Scroll Reveal** — Group of elements (cards, list items) animate in one after another with a small delay between each. Best for: grids, feature lists, pricing cards. ⭐⭐⭐ 🟡 🟡 Both — GSAP stagger — Viewport entry — 400–600ms each, 80–150ms stagger — power2.out.
46. **Scroll Scale-Up** — Element scales from ~0.9 to 1 while fading in. Best for: images, cards. ⭐⭐ 🟢 🟢 Both — CSS/GSAP — Viewport entry — 500–700ms — power2.out.
47. **Scroll Scale-Down** — Element starts larger than final size and settles down — good for hero-to-content transitions. Best for: transitional sections. ⭐⭐⭐ 🟡 🟡 Both — GSAP ScrollTrigger — Scroll — scrub — linear.
48. **Scroll Blur Reveal** — Element sharpens from blurred as it scrolls into place. Best for: photography/cinematic sections. ⭐⭐⭐ 🟡 🟡 Both — CSS filter + GSAP — Viewport entry — 500–800ms — power2.out.
49. **Scroll Rotation** — Element slightly rotates into alignment (e.g., from -5° to 0°) as it enters. Best for: editorial layouts, image cards. ⭐⭐ 🟡 🟡 Both — CSS/GSAP — Viewport entry — 500–700ms — power2.out.
50. **Scroll Parallax** — Background/foreground move at different speeds while scrolling. Best for: hero backgrounds, decorative shapes. ⭐⭐⭐ 🟡 🟡 Both — GSAP ScrollTrigger/CSS — Scroll — scroll-linked — linear. Ref: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
51. **Multi-Layer Parallax** — Multiple layers (sky, mountains, foreground) each scroll at distinct speeds for depth. Best for: storytelling/landing sections. Avoid: heavy mobile use (perf/jank). ⭐⭐⭐⭐ 🟠 🟠 Desktop — GSAP ScrollTrigger — Scroll — scroll-linked — linear.
52. **Scroll-Driven Image Zoom** — Image scales up/down tied directly to scroll position. Best for: hero-to-section transitions. ⭐⭐⭐ 🟡 🟡 Both — GSAP ScrollTrigger scrub — Scroll — scrub — linear.
53. **Scroll Image Reveal** — Image mask expands to reveal full image as user scrolls. Best for: portfolio/product intros. ⭐⭐⭐⭐ 🟠 🟡 Both — GSAP + clip-path — Scroll — scrub — linear.
54. **Scroll Image Wipe** — One image wipes away to reveal the next as you scroll (before/after style). Best for: transformation/case-study sections. ⭐⭐⭐⭐ 🟠 🟡 Both — GSAP ScrollTrigger — Scroll — scrub — linear.
55. **Scroll Clip-Path Reveal** — A shape (circle, polygon) expands via clip-path to reveal content underneath. Best for: dramatic section reveals. ⭐⭐⭐⭐ 🟠 🟡 Both — CSS clip-path + GSAP — Scroll — scrub — linear.
56. **Scroll Progress Animation** — A bar or line fills to show how far the user has scrolled down the page/article. Best for: blog posts, long-form pages. ⭐⭐ 🟢 🟢 Both — CSS/JS — Scroll — real-time — linear.
57. **Scroll-Scrub Animation** — Any animation whose timeline is directly tied to scroll position rather than time (play forward/backward as user scrolls). Best for: storytelling sections, product reveals. ⭐⭐⭐⭐ 🟠 🟠 Desktop — GSAP ScrollTrigger scrub — Scroll — scrub — linear.
58. **Pinned Section Animation** — Section "sticks" in the viewport while inner content animates before releasing scroll. Best for: step-by-step explainers, product feature walkthroughs. Avoid: overusing — disorients users if pinned too long. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — GSAP ScrollTrigger pin — Scroll — scrub — linear.
59. **Horizontal Scroll Section** — Vertical scroll is translated into horizontal movement of a panel/gallery. Best for: portfolio galleries, timelines. Avoid: mobile without careful touch handling. ⭐⭐⭐⭐ 🟠 🟠 Desktop — GSAP ScrollTrigger — Scroll — scrub — linear.
60. **Horizontal Portfolio Gallery** — A dedicated horizontal-scroll case-study/portfolio strip, often pinned. Best for: agency/portfolio work sections. ⭐⭐⭐⭐ 🟠 🟠 Desktop — GSAP ScrollTrigger — Scroll — scrub — linear.
61. **Scroll-Synced Typography** — Heading size/weight/color changes progressively as user scrolls through a section. Best for: manifesto/about sections. ⭐⭐⭐ 🟡 🟡 Both — GSAP ScrollTrigger scrub — Scroll — scrub — linear.
62. **Scroll-Synced Video** — Video's playhead is scrubbed by scroll position instead of playing automatically. Best for: product demo reveals. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — Canvas frame sequence + GSAP — Scroll — scrub — linear.
63. **Scroll-Synced 3D Object** — 3D model rotates/moves based on scroll progress. Best for: product showcase (shoes, devices, cars). ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js + GSAP ScrollTrigger — Scroll — scrub — linear.
64. **Scroll-Based Color Transition** — Page/section background color shifts as different sections scroll into view. Best for: multi-section storytelling pages. ⭐⭐⭐ 🟡 🟡 Both — GSAP ScrollTrigger — Scroll — scrub — linear.
65. **Scroll-Based Shape Morphing** — An SVG/blob shape morphs between states as user scrolls. Best for: decorative background elements. ⭐⭐⭐ 🟠 🟡 Both — SVG morph + GSAP — Scroll — scrub — linear.
66. **Scroll-Based Background Change** — Full background image/illustration swaps as sections change. Best for: narrative landing pages. ⭐⭐⭐ 🟡 🟡 Both — GSAP ScrollTrigger — Scroll — scrub — linear.
67. **Scroll-Based Number Counter** — Numbers count up from 0 to target value once stat section enters viewport. Best for: stats/metrics sections. ⭐⭐⭐ 🟢 🟢 Both — GSAP/JS + Intersection Observer — Viewport entry — 1–2s — power1.out.
68. **Scroll-Based Timeline** — A vertical/horizontal line draws itself and milestones populate as user scrolls. Best for: company history, roadmap. ⭐⭐⭐⭐ 🟠 🟡 Both — SVG + GSAP ScrollTrigger — Scroll — scrub — linear.
69. **Scroll-Based Card Stacking** — Cards stack on top of one another as you scroll, each pinning briefly before the next covers it. Best for: feature/testimonial storytelling. ⭐⭐⭐⭐ 🟠 🟠 Desktop — GSAP ScrollTrigger pin — Scroll — scrub — linear.
70. **Scroll-Based Card Rotation** — Cards rotate slightly in/out of view as they stack or pass. Best for: same as above, extra flair. ⭐⭐⭐ 🟠 🟡 Desktop — GSAP ScrollTrigger — Scroll — scrub — linear.

# D. Card & Component Hover Effects

71. **Card Hover Lift** — Card rises slightly with an enhanced shadow on hover. Best for: pricing/feature/blog cards. ⭐⭐ 🟢 🟢 Both — CSS transition — Hover — 200–300ms — ease-out.
72. **Card 3D Tilt** — Card tilts in 3D based on cursor position within it (perspective transform). Best for: product/feature cards, portfolio thumbnails. ⭐⭐⭐⭐ 🟡 🟡 Desktop — JS (vanilla-tilt/GSAP) — Mouse move — real-time — power1.out.
73. **Card Perspective Tilt** — Stronger version of 3D tilt with deeper perspective and layered inner elements (icon floats above card plane). Best for: showcase feature cards. ⭐⭐⭐⭐ 🟠 🟡 Desktop — JS + CSS 3D — Mouse move — real-time — power1.out.
74. **Card Magnetic Movement** — Whole card subtly shifts toward the cursor as it approaches. Best for: CTA cards, pricing highlight. ⭐⭐⭐ 🟠 🟡 Desktop — JS — Mouse move — real-time — power2.out.
75. **Card Glow Follow** — A soft light/gradient glow follows the cursor across the card surface. Best for: dark-mode SaaS cards. ⭐⭐⭐⭐ 🟠 🟡 Desktop — CSS radial-gradient + JS — Mouse move — real-time — instant.
76. **Card Border Animation** — Border color/gradient animates around the card edge on hover. Best for: pricing cards, CTA cards. ⭐⭐ 🟢 🟢 Both — CSS border-image/conic-gradient — Hover — 300–500ms — ease-out.
77. **Animated Gradient Border** — Continuously rotating gradient border (conic-gradient spin) framing a card. Best for: highlighted/"most popular" pricing card. ⭐⭐⭐ 🟡 🟡 Both — CSS conic-gradient + @property — Load (loop) — 3–6s loop — linear.
78. **Card Image Zoom** — Image inside card scales up slightly on hover, clipped by card bounds. Best for: blog/portfolio/product cards. ⭐⭐ 🟢 🟢 Both — CSS transform + overflow hidden — Hover — 400–600ms — ease-out.
79. **Card Image Pan** — Image inside card pans horizontally on hover instead of zooming. Best for: wide product photography cards. ⭐⭐ 🟢 🟢 Both — CSS transform — Hover — 500–800ms — ease-out.
80. **Card Flip** — Card rotates 180° on Y-axis to reveal back content. Best for: team member cards, feature/benefit pairs. ⭐⭐⭐ 🟡 🟡 Both — CSS 3D transform — Hover/click — 500–700ms — ease-in-out.
81. **Card Expand** — Card grows in place to reveal more content, pushing siblings aside. Best for: FAQ-like card grids, service categories. ⭐⭐⭐ 🟡 🟡 Both — CSS grid transition/JS — Click — 400–600ms — power2.out.
82. **Card Morph** — Card smoothly transitions shape/position into a detail view (shared element style). Best for: portfolio → case-study transitions. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — GSAP Flip/Motion layout — Click — 500–800ms — power3.inOut. Ref: https://gsap.com/docs/v3/Plugins/Flip/
83. **Card Stack Animation** — A deck of cards fans out or the top card animates away to reveal the next (like a swipeable stack). Best for: testimonials, feature highlights. ⭐⭐⭐⭐ 🟠 🟡 Both — GSAP/Motion — Click/swipe — 400–600ms — power2.out.
84. **Card Swap** — Two cards animate swapping positions smoothly. Best for: comparison sections. ⭐⭐⭐ 🟡 🟡 Both — GSAP Flip — Click — 400–600ms — power2.inOut.
85. **Card Slide Reveal** — Overlay panel slides away/down to reveal card content underneath on hover. Best for: portfolio thumbnails. ⭐⭐⭐ 🟡 🟡 Both — CSS transform — Hover — 300–500ms — power2.out.
86. **Card Content Reveal** — Secondary content (description, CTA) slides/fades up from the bottom on hover. Best for: product/feature cards. ⭐⭐ 🟢 🟢 Both — CSS transition — Hover — 250–400ms — ease-out.
87. **Card Overlay Reveal** — A color/gradient overlay fades over the image on hover, with text appearing on top. Best for: image-heavy grids (portfolio, gallery). ⭐⭐ 🟢 🟢 Both — CSS transition — Hover — 250–400ms — ease-out.
88. **Spotlight Card** — Card darkens except for a spotlight circle that follows the cursor, highlighting content beneath. Best for: dark-themed feature grids. ⭐⭐⭐⭐ 🟠 🟡 Desktop — CSS mask + JS — Mouse move — real-time — instant.
89. **Glass Card Motion** — Frosted-glass (backdrop-blur) card subtly shifts/brightens on hover, reinforcing translucency. Best for: modern glassmorphism UI. ⭐⭐⭐ 🟡 🟡 Both — CSS backdrop-filter + transition — Hover — 250–400ms — ease-out.
90. **Liquid Card Hover** — Card border/background ripples like liquid when hovered or clicked (SVG/WebGL distortion). Best for: experimental creative sites. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — WebGL/SVG filter — Hover — real-time — ease-out.

# E. Button & CTA Animations

91. **Button Hover Lift** — Button rises with shadow increase on hover. Best for: all primary CTAs. ⭐ 🟢 🟢 Both — CSS transition — Hover — 150–250ms — ease-out.
92. **Button Magnetic Effect** — Button shifts toward cursor as it nears, snapping back on leave. Best for: hero/primary CTA. ⭐⭐⭐⭐ 🟡 🟡 Desktop — JS — Mouse move — real-time — power2.out.
93. **Button Ripple** — A circular ripple expands from click point (Material-style). Best for: form submit, app-like UI. ⭐⭐ 🟢 🟢 Both — CSS/JS — Click — 400–600ms — ease-out.
94. **Button Glow** — Soft glow/shadow pulses or intensifies on hover. Best for: dark-mode CTAs. ⭐⭐ 🟢 🟢 Both — CSS box-shadow transition — Hover — 250–400ms — ease-out.
95. **Button Shine** — A diagonal light streak sweeps across the button on hover. Best for: premium product CTAs. ⭐⭐⭐ 🟢 🟢 Both — CSS gradient + transform — Hover — 500–700ms — ease-out.
96. **Button Gradient Flow** — Background gradient continuously animates/shifts within the button. Best for: SaaS primary CTA. ⭐⭐⭐ 🟢 🟡 Both — CSS background-position keyframes — Load (loop)/hover — 3–5s loop — linear.
97. **Button Arrow Slide** — Arrow icon slides further right (or in) on hover to suggest forward motion. Best for: "Learn more"/"Get started" links. ⭐⭐ 🟢 🟢 Both — CSS transform — Hover — 200–300ms — ease-out.
98. **Button Icon Rotation** — Icon inside button rotates (e.g., arrow 45°, download bounce) on hover. Best for: secondary CTAs, icon buttons. ⭐⭐ 🟢 🟢 Both — CSS transform — Hover — 200–300ms — ease-out.
99. **Button Text Swap** — Button label swaps to a second string/icon on hover via vertical/horizontal slide. Best for: playful CTAs. ⭐⭐⭐ 🟡 🟢 Both — CSS transform + overflow hidden — Hover — 250–350ms — power2.out.
100. **Button Border Draw** — Border appears to "draw" itself around the button outline on hover. Best for: outline/secondary buttons. ⭐⭐⭐ 🟡 🟡 Both — SVG stroke-dashoffset — Hover — 300–500ms — ease-out.
101. **Button Fill Animation** — Background color fills in from one edge (left-to-right or center-out) on hover. Best for: outline buttons turning solid. ⭐⭐ 🟢 🟢 Both — CSS transform scale/pseudo-element — Hover — 250–400ms — power2.out.
102. **Button Liquid Fill** — Fill animates with a wavy/liquid edge instead of a straight line. Best for: playful/creative brand CTAs. ⭐⭐⭐⭐ 🟠 🟡 Desktop — SVG filter/Canvas — Hover — 400–600ms — ease-out.
103. **Button Cursor Attraction** — Combines magnetic movement with scale-up as cursor nears (stronger version of #92). Best for: showcase hero CTA. ⭐⭐⭐⭐ 🟠 🟡 Desktop — JS — Mouse move — real-time — power2.out.
104. **CTA Pulse** — Subtle recurring scale/glow pulse draws attention to a single key CTA. Best for: one CTA per page max (e.g., "Book a demo"). Avoid: multiple pulsing elements at once. ⭐⭐ 🟢 🟢 Both — CSS keyframes — Load (loop) — 1.5–2.5s loop — ease-in-out.
105. **CTA Floating Effect** — Sticky/floating CTA button gently bobs to stay noticeable without being static. Best for: mobile sticky CTAs, chat buttons. ⭐⭐ 🟢 🟢 Both — CSS keyframes — Load (loop) — 2–4s loop — ease-in-out.

# F. Navigation & Menu Animations

106. **Animated Hamburger Menu** — Hamburger icon morphs into an X (and back) with rotating/sliding lines. Best for: all mobile nav triggers. ⭐⭐ 🟢 🟢 Both — CSS transform — Click — 250–400ms — ease-in-out.
107. **Fullscreen Menu Reveal** — Clicking menu opens a fullscreen overlay with large nav links. Best for: portfolio/agency sites. ⭐⭐⭐⭐ 🟡 🟡 Both — CSS/GSAP — Click — 400–600ms — power3.out.
108. **Menu Curtain Reveal** — Fullscreen menu reveals via a curtain-like panel wipe (often diagonal or split panels). Best for: premium agency nav. ⭐⭐⭐⭐⭐ 🟠 🟡 Both — GSAP clip-path — Click — 500–800ms — power3.inOut.
109. **Menu Stagger Reveal** — Nav links animate in one-by-one after the menu panel opens. Best for: fullscreen menus. ⭐⭐⭐ 🟡 🟢 Both — GSAP stagger — Click — 300–500ms total — power2.out.
110. **Navigation Underline Slide** — Underline slides smoothly between nav items as user hovers across them. Best for: standard top nav. ⭐⭐ 🟢 🟢 Both — CSS transform/JS — Hover — 200–300ms — ease-out.
111. **Active Navigation Indicator** — A pill/underline animates to the currently active section as user scrolls (scrollspy). Best for: single-page sites with anchor nav. ⭐⭐⭐ 🟡 🟢 Both — JS + Intersection Observer — Scroll — 200–300ms — ease-out.
112. **Magnetic Navigation Links** — Nav links shift slightly toward the cursor, similar to magnetic buttons. Best for: creative/agency nav. ⭐⭐⭐ 🟠 🟡 Desktop — JS — Mouse move — real-time — power2.out.
113. **Floating Navigation Bar** — Navbar detaches from the top edge with rounded corners and margin once scrolled. Best for: modern SaaS/product sites. ⭐⭐⭐ 🟢 🟢 Both — CSS/JS scroll listener — Scroll — 300–400ms — ease-out.
114. **Shrinking Navbar on Scroll** — Navbar height/logo size reduces as user scrolls down. Best for: content-heavy sites needing more viewport. ⭐⭐ 🟢 🟢 Both — CSS/JS — Scroll — 250–350ms — ease-out.
115. **Transparent-to-Solid Navbar** — Navbar starts transparent over hero, becomes solid background after scrolling past hero. Best for: image/video hero pages. ⭐⭐ 🟢 🟢 Both — JS scroll listener — Scroll — 250–350ms — ease-out.
116. **Navbar Blur Transition** — Navbar background gains backdrop-blur as it becomes sticky. Best for: glassmorphism-style sites. ⭐⭐ 🟢 🟡 Both — CSS backdrop-filter — Scroll — 250–350ms — ease-out.
117. **Logo Morph Animation** — Logo shifts shape/size or icon-only compresses as navbar shrinks. Best for: branding-forward sites. ⭐⭐⭐ 🟡 🟡 Both — CSS/GSAP — Scroll — 300–400ms — power2.out.
118. **Mega Menu Reveal** — Dropdown mega-menu expands with fade + slide, revealing columns of links/images. Best for: enterprise/e-commerce nav. ⭐⭐⭐ 🟡 🟢 Both — CSS/JS — Hover/click — 250–400ms — ease-out.
119. **Mobile Menu Slide-In** — Off-canvas menu slides in from the side over/under the page content. Best for: standard mobile nav pattern. ⭐⭐ 🟢 🟢 Mobile — CSS transform — Click — 300–400ms — power2.out.

# G. Cursor & Mouse Interactions

120. **Custom Cursor** — Default cursor replaced with a styled dot/ring that follows the mouse. Best for: creative/agency sites establishing identity. Avoid: utility/finance/accessibility-first sites. ⭐⭐⭐ 🟡 🟢 Desktop — JS + CSS transform — Mouse move — real-time — power1.out.
121. **Cursor Trail** — A trail of fading dots/shapes follows the cursor's recent path. Best for: experimental/art-directed sites. ⭐⭐⭐⭐ 🟠 🟡 Desktop — Canvas/JS — Mouse move — real-time — ease-out.
122. **Cursor Glow** — Soft radial glow follows the cursor, often used over dark backgrounds. Best for: dark hero sections. ⭐⭐⭐ 🟡 🟡 Desktop — CSS radial-gradient + JS — Mouse move — real-time — instant.
123. **Cursor Spotlight** — Larger spotlight reveals/brightens content underneath as it moves (like #88 but page-wide). Best for: dark, moody landing pages. ⭐⭐⭐⭐ 🟠 🟡 Desktop — CSS mask + JS — Mouse move — real-time — instant.
124. **Cursor Magnetic Effect** — Cursor itself (not the element) gets pulled toward interactive targets. Best for: showcase interactive elements. ⭐⭐⭐ 🟠 🟡 Desktop — JS — Mouse move — real-time — power2.out.
125. **Cursor Blob** — Cursor is rendered as an organic blob that squishes/stretches with movement speed. Best for: playful/creative brand identity. ⭐⭐⭐⭐ 🟠 🟠 Desktop — SVG/Canvas + JS — Mouse move — real-time — elastic.out.
126. **Cursor Image Preview** — Hovering a link/thumbnail shows a floating image preview following the cursor. Best for: portfolio/blog link lists. ⭐⭐⭐⭐ 🟡 🟡 Desktop — JS — Hover — real-time — power1.out.
127. **Cursor Text Label** — Cursor grows into a small label ("View", "Drag", "Play") near interactive elements. Best for: draggable galleries, video thumbnails. ⭐⭐⭐ 🟡 🟢 Desktop — JS + CSS — Hover — 150–250ms — ease-out.
128. **Cursor Shape Morph** — Custom cursor changes shape/size depending on what it's hovering (link vs image vs button). Best for: agency portfolios. ⭐⭐⭐ 🟡 🟢 Desktop — JS + CSS transform — Hover — 200–300ms — power2.out.
129. **Cursor Scale-on-Hover** — Cursor simply scales up over clickable elements. Best for: any custom-cursor site (simplest variant). ⭐⭐ 🟢 🟢 Desktop — CSS transform — Hover — 150–250ms — ease-out.
130. **Cursor Blend Mode** — Cursor uses `mix-blend-mode: difference` to invert colors beneath it. Best for: bold, high-contrast art-directed sites. ⭐⭐⭐⭐ 🟡 🟢 Desktop — CSS mix-blend-mode — Mouse move — real-time — instant.
131. **Cursor Distortion** — Elements near the cursor visually distort/ripple (WebGL displacement). Best for: award-show/experimental sites. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — WebGL shader — Mouse move — real-time — ease-out.
132. **Cursor-Following Gradient** — A gradient background layer shifts its origin to follow the cursor. Best for: hero sections. ⭐⭐⭐ 🟡 🟡 Desktop — CSS radial-gradient + JS — Mouse move — real-time — instant.
133. **Cursor-Following Image** — A small image/thumbnail is pinned to the cursor and swaps per hovered item (portfolio preview variant). Best for: case-study lists. ⭐⭐⭐⭐ 🟡 🟡 Desktop — JS — Hover — real-time — power1.out.
134. **Cursor-Following 3D Object** — A 3D element subtly rotates/tracks the cursor position across the viewport. Best for: 3D product heroes. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — Three.js — Mouse move — real-time — power1.out.

# H. Image & Gallery Animations

135. **Ken Burns Effect** — Slow continuous pan + zoom on a static image. Best for: hero backgrounds, slideshows. ⭐⭐ 🟢 🟢 Both — CSS keyframes — Load (loop) — 8–15s — linear.
136. **Image Crossfade** — One image fades into another in place. Best for: slideshow/before-after. ⭐⭐ 🟢 🟢 Both — CSS/JS — Loop/interaction — 600–1000ms — ease-in-out.
137. **Image Wipe** — New image wipes in over the old one (directional reveal). Best for: case-study transitions. ⭐⭐⭐ 🟡 🟢 Both — CSS clip-path/GSAP — Click/scroll — 500–800ms — power2.inOut.
138. **Image Curtain Reveal** — Two panels slide apart like curtains to reveal the image beneath. Best for: portfolio project intros. ⭐⭐⭐⭐ 🟡 🟡 Both — CSS/GSAP — Load/scroll — 700–1000ms — expo.out.
139. **Image Clip-Path Reveal** — Image scales/reveals from a shape (circle, polygon) into full rectangle. Best for: hero and section images. ⭐⭐⭐ 🟡 🟡 Both — CSS clip-path — Scroll — 600–900ms — power3.out.
140. **Image Parallax** — Image within its container moves at a different rate than the page scroll. Best for: content sections with imagery. ⭐⭐⭐ 🟡 🟡 Both — GSAP ScrollTrigger — Scroll — scrub — linear.
141. **Image Distortion** — Image warps/ripples on hover or scroll using displacement shaders. Best for: experimental portfolio galleries. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — WebGL (e.g., PixiJS/Three.js) — Hover/scroll — real-time — ease-out.
142. **Image Liquid Transition** — Gallery transitions between images with a liquid distortion wipe. Best for: award-style portfolio galleries. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — WebGL shader — Click/scroll — 600–1000ms — power2.inOut.
143. **Image Morph** — One image visually morphs into another (shape + content blend) rather than simple crossfade. Best for: product variant switchers. ⭐⭐⭐⭐ 🔴 🟠 Desktop — WebGL/Canvas — Click — 500–900ms — power2.inOut.
144. **Image Hover Zoom** — Standalone image (not in a card) scales up slightly on hover with overflow clipped by parent. Best for: gallery grids. ⭐⭐ 🟢 🟢 Both — CSS transform — Hover — 400–600ms — ease-out.
145. **Image Hover Pan** — Image pans within a fixed frame on hover instead of zooming. Best for: wide landscape/product shots. ⭐⭐ 🟢 🟢 Both — CSS transform — Hover — 500–800ms — ease-out.
146. **Image Before/After Slider** — Draggable handle reveals "before" vs "after" image beneath a clipped overlay. Best for: renovation, fitness, restoration case studies. ⭐⭐⭐⭐ 🟡 🟢 Both — JS + clip-path — Drag/touch — real-time — linear.
147. **Image Horizontal Drag Gallery** — User drags to scroll a horizontal image strip (with momentum). Best for: portfolio/photography galleries. ⭐⭐⭐ 🟡 🟡 Both — JS (Lenis/native)/GSAP Draggable — Drag/touch — real-time — ease-out (momentum). Ref: https://gsap.com/docs/v3/Plugins/Draggable/
148. **Image Stack Carousel** — Images are stacked with slight offset and cycle by animating the front image away. Best for: testimonial/portfolio highlight. ⭐⭐⭐ 🟡 🟡 Both — GSAP/Motion — Click/auto — 400–600ms — power2.inOut.
149. **Image Coverflow** — Carousel where the center image is largest/sharp and side images shrink and tilt (Apple-style coverflow). Best for: product/app showcases. ⭐⭐⭐⭐ 🟠 🟡 Both — CSS 3D transform/Swiper — Drag/click — 400–600ms — power2.out.
150. **Fullscreen Gallery Transition** — Clicking a thumbnail expands it into a fullscreen lightbox with a shared-element zoom. Best for: portfolio/photography sites. ⭐⭐⭐⭐ 🟠 🟡 Both — GSAP Flip — Click — 400–700ms — power3.inOut.
151. **Magnetic Image Gallery** — Gallery thumbnails shift toward the cursor slightly as it passes over the grid. Best for: creative agency galleries. ⭐⭐⭐ 🟠 🟡 Desktop — JS — Mouse move — real-time — power2.out.
152. **Hover Image Preview** — Hovering a text link (e.g., project name in a list) shows the related image floating near the cursor. Best for: text-led project/case-study lists. ⭐⭐⭐⭐ 🟡 🟡 Desktop — JS — Hover — real-time — power1.out.
153. **Image Trail Effect** — A trail of images appears following the cursor path as it moves across a section. Best for: experimental/creative hero sections. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — JS/Canvas — Mouse move — real-time — ease-out.
154. **Image Fragment Transition** — Image breaks into tiles/fragments that animate out before revealing the next image. Best for: award-style transitions. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — GSAP/Three.js — Click/scroll — 600–1000ms — power2.inOut.

# I. Page Transitions

155. **Fade Page Transition** — Old page fades out, new page fades in. Best for: any site needing a simple, safe transition. ⭐⭐ 🟢 🟢 Both — CSS/JS router transition — Navigation — 300–500ms — ease-in-out.
156. **Slide Page Transition** — New page slides in over the old one (direction can imply navigation hierarchy). Best for: multi-step flows, app-like sites. ⭐⭐⭐ 🟡 🟡 Both — GSAP/Motion — Navigation — 400–600ms — power2.inOut.
157. **Curtain Transition** — A solid panel wipes across the screen, hiding the swap, then wipes away. Best for: portfolio/agency site navigation. ⭐⭐⭐⭐ 🟠 🟡 Both — GSAP — Navigation — 600–900ms — power3.inOut.
158. **Circle Expansion Transition** — A circle expands from the clicked point to cover the screen before revealing the new page. Best for: creative portfolio nav. ⭐⭐⭐⭐ 🟠 🟡 Desktop — CSS clip-path/GSAP — Navigation — 500–800ms — power3.inOut.
159. **Circle Collapse Transition** — Reverse of above — a circle shrinks to reveal the new page. Best for: same context, alternate feel. ⭐⭐⭐⭐ 🟠 🟡 Desktop — CSS clip-path/GSAP — Navigation — 500–800ms — power3.inOut.
160. **Liquid Page Transition** — Wipe uses an organic liquid-shaped edge instead of a straight line/circle. Best for: experimental/award-style sites. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — SVG filter/WebGL — Navigation — 600–1000ms — power2.inOut.
161. **Morphing Page Transition** — A clicked element (image/card) visually morphs and expands into the new page's hero. Best for: portfolio → project page. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — GSAP Flip/Motion layout — Navigation — 500–800ms — power3.inOut.
162. **Shared Element Transition** — Common UI element (logo, thumbnail) persists visually across the page change instead of reloading. Best for: e-commerce product → detail page. ⭐⭐⭐⭐ 🟠 🟠 Both — Motion layout animations/GSAP Flip — Navigation — 400–600ms — power2.inOut.
163. **Image-to-Page Transition** — Clicked thumbnail scales to fill the viewport, becoming the new page's hero image. Best for: portfolio case studies. ⭐⭐⭐⭐ 🟠 🟠 Desktop — GSAP Flip — Navigation — 500–800ms — power3.inOut.
164. **Text-to-Page Transition** — Clicked heading/link scales and repositions to become the new page's title. Best for: editorial/blog transitions. ⭐⭐⭐ 🟠 🟡 Desktop — GSAP Flip — Navigation — 400–600ms — power2.inOut.
165. **Loading-to-Page Reveal** — Brief loader animation plays, then dissolves/wipes to reveal the fully-rendered new page. Best for: first page load only (avoid on every internal nav). ⭐⭐⭐ 🟡 🟢 Both — CSS/JS — Page load — 800–1500ms — ease-out.

# J. Loading Animations

166. **Minimal Spinner** — Simple rotating ring/arc. Best for: buttons, async form actions. ⭐ 🟢 🟢 Both — CSS keyframes — Loading state — loop — linear.
167. **Progress Bar Loader** — Horizontal bar fills toward 100%. Best for: page loads, file uploads. ⭐⭐ 🟢 🟢 Both — CSS/JS — Loading — variable — ease-out.
168. **Percentage Counter Loader** — Numeric 0–100% counts up alongside a bar/spinner. Best for: heavy asset preload (3D/WebGL sites). ⭐⭐⭐ 🟡 🟢 Both — JS — Loading — variable — linear.
169. **Logo Reveal Loader** — Brand logo draws/fades in as the loading indicator itself. Best for: branding-forward first-load experience. ⭐⭐⭐ 🟡 🟢 Both — SVG/GSAP — Page load — 1–2s — power2.out.
170. **Logo Morph Loader** — Logo animates through a subtle shape transformation while loading. Best for: premium brand sites. ⭐⭐⭐⭐ 🟠 🟡 Both — SVG morph/GSAP — Page load — 1–2s — power2.inOut.
171. **SVG Line Loader** — A line/path draws itself repeatedly as a loading indicator. Best for: minimal/editorial brands. ⭐⭐ 🟢 🟢 Both — SVG stroke-dashoffset — Loading — loop — linear.
172. **Circular Progress Loader** — Ring that fills clockwise to indicate progress (with or without percentage). Best for: uploads, multi-step forms. ⭐⭐ 🟢 🟢 Both — SVG/CSS — Loading — variable — ease-out.
173. **Particle Loader** — Particles assemble into a shape/logo while loading. Best for: 3D/creative-heavy showcase sites. ⭐⭐⭐⭐ 🟠 🟠 Desktop — Canvas/Three.js — Page load — 1–2s — ease-out.
174. **Wave Loader** — Bars/dots animate in a wave pattern to indicate activity. Best for: chat/voice/audio product loaders. ⭐⭐ 🟢 🟢 Both — CSS keyframes — Loading — loop — ease-in-out.
175. **Text Loading Animation** — Loading label's letters pulse/cycle opacity in sequence ("Loading..."). Best for: minimal text-only loaders. ⭐ 🟢 🟢 Both — CSS keyframes — Loading — loop — ease-in-out.
176. **Skeleton Shimmer** — Gray placeholder blocks with a moving shimmer highlight, standing in for unloaded content. Best for: content-heavy pages, dashboards, cards awaiting data. ⭐⭐ 🟢 🟢 Both — CSS gradient keyframes — Loading — loop — linear.
177. **Image Loading Reveal** — Blurred low-res placeholder sharpens into the full image once loaded (LQIP). Best for: image-heavy galleries/blogs. ⭐⭐ 🟢 🟢 Both — CSS filter transition — Load — 400–600ms — ease-out.

# K. Background Animations

178. **Animated Gradient** — Simple two/three color gradient shifts position continuously. Best for: SaaS hero backgrounds. ⭐⭐ 🟢 🟡 Both — CSS keyframes — Loop — 8–15s — linear.
179. **Mesh Gradient** — Multiple soft color blobs blended together, slowly drifting (see #17). Best for: modern SaaS/creative brand backgrounds. ⭐⭐⭐⭐ 🟠 🟠 Both — Canvas/WebGL/CSS — Loop — continuous — ease-in-out.
180. **Aurora Background** — Flowing, translucent ribbon-like color bands reminiscent of aurora borealis. Best for: premium dark-mode SaaS. ⭐⭐⭐⭐ 🟠 🟠 Desktop — Canvas/WebGL shader — Loop — continuous — ease-in-out.
181. **Floating Blobs** — Soft blurred organic shapes drift and slowly change position/size. Best for: decorative section backgrounds. ⭐⭐ 🟢 🟡 Both — CSS keyframes — Loop — 6–12s — ease-in-out.
182. **Liquid Blobs** — Blobs actually morph shape (not just move) using SVG/Canvas. Best for: playful brand identity backgrounds. ⭐⭐⭐⭐ 🟠 🟠 Both — SVG morph/Canvas — Loop — continuous — ease-in-out.
183. **Particle Field** — Evenly distributed particles drift slowly across the background. Best for: tech/data brand backgrounds. ⭐⭐⭐ 🟠 🟠 Desktop — Canvas/Three.js — Loop — continuous — linear.
184. **Star Field** — Small dots simulate distant stars with slow drift/twinkle. Best for: dark, space/futuristic themed sites. ⭐⭐ 🟡 🟡 Both — CSS/Canvas — Loop — continuous — linear.
185. **Noise/Grain Motion** — Subtle animated film-grain texture overlays the background for a cinematic, premium feel. Best for: luxury/editorial brand backgrounds. ⭐⭐⭐ 🟡 🟡 Both — CSS/Canvas — Loop — continuous — linear.
186. **Moving Grid** — Faint grid lines slowly pan/scroll across the background. Best for: dev tools, technical/infrastructure brands. ⭐⭐ 🟢 🟡 Both — CSS background-position keyframes — Loop — 10–20s — linear.
187. **Perspective Grid** — 3D-perspective grid floor recedes into the distance, sometimes animated (retro-futuristic). Best for: bold tech/gaming brands. ⭐⭐⭐⭐ 🟠 🟠 Desktop — CSS 3D transform/Three.js — Loop — continuous — linear.
188. **Animated Lines** — Thin lines draw and redraw across the background, sometimes connecting on proximity. Best for: network/data brand backgrounds. ⭐⭐⭐ 🟠 🟠 Desktop — SVG/Canvas — Loop — continuous — linear.
189. **Dot Matrix Animation** — Grid of dots pulses in opacity/scale in a wave pattern. Best for: tech/product backgrounds. ⭐⭐⭐ 🟡 🟡 Both — CSS/Canvas — Loop — continuous — ease-in-out.
190. **Wave Background** — SVG wave shape animates undulating motion, often layered. Best for: hero-to-section dividers, travel/wellness brands. ⭐⭐ 🟢 🟢 Both — SVG animate/CSS — Loop — 4–8s — ease-in-out.
191. **Organic Shape Motion** — Free-form blob/shape rotates and drifts subtly in a section background. Best for: wellness, creative, editorial sites. ⭐⭐ 🟢 🟡 Both — CSS keyframes — Loop — 6–10s — ease-in-out.
192. **Geometric Shape Motion** — Angular shapes (triangles, hexagons) rotate/float in the background. Best for: tech/architecture/finance brands. ⭐⭐ 🟢 🟡 Both — CSS keyframes — Loop — 6–10s — ease-in-out.
193. **Background Parallax** — Full-section background image/pattern moves slower than foreground content on scroll. Best for: most content sections. ⭐⭐ 🟡 🟡 Both — CSS/GSAP ScrollTrigger — Scroll — scroll-linked — linear.
194. **Interactive Background** — Background pattern reacts to cursor position (ripple, distortion, particle repel). Best for: agency/showcase heroes. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — Canvas/WebGL — Mouse move — real-time — ease-out.

# L. Gradient & Color Animations

195. **Gradient Position Shift** — Gradient's angle/position animates continuously for a "living" background. Best for: SaaS CTA sections. ⭐⭐ 🟢 🟡 Both — CSS keyframes — Loop — 6–10s — linear.
196. **Gradient Hue Rotation** — Entire gradient's hue rotates through the color wheel slowly. Best for: playful/creative brand accents. ⭐⭐⭐ 🟢 🟡 Both — CSS filter: hue-rotate — Loop — 10–20s — linear.
197. **Duotone Hover Shift** — Image duotone color mapping shifts on hover (e.g., blue→purple). Best for: portfolio image treatments. ⭐⭐⭐ 🟡 🟡 Both — CSS filter/blend-mode — Hover — 300–500ms — ease-out.
198. **Section Background Color Morph** — Background color smoothly interpolates as the user scrolls between sections (see #64). Best for: narrative single-page sites. ⭐⭐⭐ 🟡 🟡 Both — GSAP ScrollTrigger — Scroll — scrub — linear.
199. **Animated Color Overlay** — A semi-transparent color layer over an image/video shifts hue or opacity on loop. Best for: hero video backgrounds needing text contrast. ⭐⭐ 🟢 🟡 Both — CSS keyframes — Loop — 6–10s — ease-in-out.
200. **Dark/Light Mode Transition** — Toggling theme cross-fades colors across the whole page rather than snapping instantly. Best for: any site with a theme switcher. ⭐⭐⭐ 🟡 🟡 Both — CSS transition on custom properties — Click — 300–500ms — ease-in-out.

# M. 3D Animations

201. **3D Product Rotation** — Product model can be rotated by drag or auto-rotates to show all angles. Best for: e-commerce, hardware product pages. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js/R3F — Drag/auto — continuous — linear/power1.out.
202. **3D Model Viewer** — Full interactive viewer with zoom, orbit, and lighting controls. Best for: furniture, industrial, automotive product pages. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js/`<model-viewer>` — Drag/scroll — real-time — linear.
203. **3D Object Floating** — 3D shape gently bobs and rotates in place, idle animation. Best for: hero decorative elements. ⭐⭐⭐⭐ 🟠 🟠 Desktop — Three.js — Loop — continuous — sine.inOut.
204. **3D Object Mouse Follow** — 3D object's rotation subtly tracks cursor position. Best for: product/app heroes. ⭐⭐⭐⭐ 🟠 🟠 Desktop — Three.js — Mouse move — real-time — power1.out.
205. **3D Object Scroll Rotation** — Object rotates/moves as the page scrolls (see #63). Best for: product storytelling sections. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js + GSAP ScrollTrigger — Scroll — scrub — linear.
206. **3D Camera Movement** — Virtual camera moves through a 3D scene as the user scrolls, like a fly-through. Best for: architecture/real-estate/gaming showcase. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js/R3F — Scroll — scrub — linear.
207. **3D Particle System** — Thousands of particles form shapes or drift with physics-like behavior. Best for: showcase hero backgrounds. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js — Loop/interaction — continuous — linear.
208. **3D Tunnel** — Camera travels through a tunnel of shapes/lights, often scroll-linked. Best for: experimental award-site intros. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js — Scroll — scrub — linear.
209. **3D Globe** — Rotating globe, often with markers or arcs for locations/data. Best for: global companies, logistics, travel. ⭐⭐⭐⭐ 🟠 🟠 Desktop — Three.js/react-globe.gl — Load/drag — continuous — linear.
210. **Interactive Globe** — Globe responds to drag/scroll with inertia, markers clickable. Best for: same as above with more engagement. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js — Drag — real-time — power1.out.
211. **WebGL Image Distortion** — Images ripple/displace using shaders on hover/scroll (see #141). Best for: experimental portfolio. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js/PixiJS shaders — Hover/scroll — real-time — ease-out.
212. **WebGL Liquid Effect** — Full-viewport liquid simulation reacting to cursor/scroll. Best for: award-show hero backgrounds. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — WebGL shader — Mouse move — real-time — ease-out.
213. **Shader Gradient** — GPU-rendered animated gradient with more organic, fluid motion than CSS gradients. Best for: premium SaaS heroes. ⭐⭐⭐⭐ 🟠 🟠 Both — WebGL/GLSL — Loop — continuous — linear.
214. **Shader Noise** — Perlin/simplex noise pattern animates subtly across a surface for organic texture. Best for: background texture layers. ⭐⭐⭐ 🟠 🟠 Desktop — WebGL/GLSL — Loop — continuous — linear.
215. **Glass Refraction** — WebGL-simulated glass/refraction effect distorts content behind an element. Best for: high-end product/glassmorphism showcases. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — WebGL shader — Hover/scroll — real-time — ease-out.
216. **3D Text** — Heading rendered as extruded/beveled 3D text, sometimes rotating. Best for: bold showcase headlines. ⭐⭐⭐⭐ 🟠 🟠 Desktop — Three.js TextGeometry — Load/scroll — continuous — power1.out.
217. **3D Card Stack** — Cards arranged and animated in 3D space (rotation + depth) rather than flat stacking. Best for: showcase feature sections. ⭐⭐⭐⭐ 🟠 🟠 Desktop — Three.js/CSS 3D — Scroll/click — 500–800ms — power2.inOut.
218. **3D Carousel** — Items arranged in a rotating 3D ring, selected item comes to front. Best for: product/portfolio showcases. ⭐⭐⭐⭐ 🟠 🟠 Desktop — Three.js/CSS 3D — Click/drag — 400–700ms — power2.inOut.

# N. SVG Animations

219. **SVG Line Drawing** — Path strokes itself in using stroke-dasharray/offset. Best for: icons, illustrations, underlines. ⭐⭐⭐ 🟡 🟢 Both — SVG/CSS/GSAP DrawSVG — Load/scroll — 800–1500ms — power2.inOut.
220. **SVG Path Reveal** — Complex illustration reveals path-by-path in sequence. Best for: hero illustrations, about sections. ⭐⭐⭐⭐ 🟠 🟡 Both — SVG + GSAP timeline — Load/scroll — 1.5–3s — power2.inOut.
221. **SVG Morphing** — One SVG shape smoothly morphs into another. Best for: icon transitions, decorative shape play. ⭐⭐⭐⭐ 🟠 🟡 Both — GSAP MorphSVG/Flubber — Load/hover/scroll — 500–900ms — power2.inOut. Ref: https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/
222. **SVG Logo Animation** — Brand logo animates its strokes/shapes on load as a signature moment. Best for: first-load brand impression. ⭐⭐⭐⭐ 🟠 🟡 Both — SVG/GSAP — Load — 1–2s — power2.inOut.
223. **SVG Icon Draw** — Small icons (checkmarks, arrows) draw themselves when scrolled into view. Best for: feature lists, process steps. ⭐⭐⭐ 🟡 🟢 Both — SVG stroke-dashoffset — Viewport entry — 400–700ms — power2.out.
224. **SVG Shape Transformation** — Decorative SVG shape rotates/scales/skews continuously or on scroll. Best for: background accents. ⭐⭐ 🟢 🟢 Both — SVG/CSS transform — Loop/scroll — variable — linear.
225. **SVG Stroke Animation** — Stroke color/width animates (e.g., pulsing outline) rather than just drawing. Best for: interactive diagrams, icons. ⭐⭐ 🟢 🟢 Both — CSS/SVG — Hover/loop — 300–600ms — ease-in-out.
226. **SVG Path Following** — An object (dot, icon) travels along a defined SVG path. Best for: process/journey diagrams. ⭐⭐⭐⭐ 🟠 🟡 Both — GSAP MotionPath — Scroll/loop — 1–3s — power1.inOut. Ref: https://gsap.com/docs/v3/Plugins/MotionPathPlugin/
227. **SVG Liquid Morph** — SVG blob shape continuously morphs organically. Best for: decorative loading/background accents. ⭐⭐⭐ 🟠 🟡 Both — SVG animate/GSAP — Loop — continuous — sine.inOut.
228. **Animated Illustration** — Multi-part custom illustration where individual layers animate independently (parallax + micro-motion). Best for: about/how-it-works sections. ⭐⭐⭐⭐ 🟠 🟠 Both — SVG/Lottie + GSAP — Scroll/load — 1–2s — power2.out.

# O. Portfolio, Product & Data Animations

229. **Animated Statistics Counter** — Numbers count up to their target when scrolled into view (see #67). Best for: about/metrics sections. ⭐⭐⭐ 🟢 🟢 Both — JS/GSAP — Viewport entry — 1–2s — power1.out.
230. **Circular Progress (Stat Ring)** — Ring fills to represent a percentage stat. Best for: skills, satisfaction rate, completion metrics. ⭐⭐⭐ 🟡 🟢 Both — SVG stroke-dashoffset — Viewport entry — 800–1200ms — power2.out.
231. **Sales/Growth Chart Animation** — Bar/line chart draws itself (bars grow, lines trace) when scrolled into view. Best for: investor/business results sections. ⭐⭐⭐⭐ 🟡 🟡 Both — SVG/Chart.js/GSAP — Viewport entry — 800–1500ms — power2.out.
232. **Timeline Animation** — Vertical/horizontal timeline draws with milestones fading in sequentially (see #68). Best for: company history, roadmaps. ⭐⭐⭐ 🟡 🟡 Both — SVG/GSAP ScrollTrigger — Scroll — scrub/stagger — power2.out.
233. **Process Step Reveal** — Numbered steps (1-2-3-4) animate in sequence with connecting lines drawing between them. Best for: "How it works" sections. ⭐⭐⭐ 🟡 🟢 Both — GSAP stagger — Scroll — 400–600ms each — power2.out.
234. **Service Icon Animation** — Icons animate subtly on hover (bounce, rotate, path draw) to add interactivity to service grids. Best for: services/features grids. ⭐⭐ 🟢 🟢 Both — CSS/Lottie — Hover — 300–500ms — ease-out.
235. **Testimonial Carousel** — Testimonials auto/manually cycle with a fade or slide transition. Best for: social proof sections. ⭐⭐ 🟢 🟢 Both — CSS/JS (Swiper)/GSAP — Auto/click — 400–600ms — power2.inOut.
236. **Testimonial Quote Reveal** — Large quotation mark and text fade/slide in dramatically as the section enters view. Best for: single-featured-testimonial sections. ⭐⭐⭐ 🟢 🟢 Both — GSAP/CSS — Viewport entry — 500–800ms — power2.out.
237. **Pricing Card Highlight** — The recommended pricing tier is subtly scaled up, glowing, or has an animated badge. Best for: pricing pages. ⭐⭐⭐ 🟢 🟡 Both — CSS transform/animated border — Load/hover — 300–500ms — ease-out.
238. **Pricing Toggle Animation** — Monthly/annual toggle animates a sliding switch and prices cross-fade or count-transition to new values. Best for: SaaS pricing pages. ⭐⭐⭐ 🟡 🟢 Both — CSS/JS — Click — 300–500ms — ease-out.
239. **FAQ Accordion** — Question expands smoothly to reveal answer, with icon rotating. Best for: FAQ sections everywhere. ⭐⭐ 🟢 🟢 Both — CSS grid-template-rows/JS — Click — 300–400ms — ease-in-out.
240. **Form Field Focus Animation** — Label floats up and input border/underline highlights on focus. Best for: all modern contact/signup forms. ⭐⭐ 🟢 🟢 Both — CSS transition — Focus — 150–250ms — ease-out.
241. **Success Checkmark Animation** — Checkmark path draws itself inside an expanding circle on success. Best for: form submission confirmation. ⭐⭐⭐ 🟡 🟢 Both — SVG stroke-dashoffset — On success — 500–800ms — power2.out.
242. **Booking Confirmation Animation** — Combination of checkmark + confetti/subtle celebratory motion after a booking/purchase. Best for: bookings, checkout confirmation. ⭐⭐⭐ 🟡 🟢 Both — Lottie/CSS — On success — 1–2s — ease-out.
243. **Before/After Business Transformation** — Slider or crossfade showing "before" vs "after" results (renovation, fitness, design). Best for: case study/results sections. ⭐⭐⭐ 🟡 🟢 Both — JS + clip-path — Drag/scroll — real-time — linear.
244. **Client Logo Marquee** — Row of client/partner logos scrolls infinitely and smoothly. Best for: trust/social proof bands. ⭐⭐ 🟢 🟢 Both — CSS keyframes — Loop — 15–30s — linear.
245. **Trust Badge Animation** — Security/certification badges subtly pulse or fade in to reassure visitors. Best for: checkout, footer trust sections. ⭐ 🟢 🟢 Both — CSS — Viewport entry — 300–400ms — ease-out.
246. **Review Star Animation** — Star ratings fill in sequentially (left to right) when scrolled into view. Best for: testimonials, review widgets. ⭐⭐ 🟢 🟢 Both — CSS/JS stagger — Viewport entry — 300–500ms — power2.out.

# P. Micro-interactions

247. **Checkbox Animation** — Checkbox fills and checkmark draws on toggle. Best for: forms, settings, todo apps. ⭐⭐ 🟢 🟢 Both — CSS/SVG — Click — 200–300ms — ease-out.
248. **Toggle Switch Animation** — Switch thumb slides with color transition on toggle. Best for: settings, pricing toggle. ⭐ 🟢 🟢 Both — CSS transition — Click — 200–250ms — ease-out.
249. **Like Button Animation** — Icon scales/bounces and fills color on click (heart, thumbs-up). Best for: social/content platforms. ⭐⭐⭐ 🟡 🟢 Both — CSS/Lottie — Click — 300–500ms — back.out.
250. **Heart Burst** — Small particle burst radiates from a heart/like icon on click. Best for: playful social engagement actions. ⭐⭐⭐ 🟡 🟢 Both — CSS/JS — Click — 400–600ms — ease-out.
251. **Bookmark Animation** — Bookmark icon flips/fills with a small bounce when saved. Best for: content/article save actions. ⭐⭐ 🟢 🟢 Both — CSS transition — Click — 250–350ms — back.out.
252. **Copy-to-Clipboard Animation** — Icon morphs to a checkmark momentarily with a small tooltip confirming "Copied!". Best for: code blocks, share links. ⭐⭐ 🟢 🟢 Both — CSS/JS — Click — 200–300ms — ease-out.
253. **Notification Toast** — Small message slides/fades in from a screen edge, auto-dismisses. Best for: app-like feedback across any site. ⭐⭐ 🟢 🟢 Both — CSS/JS — Event-triggered — 300–400ms in / auto-dismiss — ease-out.
254. **Error Shake** — Input/element shakes horizontally to indicate a validation error. Best for: form validation. ⭐⭐ 🟢 🟢 Both — CSS keyframes — On error — 300–400ms — ease-in-out.
255. **Form Validation Animation** — Field border/icon animates to green (valid) or red (error) with subtle transition as user types. Best for: signup/checkout forms. ⭐⭐ 🟢 🟢 Both — CSS transition — Input/blur — 200–300ms — ease-out.
256. **Tooltip Reveal** — Small label fades/scales in near an element on hover/focus. Best for: icon-only buttons, help text. ⭐ 🟢 🟢 Both — CSS transition — Hover/focus — 150–200ms — ease-out.
257. **Dropdown Reveal** — Menu/select options fade + slide down from the trigger. Best for: selects, filters, account menus. ⭐⭐ 🟢 🟢 Both — CSS transition — Click — 200–300ms — ease-out.
258. **Progress Indicator (Stepper)** — Multi-step form/checkout progress fills and highlights the active step. Best for: checkout, onboarding flows. ⭐⭐ 🟢 🟢 Both — CSS transition — Step change — 300–400ms — ease-out.
259. **Drag Handle Animation** — Draggable item scales/lifts with shadow when grabbed, settles on drop. Best for: kanban boards, sortable lists. ⭐⭐⭐ 🟡 🟢 Both — CSS/JS (Sortable) — Drag — real-time — power2.out.
260. **Swipe Feedback** — Card/list item visually responds (color reveal, icon) as user swipes on mobile. Best for: mobile inbox/todo-style interactions. ⭐⭐⭐ 🟡 🟢 Mobile — JS/CSS transform — Touch/swipe — real-time — power1.out.
261. **Pull-to-Refresh Animation** — Spinner/icon stretches and spins as user pulls down on mobile, triggering refresh. Best for: mobile app-like content feeds. ⭐⭐⭐ 🟡 🟢 Mobile — JS/CSS — Touch — real-time — ease-out.
262. **Add-to-Cart Animation** — Product thumbnail visually "flies" toward the cart icon on click. Best for: e-commerce product pages. ⭐⭐⭐ 🟡 🟢 Both — GSAP/CSS — Click — 500–700ms — power2.inOut.
263. **Shopping Cart Bounce** — Cart icon bounces/jiggles briefly after an item is added. Best for: e-commerce header cart icon. ⭐⭐ 🟢 🟢 Both — CSS keyframes — On add — 300–400ms — back.out.
264. **Quantity Counter Animation** — Number increments/decrements with a small scale pulse on +/- click. Best for: cart, product quantity selectors. ⭐ 🟢 🟢 Both — CSS transition — Click — 150–200ms — ease-out.

# Q. Advanced / Experimental Effects

265. **Liquid Cursor** — Cursor rendered as a metaball/liquid shape reacting to nearby elements. Best for: award-show experimental sites. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — SVG filter/Canvas — Mouse move — real-time — ease-out.
266. **Gooey Menu** — Menu items merge into a blobby "gooey" shape when transitioning open/closed (SVG filter goo effect). Best for: playful/creative nav. ⭐⭐⭐⭐ 🟠 🟡 Both — SVG filter (feGaussianBlur+feColorMatrix) — Click — 400–600ms — power2.inOut.
267. **Fluid Navigation** — Navigation background morphs fluidly as the active state changes between items. Best for: tab bars, segmented controls. ⭐⭐⭐⭐ 🟠 🟡 Both — GSAP/Motion layout — Click — 300–500ms — power2.inOut.
268. **Magnetic Typography** — Individual letters in a heading are magnetically attracted to the cursor (see #39, applied at display scale). Best for: hero showcase headlines. ⭐⭐⭐⭐ 🟠 🟡 Desktop — JS — Mouse move — real-time — power2.out.
269. **Distorted Typography** — Heading text distorts/liquifies as the user scrolls fast (velocity-based). Best for: award-style hero. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — WebGL/SVG filter + scroll velocity — Scroll — real-time — ease-out.
270. **Image Displacement** — Hover on an image triggers a displacement-mapped ripple/glitch reveal of a second image. Best for: portfolio hover previews. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — WebGL (PixiJS filters) — Hover — real-time — ease-out.
271. **Pixel Sorting Effect** — Image glitches with a pixel-sort style distortion on hover/transition. Best for: edgy creative/art sites. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — WebGL/Canvas — Hover/click — 400–700ms — linear.
272. **Particle Dissolve** — Element dissolves into particles that drift away and fade. Best for: transition-out moments, "delete" actions. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — Canvas/Three.js — Click/exit — 600–1000ms — ease-out.
273. **Particle Formation** — Particles converge from random positions to form a shape/logo. Best for: loaders, hero intro moments. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — Canvas/Three.js — Load — 1–2s — power2.out.
274. **Image-to-Particles** — A photo breaks apart into particles and reforms into another image or scatters on scroll. Best for: showcase transitions. ⭐⭐⭐⭐⭐ 🔴 🔴 Desktop — Three.js (points/shader) — Scroll/click — 800–1500ms — power2.inOut.
275. **Text-to-Particles** — Heading text disintegrates into particles on scroll-out or hover. Best for: dramatic hero exit moments. ⭐⭐⭐⭐⭐ 🔴 🟠 Desktop — Canvas/Three.js — Scroll/hover — 600–1000ms — power2.out.
276. **Noise Distortion** — Static/noise pattern briefly overlays an element during a state change (like a TV static blip). Best for: glitch-brand transitions. ⭐⭐⭐ 🟠 🟡 Desktop — Canvas/CSS — Click/transition — 150–300ms — linear.
277. **RGB Split** — Red/green/blue channels of an image or text separate briefly then re-converge. Best for: hover accents on bold/edgy brands. ⭐⭐⭐ 🟡 🟡 Both — CSS filter/JS — Hover — 200–400ms — ease-out.
278. **Chromatic Aberration** — Subtle color-fringing effect applied on hover/scroll for a lens-like premium feel. Best for: showcase image hovers. ⭐⭐⭐ 🟠 🟡 Desktop — CSS filter/WebGL — Hover — 200–400ms — ease-out.
279. **Digital Glitch** — Short, controlled glitch burst (slice-shift + color split) on an element. Best for: gaming/streaming brand accents. ⭐⭐⭐ 🟠 🟡 Desktop — CSS/JS — Hover/loop — 150–300ms — steps.
280. **Scanline Effect** — Horizontal lines sweep across an element, mimicking a CRT/scan look. Best for: retro-tech themed brands. ⭐⭐ 🟢 🟡 Both — CSS gradient animation — Loop — 2–4s — linear.
281. **VHS Distortion** — Combination of noise, scanlines, and slight color shift for a retro VHS aesthetic. Best for: nostalgic/creative brand moments. ⭐⭐⭐ 🟠 🟡 Desktop — CSS/Canvas — Loop/hover — continuous — linear.
282. **Physics-Based UI** — Elements respond to drag/release with realistic spring/momentum physics rather than fixed easing curves. Best for: playful drag interactions, draggable cards. ⭐⭐⭐⭐ 🟠 🟡 Both — Motion (spring)/Matter.js — Drag — real-time — spring.
283. **Spring-Based UI** — General UI transitions (modals, menus) use spring physics instead of duration/easing curves for a natural feel. Best for: app-like interfaces. ⭐⭐⭐ 🟡 🟡 Both — Motion springs — Any — real-time — spring. Ref: https://motion.dev/docs/react-transitions

# R. Mobile-Friendly Animations

284. **Simplified Fade-In** — Reduce parallax/3D-heavy desktop effects to plain fade/slide on mobile. Best for: every animated section, as a mobile fallback. ⭐ 🟢 🟢 Mobile — CSS media query variants — Viewport entry — 300–400ms — ease-out.
285. **Tap Ripple Feedback** — Ripple/scale feedback on tap for touch targets (replaces hover states). Best for: all buttons/cards on mobile. ⭐⭐ 🟢 🟢 Mobile — CSS active state — Tap — 150–200ms — ease-out.
286. **Bottom Sheet Reveal** — Modal/menu slides up from the bottom edge instead of centering, matching native app patterns. Best for: mobile filters, menus, forms. ⭐⭐⭐ 🟡 🟢 Mobile — CSS transform — Tap — 300–400ms — power2.out.
287. **Swipeable Carousels** — Touch-drag carousels with momentum/snap instead of arrow-only navigation. Best for: mobile testimonial/gallery sections. ⭐⭐⭐ 🟡 🟡 Mobile — JS (Swiper)/native scroll-snap — Swipe — real-time — ease-out.
288. **Sticky Mobile CTA** — CTA button pins to bottom of viewport with a subtle entrance animation once user scrolls past hero. Best for: conversion-focused mobile pages. ⭐⭐ 🟢 🟢 Mobile — CSS position: fixed + transition — Scroll — 250–350ms — ease-out.

# S. Accessibility-Friendly Motion Patterns

289. **Reduced-Motion Fallback** — All non-essential animation is disabled/reduced when `prefers-reduced-motion: reduce` is detected; content still fully visible without relying on motion to appear. Best for: every site, universally. ⭐ 🟢 🟢 Both — CSS media query — System preference — n/a — n/a. Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
290. **Static-First Content Reveal** — Content exists in the DOM and is readable even if JS/animation fails to load (progressive enhancement, not opacity:0 by default). Best for: every scroll-reveal implementation. ⭐ 🟢 🟢 Both — CSS/JS fallback pattern — Load — n/a — n/a.
291. **Focus-Visible Motion** — Clear, non-flashy focus ring animation for keyboard navigation (scale/outline transition, not color-only). Best for: all interactive elements. ⭐ 🟢 🟢 Both — CSS :focus-visible transition — Keyboard focus — 150ms — ease-out.
292. **Non-Flashing Loop Limits** — Any looping animation (marquees, pulses) capped well below flash thresholds and pausable by the user. Best for: marquees, background loops, autoplay carousels. ⭐ 🟢 🟢 Both — CSS/JS pause control — Loop — n/a — n/a.

---

# Master Comparison Table (selected highlights — see full list above for all 292)

| # | Animation | Category | Visual Impact | Difficulty | Performance | Trigger | Desktop | Mobile | Recommended Technology |
|---|-----------|----------|:---:|:---:|:---:|---------|:---:|:---:|-------------------------|
| 2 | Split Text Reveal | Typography | ⭐⭐⭐ | 🟡 | 🟡 | Load/scroll | ✅ | ✅ | GSAP SplitText |
| 15 | 3D Hero Object Rotation | Hero | ⭐⭐⭐⭐⭐ | 🔴 | 🔴 | Load/scroll/mouse | ✅ | ❌ | Three.js / R3F |
| 45 | Staggered Scroll Reveal | Scroll | ⭐⭐⭐ | 🟡 | 🟡 | Viewport entry | ✅ | ✅ | GSAP ScrollTrigger |
| 58 | Pinned Section Animation | Scroll | ⭐⭐⭐⭐⭐ | 🔴 | 🟠 | Scroll | ✅ | ❌ | GSAP ScrollTrigger |
| 72 | Card 3D Tilt | Cards | ⭐⭐⭐⭐ | 🟡 | 🟡 | Mouse move | ✅ | ❌ | JS / vanilla-tilt |
| 92 | Button Magnetic Effect | Buttons | ⭐⭐⭐⭐ | 🟡 | 🟡 | Mouse move | ✅ | ❌ | JS |
| 108 | Menu Curtain Reveal | Navigation | ⭐⭐⭐⭐⭐ | 🟠 | 🟡 | Click | ✅ | ✅ | GSAP |
| 120 | Custom Cursor | Cursor | ⭐⭐⭐ | 🟡 | 🟢 | Mouse move | ✅ | ❌ | JS/CSS |
| 157 | Curtain Page Transition | Page transitions | ⭐⭐⭐⭐ | 🟠 | 🟡 | Navigation | ✅ | ✅ | GSAP |
| 176 | Skeleton Shimmer | Loading | ⭐⭐ | 🟢 | 🟢 | Loading | ✅ | ✅ | CSS |
| 179 | Mesh Gradient | Background | ⭐⭐⭐⭐ | 🟠 | 🟠 | Loop | ✅ | ✅ | Canvas/WebGL |
| 201 | 3D Product Rotation | 3D | ⭐⭐⭐⭐⭐ | 🔴 | 🔴 | Drag/auto | ✅ | ❌ | Three.js |
| 219 | SVG Line Drawing | SVG | ⭐⭐⭐ | 🟡 | 🟢 | Load/scroll | ✅ | ✅ | SVG/GSAP DrawSVG |
| 229 | Animated Statistics Counter | Business UI | ⭐⭐⭐ | 🟢 | 🟢 | Viewport entry | ✅ | ✅ | JS/GSAP |
| 262 | Add-to-Cart Animation | Micro-interaction | ⭐⭐⭐ | 🟡 | 🟢 | Click | ✅ | ✅ | GSAP/CSS |
| 289 | Reduced-Motion Fallback | Accessibility | ⭐ | 🟢 | 🟢 | System preference | ✅ | ✅ | CSS media query |

*(The complete numbered list above (1–292) is the authoritative reference; this table is a fast-scan sample, not a replacement.)*

---

# "What Should I Use?" — Decision Guide by Website Type

## Premium SaaS website
- **Hero:** Split Text Reveal (#2) + Animated Mesh Gradient (#17) + Floating Hero Elements (#14)
- **Scroll:** Staggered Scroll Reveal (#45), Scroll-Based Number Counter (#67), Pinned Section for feature walkthrough (#58)
- **Hover:** Card Hover Lift (#71) or Card Glow Follow (#75), Button Magnetic Effect (#92)
- **CTA:** Button Gradient Flow (#96) or Magnetic Cursor Attraction (#103)
- **Background:** Mesh Gradient (#179) or Aurora Background (#180)
- **Page transition:** Fade (#155) — SaaS apps should feel fast, not theatrical
- **Avoid:** Heavy WebGL hero (#15/#201), long pinned sections on marketing pages, glitch text.

## Luxury brand website
- **Hero:** Hero Image Reveal (#11) with slow Ken Burns (#135), Blur-to-Sharp Reveal (#8)
- **Scroll:** Scroll Parallax (#50), Scroll Image Wipe (#137)
- **Hover:** Image Hover Zoom (#144), understated Card Hover Lift (#71)
- **CTA:** Button Shine (#95), no aggressive pulsing
- **Background:** Noise/Grain Motion (#185) for cinematic texture
- **Page transition:** Curtain Transition (#157) or Fade (#155)
- **Avoid:** Bouncy/elastic easing, particle effects, glitch, bright saturated gradients.

## Restaurant / hospitality website
- **Hero:** Hero Image Zoom (#12), Wave Background (#190) as a divider
- **Scroll:** Scroll Fade-In (#41), Scroll Slide-Up (#42)
- **Hover:** Card Image Zoom (#78), Image Hover Pan (#145)
- **CTA:** Button Hover Lift (#91), CTA Pulse (#104) on "Reserve a table" only
- **Background:** Subtle warm gradient, Floating Blobs (#181) very muted
- **Page transition:** Fade (#155)
- **Avoid:** Custom cursor, glitch/RGB split, heavy WebGL — this audience wants speed and appetite appeal, not spectacle.

## Real estate website
- **Hero:** Hero Image Parallax (#13), Image Before/After Slider (#146) for renovations
- **Scroll:** Scroll Image Reveal (#53), Scroll-Synced 3D Object (#63) only for flagship listings
- **Hover:** Card 3D Tilt (#72) on listing cards, Card Image Pan (#79)
- **CTA:** Button Arrow Slide (#97)
- **Background:** Background Parallax (#193)
- **Page transition:** Image-to-Page Transition (#163) for listing → detail
- **Avoid:** Distracting particle/glitch effects that undercut trust and professionalism.

## Agency / creative portfolio
- **Hero:** Text Scramble (#7) or Split Text Reveal (#2), Interactive Hero Background (#19)
- **Scroll:** Horizontal Portfolio Gallery (#60), Pinned Section (#58), Scroll-Synced Typography (#61)
- **Hover:** Card Morph into case study (#82), Cursor Image Preview (#126)
- **CTA:** Button Magnetic Effect (#92), Magnetic Navigation Links (#112)
- **Background:** Particle Field (#183) or Interactive Background (#194)
- **Page transition:** Morphing Page Transition (#161) or Curtain (#157)
- **Avoid:** Nothing off-limits here — this is where Level 5 experimental effects belong — but still apply restraint principles (see below) so it doesn't feel chaotic.

## E-commerce website
- **Hero:** Hero Image Reveal (#11), simple Fade-Up (#1)
- **Scroll:** Scroll Fade-In (#41), Scroll-Based Number Counter for reviews (#67)
- **Hover:** Card Image Zoom (#78), Product Coverflow (#149) on featured collections
- **CTA:** Add-to-Cart Animation (#262), Shopping Cart Bounce (#263)
- **Background:** Minimal — keep pages fast and clean
- **Page transition:** Fade (#155) or Shared Element Transition (#162) product→detail
- **Avoid:** Anything that delays perceived load time or interaction speed; conversion > spectacle.

## Personal portfolio
- **Hero:** Character-by-Character Reveal (#3) or Kinetic Typography (#40)
- **Scroll:** Staggered Scroll Reveal (#45), Scroll Parallax (#50)
- **Hover:** Card 3D Tilt (#72), Cursor Text Label (#127)
- **CTA:** Button Arrow Slide (#97)
- **Background:** Floating Blobs (#181) or Particle Field (#183), tastefully
- **Page transition:** Circle Expansion (#158)
- **Avoid:** Overloading every section with a different effect — pick 3–4 signature moves and repeat them consistently.

## Startup landing page
- **Hero:** Fade-Up Hero Reveal (#1) + Rotating Word Animation (#33)
- **Scroll:** Scroll Slide-Up (#42), Staggered Scroll Reveal (#45)
- **Hover:** Card Hover Lift (#71), Button Hover Lift (#91)
- **CTA:** CTA Pulse (#104) on the single primary action
- **Background:** Animated Gradient (#178)
- **Page transition:** Fade (#155)
- **Avoid:** 3D/WebGL — startups need fast load and clear conversion paths more than spectacle.

---

# The Animation Stack — Combining Technologies

### Beginner Stack — HTML + CSS + JavaScript
Good for: simple business sites, landing pages, WordPress-adjacent builds. Strengths: zero dependencies, tiny payload, fully understood by any developer. Weaknesses: hard to choreograph complex sequences or scroll-scrubbed timelines; verbose for staggered/coordinated animation. Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations

### Modern React Stack — React + Motion
Good for: app-like product marketing sites, dashboards, interactive components. Strengths: declarative, excellent for layout/shared-element transitions, spring physics built in. Weaknesses: less suited to complex scroll-scrubbed cinematic sequences than GSAP. Reference: https://motion.dev/docs/react

### Advanced Animation Stack — React + GSAP + ScrollTrigger
Good for: agency sites, storytelling landing pages, pinned/scrubbed sections. Strengths: industry-standard timeline control, extremely reliable cross-browser, huge plugin ecosystem (SplitText, DrawSVG, MorphSVG, Flip). Weaknesses: imperative API needs care inside React (cleanup in useEffect); GSAP plugins add bundle weight if overused. Reference: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ and https://gsap.com/resources/React/

### Smooth Scrolling Stack — GSAP + ScrollTrigger + Lenis
Good for: any scroll-storytelling site wanting buttery inertia scrolling. Strengths: Lenis normalizes scroll behavior across devices/browsers and pairs natively with ScrollTrigger. Weaknesses: can interfere with native anchor links/accessibility if not configured carefully; must respect reduced-motion users. Reference: https://lenis.darkroom.engineering/

### 3D Stack — Three.js + React Three Fiber
Good for: product visualizers, 3D heroes, globes, particle systems. Strengths: full GPU-accelerated 3D, huge example library, R3F makes scenes declarative in React. Weaknesses: steep learning curve, heavy performance cost, desktop-first (needs careful mobile fallback/degradation). Reference: https://threejs.org/ and https://r3f.docs.pmnd.rs/

### Motion Graphics Stack — Lottie + SVG
Good for: hand-crafted micro-illustrations, onboarding animations, success states exported from After Effects. Strengths: designer-friendly workflow (After Effects → Bodymovin/Lottie), crisp vector quality at any size, small file sizes for simple illustrations. Weaknesses: complex Lottie files can be CPU-heavy; not ideal for scroll-scrubbed cinematic sequences. Reference: https://lottiefiles.com/

### Experimental Creative Stack — GSAP + WebGL + Three.js + Shaders
Good for: Awwwards-style, award-show experimental sites, image distortion, liquid transitions. Strengths: unmatched visual ceiling — displacement, refraction, particles, custom shaders. Weaknesses: expert-level (🔴), heavy performance cost, needs a strong reduced-motion / low-power fallback and careful QA across GPUs. Reference: https://threejs.org/examples/ and https://gsap.com/docs/

---

# Inspiration Websites

| Platform | Useful for | What you'll find | Search for | Inspiration or implementation? |
|---|---|---|---|---|
| **Awwwards** — https://www.awwwards.com/ | Discovering full award-winning sites and trends | Complete site case studies, "Site of the Day" | site type + industry, e.g. "SaaS", "agency" | Inspiration |
| **Codrops** — https://tympanus.net/codrops/ | Learning how specific effects are actually built | Tutorials with full source code for scroll, WebGL, SVG, cursor effects | effect name, e.g. "image distortion", "menu" | Both — great for implementation |
| **CodePen** — https://codepen.io/ | Copy-adjacent building blocks and isolated demos | Small, focused snippets (buttons, loaders, cursors) | effect name + "codepen" | Implementation |
| **GSAP Showcase / Demos** — https://gsap.com/showcase/ | Seeing GSAP-specific techniques in production | ScrollTrigger, SplitText, Flip demos from real studios | plugin name | Both |
| **Three.js Examples** — https://threejs.org/examples/ | Learning WebGL/3D primitives | Shaders, particles, post-processing, physics | effect category (e.g. "webgl_postprocessing") | Implementation |
| **LottieFiles** — https://lottiefiles.com/ | Ready-made and custom micro-animations | Icon animations, loaders, success states | icon/animation name | Implementation |
| **Motion (Framer Motion) Examples** — https://motion.dev/examples | React-specific interaction patterns | Layout transitions, gestures, springs | pattern name (e.g. "drag", "layout") | Implementation |

---

# Do Not Overdo Animations

**Timing.** Duration should match the emotional weight of the action — fast for feedback (150–300ms), moderate for content reveals (400–800ms), slow only for cinematic, one-time hero moments (800ms+). Animations that are too slow make a site feel sluggish; too fast feels jarring.

**Easing.** Linear motion reads as robotic and artificial because nothing in the physical world moves at a constant rate. Use ease-out for things entering (they decelerate into place) and ease-in for things leaving.

**Hierarchy.** Not everything should move at once. If every element on screen animates simultaneously, nothing feels important — motion should draw the eye to what matters, not compete for it.

**Restraint.** The most premium-feeling websites usually use 4–6 signature motion patterns applied consistently, not 30 different effects. Restraint reads as confidence; excess reads as showing off.

**Performance.** Avoid stacking multiple expensive effects at once: large particle systems, big WebGL scenes, heavy blur/backdrop-filter, and continuous JS-driven animation of layout-triggering CSS properties (`width`, `top`, `left`). Prefer animating `transform` and `opacity`, which are GPU-accelerated and don't trigger layout/reflow.

**Accessibility.**
- Always respect `prefers-reduced-motion: reduce` and provide a static/near-instant fallback.
- Never rely on animation alone to convey required information — content must remain accessible if JS fails or motion is disabled.
- Avoid rapid flashing (more than ~3 flashes per second) — it can trigger seizures in photosensitive users.
- Keep navigation and core actions usable via keyboard, independent of hover/mouse-driven effects.
- Let looping/autoplay animation (marquees, carousels) be pausable.

---

# Premium Motion Rules (20 principles)

1. Animate with purpose — every motion should communicate hierarchy, feedback, or delight, not decoration for its own sake.
2. Use motion to establish hierarchy — what moves first and biggest is what matters most.
3. Keep important UI interactions fast (150–300ms) — users shouldn't wait on button presses or toggles.
4. Use slower, more cinematic motion only for one-time storytelling moments (hero load, section reveals).
5. Don't animate every element on a page — silence (stillness) makes motion meaningful.
6. Avoid excessive bounce/elastic easing outside playful brand contexts — it reads as unprofessional in serious industries.
7. Avoid random, unmotivated animation that isn't tied to a user action or scroll position.
8. Keep repeated animations (card hovers, button states) visually and timing-wise consistent across the whole site.
9. Use one consistent "easing language" (e.g., always power2.out for entrances) rather than mixing many curves.
10. Design mobile motion separately — hover-based effects don't translate; simplify to tap/scroll-triggered equivalents.
11. Respect the "one hero move" rule — pick a single standout animation per page, not five competing for attention.
12. Match animation intensity to brand tone (finance/health = subtle; gaming/creative = bold).
13. Never let animation delay perceived load time or block interaction (avoid gating content behind long intros).
14. Use stagger sparingly and keep offsets small (60–150ms) so groups still feel like one cohesive motion.
15. Test every animation at real network/device speed, not just on a fast dev machine.
16. Prefer `transform`/`opacity` for anything running every frame; avoid animating box-shadow/width/top at scale.
17. Give users control over anything that loops indefinitely or plays sound.
18. Keep entrance and exit animations symmetric in feel (if it slides in from the left, let it also gracefully exit, not just vanish).
19. Use motion to mask perceived latency intelligently (skeleton loaders, optimistic UI) rather than to hide slowness.
20. When in doubt, cut it — the best-reviewed premium sites almost always have fewer effects than a first draft, refined until only what serves the story remains.

---

# Animation Combination Library (20 ready-made systems)

1. **Premium SaaS** — Split Text Reveal + Mesh Gradient + Floating UI + Scroll Parallax + Staggered Cards + Magnetic CTA.
2. **Luxury Brand** — Slow Image Reveal + Blur-to-Sharp Text + Grain Overlay + Parallax + Curtain Page Transition + Minimal Custom Cursor.
3. **Modern Agency** — Custom Cursor + Text Scramble + Horizontal Scroll Gallery + Image Distortion + Magnetic Buttons + WebGL Hero.
4. **Restaurant / Hospitality** — Ken Burns Hero + Wave Divider + Card Image Zoom + Fade-Up Scroll + Reserve-Table Pulse CTA.
5. **Real Estate** — Parallax Hero + Before/After Slider + Card 3D Tilt Listings + Image-to-Page Transition + Cinematic Scroll Reveal.
6. **E-commerce Conversion** — Fade Hero + Card Image Zoom + Add-to-Cart Fly Animation + Cart Bounce + Shared Element Product Transition.
7. **Personal Portfolio** — Kinetic Typography Hero + Staggered Reveal + Card 3D Tilt + Cursor Text Label + Circle Expansion Transition.
8. **Startup Landing** — Fade-Up Hero + Rotating Word Headline + Staggered Feature Cards + Single CTA Pulse + Animated Gradient BG.
9. **Fintech / Trust-First** — Minimal Fade Reveal + Animated Counters + Clean Card Hover Lift + Subtle Border Gradient + No Custom Cursor.
10. **Creative Studio / Award-Site** — Interactive WebGL Hero + Text-to-Particles + Horizontal Pinned Gallery + Liquid Page Transition + Gooey Menu.
11. **Wellness / Yoga / Spa** — Organic Shape Motion BG + Soft Blur Reveal + Slow Parallax + Wave Dividers + Gentle CTA Float.
12. **Dev Tool / Infrastructure SaaS** — Moving Grid BG + Typewriter Hero + Scroll-Synced Diagram + SVG Path Following + Terminal-style Loader.
13. **Fashion / Editorial** — Full-bleed Image Curtain Reveal + Grain + Text Mask Wipe + Horizontal Scroll Lookbook + Cursor Image Preview.
14. **Automotive / Product Launch** — 3D Model Scroll Rotation + Scroll-Synced Camera + Particle Formation Loader + Cinematic Text Reveal.
15. **Nonprofit / Cause-driven** — Warm Gradient BG + Counter Stats + Timeline Animation + Testimonial Quote Reveal + Simple Fade Transitions.
16. **Event / Conference** — Countdown Counter + Speaker Card Stagger + Marquee Sponsor Logos + Confetti Success Booking Animation.
17. **Education / Course Platform** — Progress Ring Stats + Accordion FAQ + Step Card Reveal + Success Checkmark on Enrollment.
18. **Gaming / Entertainment** — Glitch Text + RGB Split Hover + Digital Scanline BG + Particle Hero + Bold Button Shine CTA.
19. **Architecture / Interior Design** — Slow Ken Burns + Before/After Slider + Horizontal Portfolio Scroll + Minimal Cursor + Image Wipe Transition.
20. **Minimalist Editorial Blog** — Fade-Only Scroll Reveals + Underline Draw Links + Skeleton Shimmer Loading + Reduced-Motion-First everywhere.

---

# Animation Intensity Scale

### Level 1 — Minimal
Typical animations: fade-in, simple hover lift, underline slide. Suitable for: legal, government, healthcare, documentation. Risks: can feel static/dated if zero motion anywhere. Performance: negligible.

### Level 2 — Clean
Typical animations: scroll fade/slide-up, card hover lift, form focus states, skeleton loaders. Suitable for: finance, B2B SaaS, corporate. Risks: very low — safest professional default. Performance: 🟢.

### Level 3 — Modern
Typical animations: staggered reveals, magnetic buttons, gradient backgrounds, counters, pinned sections. Suitable for: startups, product marketing, e-commerce. Risks: moderate — needs consistent easing/timing to avoid feeling busy. Performance: 🟡–🟠.

### Level 4 — Creative
Typical animations: custom cursor, 3D card tilt, horizontal scroll galleries, text scramble, page-transition morphs. Suitable for: agencies, portfolios, creative brands. Risks: can overwhelm content or hurt usability if every section competes for attention. Performance: 🟠.

### Level 5 — Experimental
Typical animations: WebGL shaders, 3D scenes, particle systems, liquid/displacement effects, image-to-particle transitions. Suitable for: award-show sites, single flagship product launches, studio self-promotion. Risks: high — accessibility, load time, and mobile experience must be deliberately engineered, not an afterthought. Performance: 🔴, requires dedicated optimization and reduced-motion/low-power fallbacks.

---

# Client Website Recipe (12-step workflow)

1. **Identify brand personality** — serious/trustworthy vs playful/bold vs luxurious/minimal — this single decision filters 80% of the animation list.
2. **Choose motion intensity** — pick a Level (1–5) from the scale above as a project-wide ceiling before designing any single effect.
3. **Choose hero animation** — the one moment that sets first-impression tone; pick exactly one signature hero effect.
4. **Choose typography animation** — decide how headings enter across the site (consistently — don't mix 3 different text reveals).
5. **Choose scroll behavior** — plain fade/slide vs scrubbed/pinned storytelling; match to content density and page length.
6. **Choose card interaction** — one consistent hover treatment for all cards site-wide.
7. **Choose CTA interaction** — one primary-button treatment, reused everywhere for consistency and conversion clarity.
8. **Choose page transition** — decide if page-to-page transitions are warranted at all (many business sites shouldn't have them).
9. **Test on mobile** — verify every hover-dependent effect has a sensible tap/scroll equivalent or is simply omitted.
10. **Test performance** — profile on a mid-range device/throttled network; cut anything that drops frame rate or delays interactivity.
11. **Add reduced-motion fallback** — verify the site is fully usable and readable with `prefers-reduced-motion: reduce` engaged.
12. **Remove unnecessary effects** — do a final pass removing anything that doesn't serve hierarchy, feedback, or brand story.

---

# Quick-Pick Cheat Sheet (50 situations)

| Situation | Best Animation |
|---|---|
| Hero headline | Split Text Reveal |
| Hero image | Masked Image Reveal |
| Hero background (SaaS) | Animated Mesh Gradient |
| Hero background (agency) | Interactive WebGL Background |
| Service/feature cards | Stagger + Hover Lift |
| Portfolio grid | Image Zoom + Parallax |
| Primary CTA | Magnetic Button |
| Secondary CTA | Arrow Slide |
| Stats section | Animated Counter |
| Testimonials | Carousel + Quote Reveal |
| Navbar on scroll | Shrink + Blur Transition |
| Fullscreen menu | Curtain Reveal + Stagger Links |
| Section background | Mesh Gradient / Floating Blobs |
| Luxury brand feel | Slow Parallax + Grain |
| Agency showcase | Custom Cursor + Text Scramble |
| 3D product page | Scroll-Synced Rotation |
| SaaS dashboard preview | Floating UI Mockup |
| Restaurant menu section | Image Reveal + Ken Burns |
| Real estate listing | Cinematic Image Transition |
| Pricing table | Highlighted Tier + Toggle Animation |
| FAQ section | Accordion Expand |
| Contact form | Floating Label Focus |
| Form success | Checkmark Draw |
| Form error | Shake + Red Border |
| Newsletter signup | Button Fill Animation |
| Blog list | Card Image Pan + Fade-Up |
| Case study intro | Image Curtain Reveal |
| About/manifesto section | Kinetic Typography |
| Company timeline | SVG Draw Timeline |
| Client logos | Infinite Marquee |
| Loading screen (first load) | Logo Reveal Loader |
| Button loading state | Minimal Spinner |
| Image lazy-load | Blur-Up Reveal |
| Page navigation (portfolio) | Circle Expansion Transition |
| Page navigation (SaaS) | Fade Transition |
| Product detail → cart | Add-to-Cart Fly Animation |
| Mobile menu | Slide-In Off-Canvas |
| Mobile CTA | Sticky Floating Button |
| Dark-mode toggle | Cross-fade Theme Transition |
| Data chart reveal | Draw-in Bar/Line Chart |
| Process steps | Numbered Stagger + Connecting Line |
| Team section | Card Flip |
| Awards/badges | Trust Badge Fade-In |
| Countdown/launch page | Number Flip Counter |
| Video hero | Scroll-Synced Video Scrub |
| Product variant switch | Image Morph |
| Comparison table | Row Stagger Reveal |
| Search results | Skeleton Shimmer → Fade-In |
| Notification | Toast Slide-In |
| Like/save action | Heart Burst |
| Drag-to-reorder list | Lift + Shadow on Drag |

---

# My Go-To Premium Website Motion System (Default Recommended Setup)

**Page Load (first 1–2 seconds):** Brief skeleton or logo-reveal loader (only if assets are genuinely heavy) → hero content fades up in a single staggered sequence (heading → subheading → CTA), 500–900ms total, power2.out.

**Hero:** One signature move only — usually Split Text Reveal on the headline plus a slow-moving mesh gradient or subtly parallaxing image behind it. No more than one "wow" effect in the hero.

**Navigation:** Transparent-to-solid navbar that gains a blurred background and shrinks slightly once scrolled past the hero; underline-slide on nav link hover; fullscreen curtain menu on mobile/hamburger.

**Scroll:** Default entrance = fade + slide-up (500–700ms, power2.out) applied consistently to sections and cards, with 80–150ms stagger for grouped items. Reserve pinned/scrubbed sections for one flagship storytelling moment per page, not every section.

**Cards:** One consistent hover treatment site-wide — hover lift + shadow, optionally a soft border-gradient or glow for feature/pricing highlight cards. 3D tilt only for a small number of showcase cards, not entire grids.

**Images:** Lazy-load with a blur-up reveal; on hover, a gentle image zoom (400–600ms) clipped to the container.

**Buttons:** Primary CTA = hover lift + subtle magnetic pull toward the cursor on desktop; secondary buttons = simple hover lift or arrow-slide. Reserve pulse/glow for exactly one CTA per page.

**Cursor:** Custom cursor only for creative/agency/portfolio builds — never for utility-first (finance, healthcare, e-commerce checkout) sites.

**Page Transitions:** Simple fade for most business sites; curtain or shared-element transitions reserved for portfolio/agency work where the transition itself is part of the brand experience.

**Mobile:** Strip hover-dependent effects (tilt, magnetic, custom cursor) entirely; keep fade/slide entrances and tap feedback; use bottom-sheet patterns for menus/filters; sticky CTA at the bottom of the viewport for conversion pages.

**Reduced Motion:** All entrance animations collapse to an instant or near-instant opacity change; looping/parallax/particle backgrounds are disabled or replaced with a static equivalent; no content is ever gated behind an animation completing.

**Recommended default stack for most client projects:** React + GSAP + ScrollTrigger for scroll and reveal work, Lenis for smooth scrolling, Motion for micro-interactions/layout transitions where React state is involved, and Three.js/R3F reserved only for projects that specifically call for a 3D centerpiece. This combination covers roughly 90% of premium business website needs without reaching for unnecessary complexity.
