import React, {forwardRef, useImperativeHandle, useRef} from "react";
import styles from "./CustomInput.module.css";

export type CustomInputHandle = {
  focus: () => void;
  clear: () => void;
};

export const CustomInput = forwardRef<CustomInputHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));

  return <input type="text" className={styles.customInput} ref={inputRef} />;
});
