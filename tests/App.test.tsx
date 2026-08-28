import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { type ReactNode } from "react";

import { App, Input } from "../src/App";

function setup(jsx: ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe("App", () => {
  test("input gets value", async () => {
    const { user } = setup(<App />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    await user.type(input, "React");

    expect(input.value).toBe("React");
  });

  test("if input was changed", async () => {
    let mock = vi.fn<() => void>();
    const { user } = setup(<Input handleChange={mock} inputValue="" />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    await user.type(input, "React");
    expect(mock).toHaveBeenCalledTimes(5);
  });
});
