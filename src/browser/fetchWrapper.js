/**
 * An improvement on the native `fetch` method. Specify T to make sure the return value is type safe.
 * @async
 * @param url The api endpoint.
 * @param init An Optional requestInit object.
 * @see {@link fetch}
 */
const fetchWrapper = async (url, init) => {
    try {
        const response = await fetch(url, init);
        if (!response.ok) {
            throw new Error(`response failed ${response.status}`, {
                cause: response.status,
            });
        }
        const data = (await response.json());
        return data;
    }
    catch (error) {
        console.dir(error, { depth: null });
        throw error;
    }
};
export default fetchWrapper;
