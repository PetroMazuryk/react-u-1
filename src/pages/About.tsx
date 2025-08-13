import React, {useRef} from "react";
import {
  CustomInput,
  CustomInputHandle,
} from "../components/UI/input/CustomInput";

const About = () => {
  const inputRef = useRef<CustomInputHandle>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    inputRef.current?.clear();
  };

  const handleValue = () => {
    inputRef.current?.setValue();
  };

  const handleGetValue = () => {
    const value = inputRef.current?.getValue();
    alert(`Поточне значення: ${value}`);
  };

  return (
    <>
      <div style={{textAlign: "center"}}>Використання useImperativeHandle</div>
      <CustomInput ref={inputRef} />
      <button
        style={{backgroundColor: "lawngreen", padding: 8, marginRight: 10}}
        onClick={handleFocus}
      >
        Focus Input
      </button>
      <button
        style={{backgroundColor: "lawngreen", padding: 8, marginRight: 10}}
        onClick={handleClear}
      >
        Clear Input
      </button>

      <button
        style={{backgroundColor: "lawngreen", padding: 8, marginRight: 1}}
        onClick={handleValue}
      >
        Value Input
      </button>

      <button
        style={{backgroundColor: "lawngreen", padding: 8}}
        onClick={handleGetValue}
      >
        Get Value
      </button>
    </>
  );
};

export default About;
