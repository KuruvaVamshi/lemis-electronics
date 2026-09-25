# AGENTS.md

## Repository Context: Lemis Electronics & Web Development

This workspace is configured with the **Motion Design System** and **Animation Bible**.

### Core Standards
- **Motion System Rule**: Follow [.agents/rules/motion-system.md](file:///.agents/rules/motion-system.md).
- **Skill Reference**: Consult [SKILL.md](file:///SKILL.md) and [.agents/skills/motion-design/SKILL.md](file:///.agents/skills/motion-design/SKILL.md).
- **Animation Reference Library**: Access all 292 named animations and 20 site recipes in [animation-bible.md](file:///animation-bible.md).

### Non-Negotiable Engineering & Motion Rules
1. **One Signature Move Per Viewport**: At most one ⭐⭐⭐⭐+ animation per screen. Everything else is calm, supportive motion.
2. **Never Gate Content**: Fast time-to-interactivity; hero headlines & CTAs readable < 1s; no slow blocking loaders.
3. **Hardware Acceleration**: Animate `transform` and `opacity` only; never animate `width`, `height`, `top`, or `box-shadow` continuously.
4. **Pointer Discipline**: Hover, tilt, magnetic, and custom cursors require `@media (pointer: fine)` or pointer check; provide tap/touch equivalents.
5. **Universal Accessibility**: Always include `@media (prefers-reduced-motion: reduce)` and pause RAF loops.
6. **Visual Excellence**: Premium aesthetics, curated palettes, modern typography, glassmorphism/dynamic lighting where appropriate, zero placeholder look.
