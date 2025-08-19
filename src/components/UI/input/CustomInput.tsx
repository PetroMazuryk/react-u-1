import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  ChangeEvent,
} from "react";
import styles from "./CustomInput.module.css";

export type CustomInputHandle = {
  focus: () => void;
  clear: () => void;
  setValue: (value?: string) => void;
  getValue: () => string;
};

type CustomInputProps = Readonly<{
  value?: string; // контрольований режим
  placeholder?: string;
  defaultValue?: string; // неконтрольований
  onChange?: (value: string) => void;
}>;

export const CustomInput = forwardRef<CustomInputHandle, CustomInputProps>(
  (
    {placeholder = "Enter text...", defaultValue = "", onChange, value},
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      clear: () => {
        if (value !== undefined) {
          // контрольований
          onChange?.("");
        } else if (inputRef.current) {
          // неконтрольований
          inputRef.current.value = "";
          onChange?.("");
        }
      },
      setValue: (newValue: string = "Some text !!!") => {
        if (value !== undefined) {
          // контрольований
          onChange?.(newValue);
        } else if (inputRef.current) {
          // неконтрольований
          inputRef.current.value = newValue;
          onChange?.(newValue);
        }
      },
      getValue: () => inputRef.current?.value || "",
    }));

    return (
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        defaultValue={value === undefined ? defaultValue : undefined}
        className={styles.customInput}
        ref={inputRef}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange?.(e.target.value)
        }
      />
    );
  },
);
