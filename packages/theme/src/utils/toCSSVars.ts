export function toCSSVariables(obj: Record<string, any>, prefix = "--") {
  const entries: Record<string, string> = {};

  function walk(obj: any, path: string[] = []) {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object") {
        walk(value, [...path, key]);
      } else {
        const varName = prefix + [...path, key].join("-");
        entries[varName] = String(value);
      }
    });
  }

  walk(obj);
  return entries;
}
