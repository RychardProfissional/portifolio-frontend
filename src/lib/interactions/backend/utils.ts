export function createManager<T>(MockClass: new () => T, RealClass: new () => T): T {
  if (process.env.NODE_ENV === "test") return new MockClass();
  return new RealClass();
}
