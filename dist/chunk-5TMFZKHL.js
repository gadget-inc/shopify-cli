import {
  searchService
} from "./chunk-EBZM4MXK.js";
import {
  base_command_default
} from "./chunk-BPC73D3P.js";
import {
  require_lib
} from "./chunk-3FBDJEGD.js";
import {
  __toESM,
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/search.ts
init_cjs_shims();
var import_core = __toESM(require_lib(), 1), Search = class _Search extends base_command_default {
  static {
    this.description = "Starts a search on shopify.dev.";
  }
  static {
    this.usage = "search [query]";
  }
  static {
    this.examples = [
      `# open the search modal on Shopify.dev
    shopify search

    # search for a term on Shopify.dev
    shopify search <query>

    # search for a phrase on Shopify.dev
    shopify search "<a search query separated by spaces>"
    `
    ];
  }
  static {
    this.args = {
      query: import_core.Args.string()
    };
  }
  async run() {
    let { args } = await this.parse(_Search);
    await searchService(args.query);
  }
};

export {
  Search
};
//# sourceMappingURL=chunk-5TMFZKHL.js.map
