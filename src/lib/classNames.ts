export type Mods = Record<string, boolean | string | undefined>;

/**
 * Creates a space-separated list of class names, filtered by the given `mods` object.
 *
 * @param cls - the main class name
 * @param mods - an object whose keys are class names and values are `true` or a string
 * @param additional - additional class names that should be included, regardless of the `mods` object
 * @returns a space-separated list of class names
 */
export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)

      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
