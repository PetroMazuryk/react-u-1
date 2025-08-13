import React, {useRef, useState} from "react";
import {
  CustomInput,
  CustomInputHandle,
} from "../components/UI/input/CustomInput";

const About = () => {
  const inputRef = useRef<CustomInputHandle>(null);
  const [currentValue, setCurrentValue] = useState<string>("");

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    inputRef.current?.clear();
    setCurrentValue("");
  };

  const handleValue = () => {
    inputRef.current?.setValue();
  };

  const handleGetValue = () => {
    const value = inputRef.current?.getValue() || "";
    setCurrentValue(value);
  };

  return (
    <>
      <div style={{textAlign: "center", marginBottom: 10}}>
        Використання useImperativeHandle
      </div>

      <CustomInput ref={inputRef} />

      <div style={{marginTop: 10}}>
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
          style={{backgroundColor: "lawngreen", padding: 8, marginRight: 10}}
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
      </div>

      <div style={{marginTop: 15, fontWeight: "bold"}}>
        Поточне значення: {currentValue}
      </div>
    </>
  );
};

export default About;
