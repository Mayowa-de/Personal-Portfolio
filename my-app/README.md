 # MayorTech Portfolio

A responsive personal portfolio for MayorTech, built to showcase full-stack development work, design thinking, and selected projects. The interface follows the supplied desktop and mobile references with a dark charcoal and orange visual system, a responsive laptop hero composition, and motion-based section reveals.

## Features

- Responsive desktop and mobile layouts
- Dark and light theme toggle
- Animated mobile navigation with `AnimatePresence`
- Framer Motion entrance, hover, and tap interactions
- Laptop-focused hero visual using the supplied asset
- About section with profile, experience statistics, and developer profile card
- Featured projects with technology tags
- Tools and technology section
- Four-step development process
- Testimonials section
- Contact call-to-action with email link and inquiry form
- Accessible navigation labels, button labels, image alt text, and keyboard-friendly controls

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 3
- Framer Motion
- Lucide React
- React Icons
- JetBrains Mono variable font

Tailwind utilities are used for layout, spacing, responsive behavior, and component-level styling. `src/index.css` contains the shared theme tokens, typography setup, color variables, and the reference-specific laptop visual treatment.

## Getting Started

### Requirements

- Node.js 18 or newer
- Bun, npm, or another compatible package manager

### Install dependencies

Using Bun:

```bash
bun install
```

Using npm:

```bash
npm install
```

### Start the development server

```bash
bun run dev
```

Or with npm:

```bash
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite development server with hot reload. |
| `bun run build` | Run the TypeScript project check and create a production build. |
| `bun run lint` | Run ESLint across the project. |
| `bun run preview` | Serve the production build locally. |

The same commands can be run with `npm run` when using npm.

## Project Structure

```text
src/
├── App.tsx                 # Page composition and theme state
├── index.css               # Theme tokens, base styles, and laptop visual rules
├── main.tsx                # React entry point
├── assets/                 # Images, logos, icons, and the local font
└── components/
  ├── Header.tsx          # Navigation, mobile menu, and theme toggle
  ├── Hero.tsx             # Intro content, laptop visual, and social links
  ├── About.tsx            # Profile, statistics, and working principles
  ├── Project.tsx          # Featured project cards
  ├── Process.tsx          # Tools, process steps, and testimonials
  ├── Reveal.tsx           # Reusable viewport reveal animation
  └── Footer.tsx           # Contact form, email CTA, and social footer
```

## Customizing Content

Most portfolio content is defined directly in the components:

- Update the hero copy and social URLs in `src/components/Hero.tsx`.
- Update profile details and statistics in `src/components/About.tsx`.
- Update project images, descriptions, and tags in `src/components/Project.tsx`.
- Update tools, process steps, and testimonials in `src/components/Process.tsx`.
- Update the contact email and form copy in `src/components/Footer.tsx`.

Place new images and logos in `src/assets/` and import them from the relevant component. Keep descriptive `alt` text for meaningful images; use an empty `alt` value only for decorative images.

## Theme and Styling

The theme is controlled by the `light` class on the document root. Shared colors are defined as CSS variables in `src/index.css`, including:

- `--background`
- `--surface`
- `--surface-raised`
- `--ink`
- `--muted`
- `--accent`
- `--line`

Use these variables when adding custom CSS so new sections remain consistent in both themes. Use Tailwind responsive utilities for layout changes at mobile and desktop widths.

## Animation Guidelines

`Reveal.tsx` provides the default viewport reveal animation. Framer Motion is also used for:

- Hero entrance transitions
- Mobile menu enter and exit states
- Button hover and tap feedback
- Project, tool, process, and testimonial reveals

Keep animations short and purposeful. Prefer opacity, small translations, and subtle scale changes so the laptop composition and page layout remain stable.

## Build and Deployment

Create a production build with:

```bash
bun run build
```

The generated files are written to `dist/`. The project can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider that supports a Vite build. Configure the provider to publish the `dist` directory after running the build command.

No environment variables or backend services are currently required. The contact form currently prevents a browser reload and should be connected to an email or form service before production use.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
