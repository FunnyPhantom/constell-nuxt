export default function patcher<
  B extends Record<string, any>,
  P extends Partial<B>
>(baseItem: B, patch: P) {
  for (const key in patch) {
    if (patch[key] === null) {
      delete baseItem[key];
    } else if (
      typeof patch[key] === "object" &&
      typeof baseItem[key] === "object"
    ) {
      patcher(baseItem[key], patch[key]);
    } else if (patch[key] !== undefined) {
      baseItem[key] = patch[key];
    }
  }
  return baseItem;
}
