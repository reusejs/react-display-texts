import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: [
    "index.js",
    "src/FormHeading/index.js",
    "src/FormLabel/index.js",
    "src/Link/index.js",
    "src/PageTitle/index.js",
    "src/Paragraph/index.js",
  ],
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
  ],
  preserveModules: true,
  external: ["react", "react-dom"],
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    resolve(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
  ],
};
