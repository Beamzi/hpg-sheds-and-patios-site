# Design System

All design tokens are defined as CSS variables in `globals.css`.

## Colors

- Primary: `var(--color-primary)`
- Secondary: `var(--color-secondary)`
- Muted: `var(--color-muted)`
- Border: `var(--color-border)`
- Background: `var(--background)` - Page background
- Background Elevated: `var(--background-elevated)` - Cards, sections, inner containers
- Background Elevated High: `var(--background-elevated-high)` - Modals, inner dropdowns, tooltips, popovers (use sparingly for overlays only)
- Foreground: `var(--foreground)`

Dark mode adjusts these automatically via `@media (prefers-color-scheme: dark)`.

## Border

- Border: `var(--border)` - 1px solid, adapts to theme

## Spacing

- XS: `var(--spacing-xs)` - 8px
- SM: `var(--spacing-sm)` - 16px
- MD: `var(--spacing-md)` - 24px
- LG: `var(--spacing-lg)` - 32px
- XL: `var(--spacing-xl)` - 48px

## Border Radius

- SM: `var(--radius-sm)` - 6px
- MD: `var(--radius-md)` - 8px
- LG: `var(--radius-lg)` - 12px
- XL: `var(--radius-xl)` - 16px

## Shadows

- SM: `var(--shadow-sm)`
- MD: `var(--shadow-md)`
- LG: `var(--shadow-lg)`

## Custom Component Classes (defined in globals.css)

Use these pre-built classes for common patterns:

- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.card` - Card container (uses elevated background)
- `.input-field` - Form input
- `.focus-outline` - Focus outline (adapts to theme)

### Usage:

```tsx
<button className="btn-primary">Click me</button>
<div className="card">Card content</div>
<input className="input-field" />
```

## When to use custom classes vs CSS vars

**Use custom classes** (`.btn-primary`, `.card`, etc.) for:

- Common, reusable component patterns
- Keeping component code clean

**Use CSS vars with Tailwind arbitrary values** for:

- One-off styling
- Component-specific variations
- Example: `className="bg-[var(--background-elevated)] p-[var(--spacing-md)]"`

## Background Elevation Usage

- Use `var(--background)` for page/section backgrounds
- Use `var(--background-elevated)` for cards, containers, sections
- Use `var(--background-elevated-high)` ONLY for floating overlays (modals, dropdowns, tooltips, popovers)
- Do not overuse elevated-high - reserve it for elements that truly float above other content

## Rules

- NEVER use hardcoded colors (no #3b82f6, no rgb values)
- NEVER use arbitrary Tailwind spacing (no p-7, no text-gray-650)
- ALWAYS use CSS variables or custom classes from globals.css
- Dark mode is handled automatically - don't add manual dark: variants
- When creating new reusable components, add custom classes to globals.css using @apply
