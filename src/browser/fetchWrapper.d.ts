import type { BetterRequestInit, ObjectOrArray } from "@aryaemami59/ts-util-types";
/**
 * An improvement on the native `fetch` method. Specify T to make sure the return value is type safe.
 * @async
 * @param url The api endpoint.
 * @param init An Optional requestInit object.
 * @see {@link fetch}
 */
declare const fetchWrapper: <T extends ObjectOrArray>(url: string, init?: BetterRequestInit) => Promise<T>;
export default fetchWrapper;
