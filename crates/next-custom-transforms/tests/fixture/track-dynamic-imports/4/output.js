import { trackAsyncFunction as $$trackAsyncFunction__ } from 'private-next-rsc-track-dynamic-import';
{
    if (typeof __turbopack_load__ === 'function') {
        __turbopack_load__ = /*#__PURE__*/ $$trackAsyncFunction__("__turbopack_load__", __turbopack_load__);
    }
}export default async function Page() {
    await __turbopack_load__('some-chunk');
    return null;
}
