import {
  staticService
} from "./chunk-IASZ2OWU.js";
import {
  base_command_default
} from "./chunk-Y7QVS5WJ.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/static.ts
init_cjs_shims();
var KitchenSinkStatic = class extends base_command_default {
  static {
    this.description = "View the UI kit components that display static output";
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await staticService();
  }
};

export {
  KitchenSinkStatic
};
//# sourceMappingURL=chunk-QA6XLHGQ.js.map
