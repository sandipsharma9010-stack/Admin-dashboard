import React, { useState } from "react";
import { useTheme } from "styled-components";

const ColorHOC = (ChildComponent) => {
  const EnhanceComponent = () => {
    const [color, setColor] = useState("#ff0000");

    const updateColor = () => {
      const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setColor(newColor);
    };

    return <ChildComponent color={color} updateColor={updateColor} />;
  };
  return EnhanceComponent;
};

export default ColorHOC;
