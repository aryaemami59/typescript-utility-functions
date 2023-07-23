import type {
  BetterRequestInit,
  ObjectOrArray,
} from "@aryaemami59/ts-util-types";
/**
 * An improvement on the native `fetch` method. Specify T to make sure the return value is type safe.
 * @async
 * @param url The api endpoint.
 * @param init An Optional requestInit object.
 * @see {@link fetch}
 */
const fetchWrapper = async <T extends ObjectOrArray>(
  url: string,
  init?: BetterRequestInit
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

export default fetchWrapper;
