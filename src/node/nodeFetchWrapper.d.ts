import type { AddToRequestInit, ObjectOrArray } from "@aryaemami59/ts-util-types";
import type { RequestInit } from "node-fetch";
export type NodeFetchRequestInit = RequestInit & AddToRequestInit;
/**
 * An improvement node-fetch's `fetch` method. Specify T to make sure the return value is type safe.
 * @async
 * @param url The api endpoint.
 * @param init An Optional requestInit object.
 * @see {@link fetch}
 */
declare const nodeFetchWrapper: <T extends ObjectOrArray>(url: string, init?: NodeFetchRequestInit) => Promise<T>;
export default nodeFetchWrapper;
