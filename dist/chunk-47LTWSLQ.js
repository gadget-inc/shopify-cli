import {
  prompts
} from "./chunk-RM5VQVJ5.js";
import {
  staticService
} from "./chunk-IASZ2OWU.js";
import {
  asyncTasks
} from "./chunk-5QQOKGRZ.js";
import {
  base_command_default
} from "./chunk-Y7QVS5WJ.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/index.ts
init_cjs_shims();
var KitchenSinkAll = class extends base_command_default {
  static {
    this.description = "View all the available UI kit components";
  }
  static {
    this.hiddenAliases = ["kitchen-sink all"];
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await staticService(), await prompts(), await asyncTasks();
  }
};

export {
  KitchenSinkAll
};
//# sourceMappingURL=chunk-47LTWSLQ.js.map
