import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Button = ({ title, styles, type, handleClick }) => {
  const snap = useSnapshot(state);
  const generateButtonStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 rounded-md flex-1 ${styles}`}
      style={generateButtonStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
