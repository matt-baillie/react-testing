import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial colour", () => {
  render(<App />);
  // find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);
});
