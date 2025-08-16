import React, {forwardRef, useImperativeHandle, useRef} from "react";
import styles from "./CustomInput.module.css";

export type CustomInputHandle = {
  focus: () => void;
  clear: () => void;
  setValue: (value?: string) => void;
  getValue: () => string;
};

type CustomInputProps = {
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export const CustomInput = forwardRef<CustomInputHandle, CustomInputProps>(
  ({placeholder = "Enter text...", defaultValue = "", onChange}, ref) => {
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
      setValue: (value: string = "Some text !!!") => {
        if (inputRef.current) inputRef.current.value = value;
      },
      getValue: () => inputRef.current?.value || "",
    }));

    return (
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={styles.customInput}
        ref={inputRef}
        onChange={(e) => onChange?.(e.target.value)}
      />
    );
  },
);
