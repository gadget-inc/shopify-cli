import {
  versionService
} from "./chunk-MBHZMFKK.js";
import {
  base_command_default
} from "./chunk-Y7QVS5WJ.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/version.ts
init_cjs_shims();
var Version = class extends base_command_default {
  static {
    this.description = "Shopify CLI version currently installed.";
  }
  async run() {
    await versionService();
  }
};

export {
  Version
};
//# sourceMappingURL=chunk-DEPT4GGF.js.map
