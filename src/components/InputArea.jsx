import React, { useState } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

function InputArea(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  function handleClick(event) {
    props.addFun(input);
    event.preventDefault();
    setInput("");
  }
  return (
    <form className="form">
      <input
        onChange={handleChange}
        value={input}
        type="text"
        placeholder="Type to add..."
      />
      <button onClick={handleClick}>
        <AddCircleOutlineRoundedIcon />
      </button>
    </form>
  );
}

export default InputArea;
