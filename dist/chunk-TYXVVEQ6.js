import {
  logout
} from "./chunk-GN63NNNY.js";
import {
  base_command_default
} from "./chunk-Y7QVS5WJ.js";
import {
  outputSuccess
} from "./chunk-RRAHFBIB.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/auth/logout.ts
init_cjs_shims();
var Logout = class extends base_command_default {
  static {
    this.description = "Logs you out of the Shopify account or Partner account and store.";
  }
  async run() {
    await logout(), outputSuccess("Logged out from Shopify");
  }
};

export {
  Logout
};
//# sourceMappingURL=chunk-TYXVVEQ6.js.map
