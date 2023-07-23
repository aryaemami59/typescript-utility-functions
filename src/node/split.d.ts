import type { Split } from "@aryaemami59/ts-util-types";
declare const split: <const S extends string, const D extends string>(str: S, separator: D) => Split<S, D>;
export default split;
