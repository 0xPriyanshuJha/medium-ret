import React from "react";

const Buttons = ({
  outlineColor,
  bgColor,
  textColor,
  text,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`border ${[outlineColor, bgColor, textColor, className].join(
        " "
      )} bg-black px-8 py-2 rounded-full`}
    >
      {text}
    </button>
  );
};

export default Buttons;
