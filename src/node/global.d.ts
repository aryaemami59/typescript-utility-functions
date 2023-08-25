import type {
  AnyObject,
  Join,
  JoinableItem,
  ObjectEntries,
} from "@aryaemami59/ts-util-types";

declare global {
  interface ReadonlyArray<T extends JoinableItem> {
    join<const U extends readonly T[], const D extends string = ",">(
      separator?: D
    ): Join<U, D>;
  }

  // interface String {
  //   toUpperCase<const S extends string>(): Uppercase<S>;
  //   toLowerCase<const S extends string>(): Lowercase<S>;
  // }

  interface ObjectConstructor {
    entries<const TObj extends AnyObject>(o: TObj): ObjectEntries<TObj>;
    keys<const TObj extends AnyObject>(o: TObj): (keyof TObj)[];
  }
}
