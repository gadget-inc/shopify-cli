import {
  logout
} from "./chunk-SLB4J5ZD.js";
import {
  base_command_default
} from "./chunk-QLQOUZRR.js";
import {
  outputSuccess
} from "./chunk-HK7EWMMZ.js";
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
//# sourceMappingURL=chunk-B26PZ2EF.js.map
