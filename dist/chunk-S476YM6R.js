import {
  packageManagerFromUserAgent
} from "./chunk-MZEENT6E.js";
import {
  currentProcessIsGlobal,
  inferPackageManagerForGlobalCLI,
  outputContent,
  outputToken
} from "./chunk-R4IK327O.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// ../cli-kit/dist/public/node/upgrade.js
init_cjs_shims();
function cliInstallCommand() {
  let isGlobal = currentProcessIsGlobal(), packageManager = packageManagerFromUserAgent();
  return packageManager === "unknown" && (packageManager = inferPackageManagerForGlobalCLI()), packageManager === "unknown" && (packageManager = "npm"), packageManager === "yarn" ? `${packageManager} ${isGlobal ? "global " : ""}add @shopify/cli@latest` : `${packageManager} ${packageManager === "pnpm" ? "add" : "install"} ${isGlobal ? "-g " : ""}@shopify/cli@latest`;
}
function getOutputUpdateCLIReminder(version) {
  return outputContent`💡 Version ${version} available! Run ${outputToken.genericShellCommand(cliInstallCommand())}`.value;
}

export {
  cliInstallCommand,
  getOutputUpdateCLIReminder
};
//# sourceMappingURL=chunk-S476YM6R.js.map
