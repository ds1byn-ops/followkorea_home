import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// Resolve content globs relative to THIS config file so scanning works
// regardless of the process working directory. Force forward slashes —
// fast-glob (used by Tailwind) treats backslashes as escapes on Windows.
const root = dirname(fileURLToPath(import.meta.url)).replace(/\\/g, '/');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `${root}/index.html`,
    `${root}/*.tsx`,
    `${root}/components/**/*.{ts,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
