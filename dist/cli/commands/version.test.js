import {
  Version
} from "../../chunk-ARV6ZCT2.js";
import {
  versionService
} from "../../chunk-TJZ64TMJ.js";
import {
  describe,
  globalExpect,
  test,
  vi
} from "../../chunk-W5G2YPO2.js";
import "../../chunk-J5MRHWYQ.js";
import "../../chunk-JMOSON2W.js";
import "../../chunk-SHWOPMLQ.js";
import "../../chunk-4SY7PV5L.js";
import "../../chunk-MG4XIDFH.js";
import "../../chunk-AOW47FBP.js";
import "../../chunk-SE4ZIDAV.js";
import "../../chunk-25IMI7TH.js";
import "../../chunk-B26QDYDN.js";
import "../../chunk-N4O3YZ3H.js";
import "../../chunk-T5UA4AJA.js";
import "../../chunk-75LV6AQS.js";
import "../../chunk-EG6MBBEN.js";
import "../../chunk-3FBDJEGD.js";
import "../../chunk-UMUTXITN.js";
import "../../chunk-HMDWNGIV.js";
import "../../chunk-G5R6YD27.js";
import "../../chunk-G2ZZKGSV.js";
import "../../chunk-UV5N2VL7.js";
import "../../chunk-XE5EOEBL.js";
import "../../chunk-B5EXYCV3.js";
import {
  init_cjs_shims
} from "../../chunk-PKR7KJ6P.js";

// src/cli/commands/version.test.ts
init_cjs_shims();
vi.mock("../services/commands/version.js");
describe("version command", () => {
  test("launches service", async () => {
    vi.mocked(versionService).mockResolvedValue(), await Version.run([], import.meta.url), globalExpect(versionService).toHaveBeenCalled();
  });
});
//# sourceMappingURL=version.test.js.map
