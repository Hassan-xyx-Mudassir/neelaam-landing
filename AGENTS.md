## Feature-Based Folder Structure

This project follows a feature-based folder structure. Each feature lives under `src/features/<feature-name>/` with the following conventions:

```
src/features/<feature-name>/
├── components/     # React components specific to this feature
│   └── index.ts    # Barrel export
├── hooks/          # Custom hooks (e.g., useRegistrationStore)
├── interfaces/     # TypeScript interfaces (types that describe shapes)
├── schemas/        # Zod validation schemas
├── services/       # API calls, external service integrations
├── tests/          # Feature-specific tests
├── service.ts      # Suffix for individual service files (e.g., auth.service.ts)
└── interface.ts    # Suffix for individual interface files (e.g., user.interface.ts)
```

### Naming Conventions

- **Services**: Suffix with `service.ts` (e.g., `auth.service.ts`, `user.service.ts`)
- **Interfaces**: Suffix with `interface.ts` (e.g., `user.interface.ts`, `auth.interface.ts`)
- **Schemas**: Name after the form/feature (e.g., `registration.schema.ts`, `phone.schema.ts`)
- **Hooks**: Prefix with `use` (e.g., `use-registration-store.ts`)
- **Components**: PascalCase filenames (e.g., `PhoneInput.tsx`, `StepIndicator.tsx`)
- **Constants**: Suffix with `.constant.ts` (e.g., `timeline-steps.constant.ts`, `profession-labels.constant.ts`)

### Constants

Feature-specific constants (data arrays, config objects, lookup maps) go in `src/features/<feature-name>/constants/`.
Cross-feature shared constants go in `src/features/shared/constants/`.

Each constants file must:

- Export a typed constant (not `const x = [...]` without a type)
- Define the type in the corresponding `interfaces/` folder or inline if trivial
- Use an `index.ts` barrel export

```
src/features/client-auth/constants/
├── index.ts              # Barrel export
└── timeline-steps.ts     # Typed constant array
```

### Route Structure

Routes live under `src/app/` following Next.js App Router file-based conventions:

- `layout.tsx` - Layout wrapper for nested routes
- `page.tsx` - Page component for the route
- `loading.tsx` - Loading UI for the route
- `error.tsx` - Error boundary for the route
- Group routes in folders: `auth/client/page.tsx`, `auth/provider/page.tsx`
- Use route groups `(folder)` for layout organization without affecting URL

### Styling

Use **TailwindCSS** for all styling. Apply styles via the `className` prop on HTML/React elements.

```tsx
// ✅ Correct — TailwindCSS
<div className="flex items-center justify-center px-4">
  <h1 className="text-lg font-bold text-primary">Hello</h1>
</div>

// ❌ Incorrect — Inline styles for layout
<div style={{ display: 'flex', alignItems: 'center' }}>
  ...
</div>
```

**Gradients**: Use TailwindCSS gradient utilities for gradient backgrounds:

```tsx
// ✅ Correct — TailwindCSS gradient
<div className="bg-gradient-to-r from-sky-500 to-violet-500">
  {/* content */}
</div>

// ✅ Also correct — CSS gradient for complex/animated gradients
<div className="bg-[linear-gradient(to_right,#0ea5e9,#8b5cf6)]">
  {/* content */}
</div>
```

### TypeScript Rules

- **Never use `any`** — always provide explicit types
- Components with no props must be typed as `React.FC` (e.g., `const MyComponent: React.FC = () => { ... }`)
- Components with props must have a typed props interface
- **Do NOT `import React from 'react'`** — redundant in React 19
- **Icon props interfaces** (e.g., `IconProps`) must live in `interfaces/` folder, not inline in component files

### Dark / Light Mode Colors

This app supports dark and light mode via **semantic color tokens** defined in the TailwindCSS configuration. Every UI change MUST use these tokens — never hardcode Tailwind color classes like `bg-white`, `text-gray-900`, or `border-gray-200`.

**Semantic token mapping** (light → dark values are handled automatically):

| Hardcoded (❌)                        | Semantic (✅)                     | Purpose                           |
| ------------------------------------- | --------------------------------- | --------------------------------- |
| `bg-white`                            | `bg-card`                         | Card / surface backgrounds        |
| `bg-gray-50` / `bg-gray-100`          | `bg-background`                   | Screen backgrounds                |
| `text-gray-900` / `text-gray-800`     | `text-foreground`                 | Primary text                      |
| `text-gray-500` / `text-gray-600`     | `text-muted-foreground`           | Secondary / helper text           |
| `border-gray-200` / `border-gray-300` | `border-border`                   | Borders & dividers                |
| `text-sky-500` / `text-sky-600`       | `text-primary`                    | Brand / accent text               |
| `bg-sky-500` / `bg-sky-600`           | `bg-primary`                      | Brand / accent backgrounds        |
| `text-white` on primary bg            | `text-primary-foreground`         | Text on primary-colored surfaces  |
| `text-red-500` / `text-red-600`       | `text-destructive`                | Error / danger text               |
| `bg-red-500`                          | `bg-destructive`                  | Error / danger backgrounds        |
| `bg-red-50`                           | `bg-destructive/10`               | Error / danger subtle backgrounds |
| `text-green-500` / `text-emerald-500` | `text-success`                    | Success text                      |
| `bg-green-500`                        | `bg-success`                      | Success backgrounds               |
| `bg-gray-100` / `bg-gray-50` (muted)  | `bg-muted`                        | Muted / subtle backgrounds        |
| `text-gray-400`                       | `text-muted-foreground`           | Tertiary / placeholder text       |
| `bg-sky-50` / `bg-sky-100`            | `bg-primary/5` or `bg-primary/10` | Brand subtle backgrounds          |
| `border-sky-100` / `border-sky-200`   | `border-primary/20`               | Brand subtle borders              |
| `bg-violet-50`                         | `bg-accent/5`                     | Accent subtle backgrounds         |
| `text-gray-700`                       | `text-foreground`                 | Medium-weight text                |

**Rules:**

1. **Never use `dark:` variants with semantic tokens.** The tokens already contain dark values in the TailwindCSS config. Writing `bg-white dark:bg-card` is wrong — just write `bg-card`.
2. **Gradient colors** as hex strings in CSS `linear-gradient()` are fine — they are not className tokens.
3. **`text-white` on gradient backgrounds** is fine — white text on a colored gradient is theme-independent.

### Shared Code

Cross-feature shared code goes in `src/features/shared/` following the same structure.
Shared auth code (used by both client and clinician flows) goes in `src/features/shared-auth/`.