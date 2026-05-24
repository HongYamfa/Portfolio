import path from "path";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import postcssNesting from "postcss-nesting";
import postcssCustomMedia from "postcss-custom-media";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    postcssImport({
      path: [
        path.posix.join(process.cwd(), "assets", "css"),
      ],
    }),
    postcssUrl([
      {
        filter: "**/typeface-*/files/*",
        url: (asset) => {
          return path.posix.join("/", "fonts", path.basename(asset.pathname));
        },
      },
    ]),
    postcssNesting,
    postcssCustomMedia,
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [
          postcssPresetEnv,
          cssnano,
          purgeCSSPlugin({
            content: ["./hugo_stats.json"],
            defaultExtractor: (content) => {
              let els = JSON.parse(content).htmlElements;
              return els.tags.concat(els.classes, els.ids);
            },
            safelist: ["data-theme"],
          }),
        ]
      : []),
  ],
};
