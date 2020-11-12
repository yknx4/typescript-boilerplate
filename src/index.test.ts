import { foo } from ".";

describe("foo", () => {
  test("should bar the input", () => {
    expect(foo("bar")).toStrictEqual("bar-bar");
  });
});
