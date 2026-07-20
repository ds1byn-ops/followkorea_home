import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Point Tailwind at its config explicitly — the build process may run with a
// working directory outside the project, in which case Tailwind's default
// config lookup fails and it silently emits base styles only.
const here = dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    tailwindcss: { config: join(here, 'tailwind.config.js') },
    autoprefixer: {},
  },
};
