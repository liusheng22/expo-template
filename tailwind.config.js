/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    './app/**/*.{js,tsx,ts,jsx}',
    './components/**/*.{js,tsx,ts,jsx}',
    './hooks/**/*.{js,tsx,ts,jsx}',
    './styles/**/*.{js,tsx,ts,jsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      // NativeWind on native defaults to rem=14, which makes Tailwind's `text-sm`
      // resolve to a fractional font size (0.875rem => 12.25). On iOS, fractional
      // font sizes can cause baseline/vertical-centering issues and glyph clipping
      // (e.g. descenders like "g"). Override `text-sm` to integer px values.
      // fontSize: {
      // },
    },
  },
  plugins: [],
};
