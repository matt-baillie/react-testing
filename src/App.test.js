import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial colour, and updates when clicked", () => {
  render(<App />);
  // find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //click button
  fireEvent.click(colorButton);
  // expect the background-color of blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //Expect the button text to be "Change to red"
  expect(colorButton).toHaveTextContent("Change to red");
});
