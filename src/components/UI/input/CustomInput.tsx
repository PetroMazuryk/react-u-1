import React, {forwardRef, useImperativeHandle, useRef} from "react";

export type CustomInputHandle = {
  focus: () => void;
};
export const CustomInput = forwardRef<CustomInputHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return <input type="text" className="custom-input" ref={inputRef} />;
});
