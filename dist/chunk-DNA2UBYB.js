import {
  prompts
} from "./chunk-RM5VQVJ5.js";
import {
  base_command_default
} from "./chunk-Y7QVS5WJ.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/prompts.ts
init_cjs_shims();
var KitchenSinkPrompts = class extends base_command_default {
  static {
    this.description = "View the UI kit components prompts";
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await prompts();
  }
};

export {
  KitchenSinkPrompts
};
//# sourceMappingURL=chunk-DNA2UBYB.js.map
