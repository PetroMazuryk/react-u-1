import React, {useRef, useState} from "react";
import {
  CustomInput,
  CustomInputHandle,
} from "../../components/UI/input/CustomInput";
import styles from "./About.module.css";

const About = () => {
  const inputRef = useRef<CustomInputHandle>(null);
  const [currentValue, setCurrentValue] = useState<string>("");

  const handleFocus = () => inputRef.current?.focus();
  const handleClear = () => {
    inputRef.current?.clear();
  };
  const handleValue = () => inputRef.current?.setValue();
  const handleGetValue = () => {
    const value = inputRef.current?.getValue() || "";
    setCurrentValue(value);
  };

  return (
    <div className={styles.container}>
      <h2>Використання useImperativeHandle</h2>

      <CustomInput
        ref={inputRef}
        placeholder="Введіть текст..."
        defaultValue="Стартове значення"
        onChange={(value) => setCurrentValue(value)}
      />

      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={handleFocus}>
          Focus Input
        </button>
        <button className={styles.button} onClick={handleClear}>
          Clear Input
        </button>
        <button className={styles.button} onClick={handleValue}>
          Value Input
        </button>
        <button className={styles.button} onClick={handleGetValue}>
          Get Value
        </button>
      </div>

      <div className={styles.valueDisplay}>
        Поточне значення: <span>{currentValue}</span>
      </div>
    </div>
  );
};

export default About;
