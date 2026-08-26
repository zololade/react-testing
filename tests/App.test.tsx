import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { type ReactNode } from "react";

import { App } from "../src/App";

function setup(jsx: ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe("App", () => {
  test("render h1 element", () => {
    setup(<App />);
    expect(screen.getByRole("heading", { name: /hello world/i, level: 1 })).toBeInTheDocument();
  });
});
