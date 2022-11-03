import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const changeButtonColor = () => {
    setButtonColor(newButtonColor);
  };
  const main = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const buttonBox = {
    width: "15rem",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={main}>
      <div style={buttonBox}>
        <button
          disabled={disabled}
          onClick={changeButtonColor}
          style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        >
          Change to {replaceCamelWithSpaces(newButtonColor)}
        </button>
        <br />
        <label htmlFor="disable-button-checkbox">Disable button</label>
        <input
          type="checkbox"
          name=""
          id="disable-button-checkbox"
          defaultChecked={disabled}
          aria-checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default App;
