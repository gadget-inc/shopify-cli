import {
  versionService
} from "./chunk-EW7LHJH2.js";
import {
  base_command_default
} from "./chunk-WP433TI2.js";
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
//# sourceMappingURL=chunk-XVGFTLTU.js.map
