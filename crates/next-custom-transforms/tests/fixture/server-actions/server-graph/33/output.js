/* __next_internal_action_entry_do_not_use__ {"803128060c414d59f8552e4788b846c0d2b7f74743":{"exported":"$$RSC_SERVER_CACHE_0","original":"fn","span":{"start":20,"end":80}}} */ import { registerServerReference } from "private-next-rsc-server-reference";
import { encryptActionBoundArgs, decryptActionBoundArgs } from "private-next-rsc-action-encryption";
import { cache as $$cache__ } from "private-next-rsc-cache-wrapper";
const v = 'world';
export var /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ $$RSC_SERVER_CACHE_0 = $$cache__("default", "803128060c414d59f8552e4788b846c0d2b7f74743", 0, async function fn() {
    return 'hello, ' + v;
});
Object.defineProperty($$RSC_SERVER_CACHE_0, "name", {
    "value": "fn",
    "writable": false
});
var fn = registerServerReference($$RSC_SERVER_CACHE_0, "803128060c414d59f8552e4788b846c0d2b7f74743", null);
export async function Component() {
    const data = await fn();
    return <div>{data}</div>;
}
