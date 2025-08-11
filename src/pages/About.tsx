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
        style={{backgroundColor: "lawngreen", padding: 8}}
        onClick={handleValue}
      >
        Value Input
      </button>
    </>
  );
};

export default About;
