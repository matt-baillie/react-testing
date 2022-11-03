import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);
  // disable button when checkbox is checked
  //    - boolean (in state)
  //    - name it disabled and set to false
  //    - onChange(e => setDisabled(e.target.checked))
  const changeButtonColor = () => {
    setButtonColor(newButtonColor);
  };
  return (
    <div>
      <button
        disabled={disabled}
        onClick={changeButtonColor}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
