# DESIGN.md

## Visual Identity & Aesthetics
- **Theme:** Cyberpunk Tactical Developer HUD
- **Mode:** Experience / Persuade
- **Background:** `#090a0f` with radial tactical grid overlay (`rgba(0, 243, 255, 0.04) 28px`)
- **Typography:**
  - Body & UI: `Plus Jakarta Sans`
  - Code & Badges: `JetBrains Mono`

## Color Palette & Design Tokens
- `--bg`: `#090a0f` (Deep Obsidian Void)
- `--surface`: `#10121b` (Dark Glass Surface)
- `--border`: `rgba(0, 243, 255, 0.12)` (Tactical Cyan Border)
- `--border-highlight`: `rgba(0, 243, 255, 0.35)`
- `--accent-cyan`: `#00f3ff` (Cyber Cyan Glow)
- `--accent-emerald`: `#00ff9d` (SLA Online Green)
- `--accent-amber`: `#ffb703` (Routing Warning Amber)

## Components & Interactive Behaviors
1. **Hero Frame:**
   - Profile photo inside glassmorphism card with `whileHover` scale (1.05) & 1deg tilt.
   - Lightbox modal popout on click.
2. **Project Bento Cards:**
   - Animated tab switching with Framer Motion `AnimatePresence` layout transitions.
   - Project evidence thumbnails with hover scale & lightbox preview.
3. **Certifications List:**
   - Verified status badges (`SLA / VERIFIED`) with direct PDF view actions.
