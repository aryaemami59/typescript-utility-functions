import type {
  ExclusiveRange,
  StringToNumber,
} from "@aryaemami59/ts-util-types";

export const parseInteger = <const S extends `${number}`>(
  string: S,
  radix?: ExclusiveRange<37, 2>
): StringToNumber<S> => parseInt(string, radix) as StringToNumber<S>;

const element = parseInteger("0.");

export default parseInteger;
