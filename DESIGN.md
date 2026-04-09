# Design System Document: The Heritage Modernist

## 1. Overview & Creative North Star: "The Digital Calligrapher"
This design system rejects the clinical coldness of modern SaaS interfaces in favor of a "High-End Editorial" experience. Our Creative North Star is **The Digital Calligrapher**. Much like a traditional Chinese landscape painting, the interface must balance *Shan Shui* (mountain and water)—the weight of history represented by grounded typography and stone-grey surfaces, contrasted against the fluid, vibrant energy of "ink-wash" gradients and breathable white space.

We break the "template" look by utilizing **intentional asymmetry**. Do not center-align everything; allow elements to "float" with generous, uneven margins that mimic the layout of a classic scroll. We lean into high-contrast typography scales where massive serif displays command attention, while functional labels remain understated and utilitarian.

---

## 2. Colors: An Earthy, Vibrant Bloodline
The palette is rooted in the "Four Colors of Xiangtun." We avoid the neon artificiality of the web, opting for pigments that feel extracted from soil, fruit, and mineral.

### The Palette
*   **Primary (`#851217`) - Heritage Red:** The pulse of the system. Use for high-impact brand moments and critical actions.
*   **Secondary (`#3b6934`) - Mountain Green:** Represents the natural environment. Used for success states and growth-oriented content.
*   **Tertiary (`#593d00`) - Chestnut Gold:** The harvest color. Used for accents, warnings, or highlighting "premium" information.
*   **Neutral (`#fbf9f8` to `#1c2b2b`) - Stone & Ink:** The foundation. Our "Gray" is never a true neutral; it is warmed by the `surface` background to feel like aged paper.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts.
*   *Example:* A `surface-container-low` card sitting on a `surface` background.
*   *Why:* Lines create a "caged" feel. Color shifts create a "layered" feel.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of fine Xuan paper.
*   **Base:** `surface` (`#fbf9f8`)
*   **Secondary Layer:** `surface-container-low` (`#f5f3f3`)
*   **Tertiary Layer:** `surface-container-high` (`#eae8e7`)
Use these to "nest" content. A list should sit on a slightly darker or lighter container than its parent to define its importance without needing a border.

### The "Glass & Gradient" Rule
To add "soul," avoid flat blocks of color for CTAs. 
*   **Signature Gradients:** Transition from `primary` to `primary-container` in Hero sections to mimic the bleed of ink on a wet page.
*   **Glassmorphism:** Use semi-transparent surface colors with a `backdrop-filter: blur(20px)` for floating navigation bars or modals. This allows the vibrant "Mountain Green" or "Heritage Red" of the background to bleed through softly.

---

## 3. Typography: The Grounded Historical
We use a high-contrast pairing: **Newsreader** (Serif) for narrative and **Manrope** (Sans-Serif) for utility.

*   **Display (Newsreader):** Use `display-lg` (3.5rem) for hero statements. It should feel authoritative, like a carved inscription.
*   **Headline (Newsreader):** `headline-md` (1.75rem) provides historical weight to section titles.
*   **Body (Manrope):** `body-lg` (1rem) is our workhorse. Manrope is chosen for its modern, accessible geometry, ensuring that while the brand feels "old world," the reading experience is "new world."
*   **Labels (Manrope):** `label-md` (0.75rem) should always be in high-contrast `on-surface-variant` to ensure legibility against the stone-toned backgrounds.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for this system. We use "Ambient Light."

*   **The Layering Principle:** Depth is achieved by stacking `surface-container` tiers. A `surface-container-lowest` card on a `surface-container-low` background provides a soft, natural lift.
*   **Ambient Shadows:** If a floating element is required, use a shadow with a 24px-32px blur and 4% opacity. The shadow color should be a tint of `primary` or `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` at **20% opacity**. 100% opaque borders are strictly forbidden.

---

## 5. Components: Style & Execution

### Buttons
*   **Primary:** Solid `primary` (`#851217`) with `on-primary` text. Use `lg` (0.5rem) roundedness. No border.
*   **Secondary:** A "Ghost" style using `surface-container-highest` as the background.
*   **Interaction:** On hover, use a subtle shift to `primary-container`.

### Cards & Lists
*   **No Dividers:** Forbid the use of hairline dividers between list items. Use 16px–24px of vertical white space (Spacing Scale) to separate content.
*   **Structure:** Cards should use `surface-container-low` with no shadow, gaining a `surface-container-high` background only on hover.

### Input Fields
*   **Style:** Minimalist. No bounding box. Use a 2px bottom "underline" in `outline-variant`.
*   **States:** On focus, the underline transforms into `primary`. Error states use `error` (`#ba1a1a`) text, but the field background should subtly tint to `error-container` to indicate a "wash" of warning.

### Signature Component: The "Ink Tag"
*   Instead of standard Chips, use **Ink Tags**. These are low-roundedness (`sm`: 0.125rem) tags with a light `tertiary-fixed` background and `on-tertiary-fixed` text. They should look like small stamps or seals found on traditional paintings.

---

## 6. Do's and Don'ts

### Do
*   **DO** use "Negative Space" as a design element. Let the `surface` color breathe.
*   **DO** overlap elements. Let an image slightly bleed over a text container to create a sense of three-dimensional layers.
*   **DO** use the `tertiary` (Yellow/Chestnut) for call-outs. It is our "highlight" color.

### Don't
*   **DON'T** use 100% black. Use `on-surface` (`#1c2b2b`) for all "black" text.
*   **DON'T** use `full` (pill-shaped) roundedness for anything other than utility buttons or status indicators. It breaks the "grounded/historical" feel.
*   **DON'T** use standard grid layouts. If a section has three items, consider making the first item larger (66% width) and the other two stacked (33% width) to create an editorial flow.

---

## 7. Accessibility
*   Maintain a minimum contrast ratio of 4.5:1 for all `body` and `label` text.
*   Focus states must be clearly visible via a `primary` "Ghost Border" (2px at 40% opacity) that surrounds the element with an 4px offset.