import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const changeButtonColor = () => {
    setButtonColor(newButtonColor);
  };
  return (
    <div>
      <button
        disabled={disabled}
        onClick={changeButtonColor}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        type="checkbox"
        name=""
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
