import {
  Version
} from "../../chunk-DEPT4GGF.js";
import {
  versionService
} from "../../chunk-MBHZMFKK.js";
import {
  describe,
  globalExpect,
  test,
  vi
} from "../../chunk-W5G2YPO2.js";
import "../../chunk-Y7QVS5WJ.js";
import "../../chunk-JIJY4HBJ.js";
import "../../chunk-SHWOPMLQ.js";
import "../../chunk-3BAJKM2I.js";
import "../../chunk-FM6ZVAEW.js";
import "../../chunk-F3I2LZCT.js";
import "../../chunk-NW46I6EW.js";
import "../../chunk-25IMI7TH.js";
import "../../chunk-S5JEIN5Q.js";
import "../../chunk-GUIGFDCI.js";
import "../../chunk-RRAHFBIB.js";
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
