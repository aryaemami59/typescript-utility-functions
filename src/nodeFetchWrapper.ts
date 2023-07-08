import type {
  AddToRequestInit,
  ObjectOrArray,
} from "@aryaemami59/ts-util-types";
import type { RequestInit } from "node-fetch";
import fetch from "node-fetch";

export type NodeFetchRequestInit = RequestInit & AddToRequestInit;

/**
 * An improvement node-fetch's `fetch` method. Specify T to make sure the return value is type safe.
 * @async
 * @param url The api endpoint.
 * @param init An Optional requestInit object.
 * @see {@link fetch}
 */
const nodeFetchWrapper = async <T extends ObjectOrArray>(
  url: string,
  init?: NodeFetchRequestInit
): Promise<T> => {
  try {
    const response = await fetch(url, init);
    if (!response.ok) {
      throw new Error(`response failed ${response.status}`, {
        cause: response.status,
      });
    }
    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    console.dir(error, { depth: null });
    throw error;
  }
};

nodeFetchWrapper("https://aryaemami59.github.io/simplysuppliesAPI/items.json");

export default nodeFetchWrapper;
