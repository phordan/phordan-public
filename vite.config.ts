import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    {enforce: "pre", ...mdx({ include: /\.mdx$/ })},
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
});

