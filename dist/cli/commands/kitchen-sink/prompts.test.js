import {
  KitchenSinkPrompts
} from "../../../chunk-FVG5NCD2.js";
import {
  prompts
} from "../../../chunk-KM4NCIJC.js";
import {
  describe,
  globalExpect,
  test,
  vi
} from "../../../chunk-Y53XECL6.js";
import "../../../chunk-QLQOUZRR.js";
import "../../../chunk-6R3NVRTF.js";
import "../../../chunk-SHWOPMLQ.js";
import "../../../chunk-UVEXHIUL.js";
import "../../../chunk-X3MWXAHO.js";
import "../../../chunk-52TDN5BL.js";
import "../../../chunk-RUEDYOFG.js";
import "../../../chunk-25IMI7TH.js";
import "../../../chunk-DHO2PUCK.js";
import "../../../chunk-DIRJ6ICN.js";
import "../../../chunk-HMDWNGIV.js";
import "../../../chunk-HK7EWMMZ.js";
import "../../../chunk-B5EXYCV3.js";
import "../../../chunk-75LV6AQS.js";
import "../../../chunk-57Q6OQG4.js";
import "../../../chunk-VSKRQ3JT.js";
import "../../../chunk-G5R6YD27.js";
import "../../../chunk-3I3GQNEW.js";
import "../../../chunk-G2ZZKGSV.js";
import "../../../chunk-MP5RLDFN.js";
import "../../../chunk-XE5EOEBL.js";
import "../../../chunk-5DBS6QOU.js";
import "../../../chunk-B3YWYURY.js";
import "../../../chunk-CDBXAE2F.js";
import {
  init_cjs_shims
} from "../../../chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/prompts.test.ts
init_cjs_shims();
vi.mock("../../services/kitchen-sink/prompts.js");
describe("kitchen-sink all command", () => {
  test("launches service", async () => {
    vi.mocked(prompts).mockResolvedValue(), await KitchenSinkPrompts.run([], import.meta.url), globalExpect(prompts).toHaveBeenCalled();
  });
});
//# sourceMappingURL=prompts.test.js.map
