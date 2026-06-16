---
name: Steelbird Shopping Grid
parent: Rugged Luxury Motocross System
layout: catalog-grid
colors:
  background: '#131313'
  surface-card: '#201f1f'
  surface-card-hover: '#2a2a2a'
  primary: '#ffb599'
  primary-container: '#f26422'
  on-surface: '#e5e2e1'
  on-surface-muted: '#c8c6c5'
  outline: '#a88a7f'
  badge-new: '#f26422'
  badge-limited: '#e5e2e1'
typography:
  page-title:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    textTransform: uppercase
  product-title:
    fontFamily: Anton
    fontSize: 18px
    fontWeight: '400'
    textTransform: uppercase
  product-price:
    fontFamily: Anton
    fontSize: 18px
    color: primary-container
  sidebar-heading:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    textTransform: uppercase
    letterSpacing: 0.15em
  filter-tab:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    textTransform: uppercase
spacing:
  gutter: 24px
  sidebar-width: 240px
  card-padding: 20px
  grid-gap: 24px
  container-max: 1440px
---

## Overview
The Shopping Grid is the primary catalog view for browsing Steelbird helmet systems. It follows the Rugged Luxury design language with a dark industrial aesthetic, peach-orange accents, and a structured two-column layout: a fixed filter sidebar and a scrollable product grid.

## Page Structure

### Header
- **Logo:** Steelbird wordmark (Anton, uppercase) linking to home.
- **Primary Nav:** HELMETS, ARMOR, APPAREL, ACCESSORIES — uppercase JetBrains Mono links.
- **Utility Icons:** Search, cart (with item count badge), and user profile — peach/orange accent color.
- **Behavior:** Header is fixed or sticky with a subtle bottom border (`outline` at 10% opacity).

### Sidebar (Left — 240px)
Three filter sections stacked vertically with 32px spacing between groups.

#### Categories
- Section label: `CATEGORIES` in primary orange.
- List items: FULL FACE, OPEN FACE, FLIP-UP, MOTOCROSS, GLOVES.
- Active item shows a small square bullet indicator in primary-container.
- Inactive items use `on-surface-muted` with hover → `on-surface`.

#### Brands
- Section label: `BRANDS`.
- List: STEELBIRD, IGNYTE, ARES, THUNDER.
- Same active/inactive treatment as categories.

#### Filter by Price
- Horizontal range slider with dark track and peach circular handle.
- Labels: `$50` (min) and `$500+` (max) in JetBrains Mono.

### Main Content Area

#### Page Title
- `SHOP ALL SYSTEMS` — large Anton uppercase headline, white/on-surface.

#### Filter Tabs (Horizontal Chips)
Rectangular pill buttons in a horizontal row below the title:
- **Active tab:** Solid `primary-container` background, dark text, optional lightning icon.
- **Inactive tabs:** Ghost style — 1px `outline` border at 20% opacity, white text.
- Tab options: CARBON FIBER, SUNSET ORANGE, RACING SPEC, VENTILATED, MODULAR.

#### Product Grid
- **Layout:** 2-column grid on desktop, 1-column on mobile.
- **Gap:** 24px between cards.
- **Card anatomy:**
  1. **Image area** — dark `surface-card` background, product render centered, optional badge overlay (top-left).
  2. **Badge types:** `NEW ARRIVAL` (orange bg), `LIMITED EDITION` (white/light bg, dark text).
  3. **Title row** — product name (left, Anton uppercase) + price (right, primary-container).
  4. **Description** — 2-line body text in Hanken Grotesk, muted color.
  5. **Footer row** — certification spec (left, JetBrains Mono) + `ADD TO SYSTEM →` CTA (right, primary-container).
  6. **Color swatches** (optional) — small circles below image for variant selection.
  7. **360 VIEW** icon (optional) — bottom-right of image area.

### Footer
- Large Steelbird logo (left).
- Center links: PRIVACY POLICY, TERMS OF SERVICE, CONTACT.
- Copyright line (right): `© {year} STEELBIRD SAFETY SYSTEMS.`

## Product Card States
| State | Treatment |
|-------|-----------|
| Default | `surface-card` background, ghost border |
| Hover | `surface-card-hover`, subtle primary border glow |
| Badge | Absolute positioned top-left, 0px radius (technical chip) |

## Responsive Behavior
- **Desktop (≥1024px):** Sidebar + 2-column grid.
- **Tablet (768–1023px):** Collapsible sidebar drawer or horizontal category scroll; 2-column grid.
- **Mobile (<768px):** Full-width single column; sidebar becomes top filter bar or slide-over panel.

## Navigation Flow
- Landing page **Helmets** nav link → `/helmets` (this shopping grid).
- Product cards are clickable; `ADD TO SYSTEM` triggers cart action (future).

## Sample Products
| Name | Price | Badge | Cert |
|------|-------|-------|------|
| Steelbird Apex X1 | $249 | NEW ARRIVAL | DOT / ECE CERTIFIED |
| Ignyte Modular V2 | $385 | — | DOT / ECE CERTIFIED |
| Ares Urban Jet | $189 | — | DOT / ECE CERTIFIED |
| Steelbird MX-Pro | $520 | LIMITED EDITION | DOT / ECE CERTIFIED |
