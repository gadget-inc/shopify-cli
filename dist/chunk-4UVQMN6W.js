import {
  openURL
} from "./chunk-R4IK327O.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/services/commands/search.ts
init_cjs_shims();
async function searchService(query) {
  let searchParams = new URLSearchParams();
  searchParams.append("search", query ?? ""), await openURL(`https://shopify.dev?${searchParams.toString()}`);
}

export {
  searchService
};
//# sourceMappingURL=chunk-4UVQMN6W.js.map
