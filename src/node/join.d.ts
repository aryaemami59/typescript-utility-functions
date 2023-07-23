import type { Join, JoinableItem } from "@aryaemami59/ts-util-types";
declare const join: <const T extends readonly JoinableItem[], const D extends string = ",">(array: T, separator?: D | undefined) => Join<T, D>;
export default join;
