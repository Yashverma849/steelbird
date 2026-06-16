---
name: Rugged Luxury Motocross System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e1bfb3'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a88a7f'
  outline-variant: '#594138'
  surface-tint: '#ffb599'
  primary: '#ffb599'
  on-primary: '#5a1c00'
  primary-container: '#f26422'
  on-primary-container: '#4f1700'
  inverse-primary: '#a63b00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#c6c6cb'
  on-tertiary: '#2f3034'
  tertiary-container: '#909095'
  on-tertiary-container: '#282a2e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e3e2e7'
  tertiary-fixed-dim: '#c6c6cb'
  on-tertiary-fixed: '#1a1b1f'
  on-tertiary-fixed-variant: '#46464b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 88px
    letterSpacing: 0.04em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  tagline:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '300'
    lineHeight: 30px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1440px
---

## Brand & Style
The design system embodies the "Rugged Luxury" ethos, bridging the gap between extreme off-road endurance and precision engineering. The brand personality is aggressive yet refined, evoking a sense of high-octane adventure balanced by the security of professional-grade safety.

The visual style is **Modern / Industrial**, characterized by sharp technical details, high-contrast imagery, and metallic textures. It utilizes a sophisticated take on utilitarianism: heavy-duty structural elements (borders, dividers) are executed with premium finesse. The interface should feel like a high-end dashboard—calculated, responsive, and indestructible.

## Colors
The palette is rooted in the desert landscape and industrial materials.

*   **Primary (Desert Orange):** A vibrant, high-vis orange used for calls to action and critical highlights. It represents energy, heat, and the grit of the dunes.
*   **Secondary (Carbon Black):** A deep, matte black used for primary surfaces and containers, providing the necessary contrast for the orange.
*   **Tertiary (Metallic Steel):** A range of cool grays that mimic titanium and brushed steel, used for technical data and secondary UI elements.
*   **Neutral (Obsidian):** The base background color, ensuring the deep blacks of the helmet hardware are mirrored in the digital environment.

All colors should maintain a "dark mode" priority to emphasize the premium, technical nature of the brand.

## Typography
Typography is split between raw industrial power and technical precision.

*   **Headlines:** Using **Anton**, the typography is condensed and impactful, mimicking the bold branding found on helmet visors and racing decals. It should be used in uppercase for all major headings.
*   **Body & Tagline:** **Hanken Grotesk** provides a clean, elegant, and highly legible contrast. For the tagline, use a light weight with wide tracking to evoke a premium, "airy" feel that balances the heavy headlines.
*   **Technical Labels:** **JetBrains Mono** is used for specs, safety ratings, and measurements to reinforce the engineering aspect of the product.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to maintain a sense of controlled, structural integrity, transitioning to a fluid model on mobile.

*   **Desktop:** 12-column grid with generous 64px margins to allow the product photography to breathe.
*   **Rhythm:** An 8px base unit drives all padding and margin decisions. 
*   **Reflow:** Elements should stack vertically on mobile, with margins tightening to 16px to maximize screen real estate for technical details.
*   **Technical Insets:** Use "inner-container" spacing for technical spec sheets, utilizing the 24px gutter to align text labels with graphical bars or charts.

## Elevation & Depth
Elevation is conveyed through **Tonal Layering** and **Subtle Metallic Glows** rather than traditional soft shadows.

*   **Surface Hierarchy:** The background is the darkest obsidian (#0D0D0D). Cards and containers use a slightly lighter Carbon Black (#1A1A1A).
*   **Outlines:** Instead of shadows, use 1px "Ghost Borders" in Metallic Steel with 20% opacity to define element boundaries.
*   **Active State Elevation:** Elements in focus or active state should gain an inner glow or a thin primary orange border to simulate a back-lit mechanical button.
*   **Depth:** Use subtle gradients on large surfaces to mimic the curvature of a helmet’s shell, moving from a deep black to a very dark charcoal.

## Shapes
The shape language is **Soft (0.25rem)**, leaning towards the angular.

While helmets are aerodynamic and curved, the digital system uses "Technical Geometry." Sharp corners are softened just enough to feel engineered rather than dangerous. 

*   **Buttons:** Standard buttons use a 4px (Soft) radius.
*   **Product Cards:** Use a larger 12px (rounded-xl) radius to subtly reference the rounded silhouette of the helmet.
*   **Accents:** Incorporate 45-degree chamfered edges on decorative elements (like progress bars or tab indicators) to mimic industrial machining.

## Components
Consistent execution of components is vital to maintaining the rugged luxury aesthetic.

*   **Buttons:** Primary buttons are solid Desert Orange with black Anton text. Secondary buttons are ghost-style with a Metallic Steel border and JetBrains Mono text.
*   **Input Fields:** Dark backgrounds with a 1px bottom border only, turning orange on focus. Labels should use the `label-caps` style in JetBrains Mono.
*   **Chips:** Small, rectangular tags with 0px roundedness, used for displaying safety certifications (e.g., DOT, ECE) in high-contrast black/white or black/orange.
*   **Cards:** Dark gray containers with high-quality product renders that "break" the container edges (overflow) to create a dynamic sense of motion.
*   **Safety Gauges:** Custom circular or linear progress indicators that use the primary orange to show impact resistance levels and airflow metrics.
*   **Lists:** Technical specifications should be presented in a two-column list with a subtle dotted leader between the attribute and the value.