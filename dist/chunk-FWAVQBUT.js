import {
  asyncTasks
} from "./chunk-47PJSA7G.js";
import {
  base_command_default
} from "./chunk-QLQOUZRR.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/async.ts
init_cjs_shims();
var KitchenSinkAsync = class extends base_command_default {
  static {
    this.description = "View the UI kit components that process async tasks";
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await asyncTasks();
  }
};

export {
  KitchenSinkAsync
};
//# sourceMappingURL=chunk-FWAVQBUT.js.map
