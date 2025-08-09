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

  return (
    <>
      <div style={{textAlign: "center"}}>Ця програма створена</div>
      <CustomInput ref={inputRef} />
      <button
        style={{backgroundColor: "lawngreen", padding: 8}}
        onClick={handleFocus}
      >
        Focus Input
      </button>
    </>
  );
};

export default About;
