import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const changeButtonColor = () => {
    setButtonColor(newButtonColor);
  };
  return (
    <div>
      <button
        onClick={changeButtonColor}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" name="" id="" />
    </div>
  );
}

export default App;
