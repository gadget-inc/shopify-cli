import {
  prompts
} from "./chunk-ZWE4KX3Z.js";
import {
  staticService
} from "./chunk-D4R7U2BM.js";
import {
  asyncTasks
} from "./chunk-XI5CRMNI.js";
import {
  base_command_default
} from "./chunk-J5MRHWYQ.js";
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
//# sourceMappingURL=chunk-P4XTNEFI.js.map
