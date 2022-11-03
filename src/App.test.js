import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

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

test("initial conditions", () => {
  render(<App />);
  // Check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // Check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

// Add Checkbox Functionality
// - when checked, button disabled
//    -
test("Checkbox disables button on first click and enables button on second click", () => {
  render(<App />);
  // Select elements
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // Check checkbox and check button disabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // Uncheck Checkbox and check if button is re-enabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

// Check the bkg color when the button is disabled
test("Disabled button has gray background and reverts to red", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // Flow 1
  // disable btn
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  // Flow 2
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

// medium violet red
// midnightblue

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
