# Motion Design & Premium Interaction System

Always apply the motion design principles and animation library defined in `SKILL.md` and `animation-bible.md` when building websites and web apps.

## Core Rules & Constraints
1. **One Signature Move Per Viewport**: Every screen/viewport gets at most ONE standout/signature ("wow") effect (⭐⭐⭐⭐+). Everything else must be quiet supporting motion (fade-up, subtle hover lift, underline slide).
2. **Never Gate Content**: No slow loaders or long intro sequences blocking users from reading or interacting. All critical content must be visible/readable within 1s.
3. **Compositor First (Performance)**: Prioritize animating `transform` and `opacity`. Avoid animating layout-triggering properties (`width`, `height`, `top`, `left`, `margin`, `box-shadow`) in loops.
4. **Desktop vs. Mobile Discipline**:
   - Hover-dependent effects (magnetic pull, 3D tilt, custom cursor, cursor spotlight) MUST be wrapped in `@media (pointer: fine)` or equivalent JS checks.
   - Provide mobile equivalents (tap active scale, touch feedback, swipe carousels, bottom sheets) and strip heavy hover listeners on touch devices.
5. **Universal Reduced Motion**: Always implement `@media (prefers-reduced-motion: reduce)` fallbacks that collapse animations to instant or near-instant opacity transitions, and disable continuous WebGL/Canvas/RAF loops when reduced motion is preferred.
6. **Max 1 Pulsing / Looping Attention-Grabber**: No competing attention grabbers on screen simultaneously.
7. **Technology Calibration**:
   - Vanilla CSS & IntersectionObserver for free/cheap entrances.
   - GSAP + ScrollTrigger + Lenis for high-end scroll storytelling and scrubbing.
   - Motion (Framer Motion) for React state-driven gestures, springs, and layout transitions.
   - Three.js / R3F only when justified, desktop-gated, lazy-loaded, with static fallbacks.
8. **Consult `animation-bible.md`**: Leverage the 292 named interaction patterns and 20 preset combination recipes for specific timings, easings, and implementations.
