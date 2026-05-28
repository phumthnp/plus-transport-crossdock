# Plus Transport Crossdock Design System

## Direction

Clean logistics control board for repeated planning work. The UI should prioritize scanability, route sequence, actionable inventory state, and clear separation of PICK, OUTBOUND, INBOUND, and DROP.

## Foundations

- Source of truth: `design-tokens.json`
- CSS implementation: `styles.css` custom properties in `:root`
- Visual reference: Tailwind/shadcn-style spacing, neutral surfaces, compact controls, small badges, restrained state colors

## Figma Usage

The `design-tokens.json` file is structured for token-based tools such as Tokens Studio for Figma. Import the JSON into Tokens Studio, then create Figma styles from the imported color, radius, shadow, typography, and spacing tokens.

Suggested Figma components:

- App Top Bar
- Sidebar Section
- Location Tab
- Transfer Sub-tab
- Truck Card
- Route Stop Card
- Product Line Item
- Status Badge
- Quantity Modal
- Plan Summary Modal

## Core Colors

- PICK / OUTBOUND: `color.pick`
- DROP: `color.drop`
- INBOUND: `color.inbound`
- HUB: `color.hub`
- Active / selected: `color.accent`
- Pending: `color.warningSoft`
- Complete: `color.successSoft`
- Muted: opacity over white product cards

## Interaction States

- Active product cards stay white.
- Muted product cards use opacity only.
- Selected items use an accent ring.
- Drag target areas use accent outlines.
- Route order is shown with numbered stop badges.
