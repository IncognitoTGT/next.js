/* __next_internal_action_entry_do_not_use__ {"803128060c414d59f8552e4788b846c0d2b7f74743":{"exported":"$$RSC_SERVER_CACHE_0","original":"fetch","span":{"start":39,"end":147}}} */ import { registerServerReference } from "private-next-rsc-server-reference";
import { encryptActionBoundArgs, decryptActionBoundArgs } from "private-next-rsc-action-encryption";
import { cache as $$cache__ } from "private-next-rsc-cache-wrapper";
export var /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ $$RSC_SERVER_CACHE_0 = $$cache__("default", "803128060c414d59f8552e4788b846c0d2b7f74743", 0, async function fetch1() {
    return fetch('https://example.com').then((res)=>res.json());
});
Object.defineProperty($$RSC_SERVER_CACHE_0, "name", {
    "value": "fetch",
    "writable": false
});
export const api = {
    product: {
        fetch: registerServerReference($$RSC_SERVER_CACHE_0, "803128060c414d59f8552e4788b846c0d2b7f74743", null)
    }
};
