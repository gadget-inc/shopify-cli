import {
  prompts
} from "./chunk-KM4NCIJC.js";
import {
  staticService
} from "./chunk-YICSECKR.js";
import {
  asyncTasks
} from "./chunk-47PJSA7G.js";
import {
  base_command_default
} from "./chunk-QLQOUZRR.js";
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
//# sourceMappingURL=chunk-GWCR4EIO.js.map
