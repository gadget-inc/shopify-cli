import {
  logout
} from "./chunk-3SDCN4UD.js";
import {
  base_command_default
} from "./chunk-WP433TI2.js";
import {
  outputSuccess
} from "./chunk-R4IK327O.js";
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
//# sourceMappingURL=chunk-KSHBKAPK.js.map
