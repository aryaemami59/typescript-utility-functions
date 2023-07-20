const join = <const T extends readonly string[], const D extends string>(
  array: T,
  separator?: D
) => {
  return array.join(separator) as `${T[number]}`;
};

// export type Props<
//   T extends readonly string[],
//   D extends string,
// > = T extends readonly [
//   infer U extends string,
//   ...infer V extends readonly string[],
// ]
//   ? `${U}`
//   : `${V}`;

// export type H = Props<readonly ["a", "bbb"], ", ">;
// const element = join(["a", "bbb"]);

export default join;
