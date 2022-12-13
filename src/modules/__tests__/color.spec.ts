import { color } from "../color";
import { styles } from "../styles";
const { yellow, reset } = styles;

describe("color", () => {
  it("should return exact value", () => {
    const result = color("test");
    expect(result).toBe(yellow + "test" + reset);
  });
});
