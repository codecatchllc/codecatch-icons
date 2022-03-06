import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
const packageJson = require("./package.json");

export default {
  // entry points
  input: "./src/index.ts",
  // output files
  output: [
    {
      file: packageJson.module,
      format: "esm", // ES Modules
      sourcemap: true,
    },
  ],
  // plugins array
  plugins: [
    peerDepsExternal(), // prevents building peerDependencies
    resolve(), // resolves package entrypoints
    typescript({ useTsconfigDeclarationDir: true }), // typescript
  ],
};
