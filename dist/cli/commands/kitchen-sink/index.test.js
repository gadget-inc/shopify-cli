import {
  KitchenSinkAll
} from "../../../chunk-P4XTNEFI.js";
import {
  prompts
} from "../../../chunk-ZWE4KX3Z.js";
import {
  staticService
} from "../../../chunk-D4R7U2BM.js";
import {
  asyncTasks
} from "../../../chunk-XI5CRMNI.js";
import {
  describe,
  globalExpect,
  test,
  vi
} from "../../../chunk-W5G2YPO2.js";
import "../../../chunk-J5MRHWYQ.js";
import "../../../chunk-JMOSON2W.js";
import "../../../chunk-SHWOPMLQ.js";
import "../../../chunk-4SY7PV5L.js";
import "../../../chunk-MG4XIDFH.js";
import "../../../chunk-AOW47FBP.js";
import "../../../chunk-SE4ZIDAV.js";
import "../../../chunk-25IMI7TH.js";
import "../../../chunk-B26QDYDN.js";
import "../../../chunk-N4O3YZ3H.js";
import "../../../chunk-T5UA4AJA.js";
import "../../../chunk-75LV6AQS.js";
import "../../../chunk-EG6MBBEN.js";
import "../../../chunk-3FBDJEGD.js";
import "../../../chunk-UMUTXITN.js";
import "../../../chunk-HMDWNGIV.js";
import "../../../chunk-G5R6YD27.js";
import "../../../chunk-G2ZZKGSV.js";
import "../../../chunk-UV5N2VL7.js";
import "../../../chunk-XE5EOEBL.js";
import "../../../chunk-B5EXYCV3.js";
import {
  init_cjs_shims
} from "../../../chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/index.test.ts
init_cjs_shims();
vi.mock("../../services/kitchen-sink/prompts.js");
vi.mock("../../services/kitchen-sink/static.js");
vi.mock("../../services/kitchen-sink/async.js");
describe("kitchen-sink all command", () => {
  test("launches service", async () => {
    vi.mocked(asyncTasks).mockResolvedValue(), vi.mocked(staticService).mockResolvedValue(), vi.mocked(prompts).mockResolvedValue(), await KitchenSinkAll.run([], import.meta.url), globalExpect(asyncTasks).toHaveBeenCalled(), globalExpect(staticService).toHaveBeenCalled(), globalExpect(prompts).toHaveBeenCalled();
  });
});
//# sourceMappingURL=index.test.js.map
