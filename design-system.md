# Design System

All design tokens are defined as CSS variables in `globals.css`.

## Colors

- Primary: `var(--color-primary)`
- Secondary: `var(--color-secondary)`
- Muted: `var(--color-muted)`
- Border: `var(--color-border)`
- Background: `var(--background)`
- Foreground: `var(--foreground)`

Dark mode adjusts these automatically via `@media (prefers-color-scheme: dark)`.

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
- `.card` - Card container
- `.input-field` - Form input

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
- Example: `className="bg-[var(--color-primary)] p-[var(--spacing-md)]"`

## Rules

- NEVER use hardcoded colors (no #3b82f6, no rgb values)
- NEVER use arbitrary Tailwind spacing (no p-7, no text-gray-650)
- ALWAYS use CSS variables or custom classes from globals.css
- Dark mode is handled automatically - don't add manual dark: variants
- When creating new reusable components, add custom classes to globals.css using @apply
