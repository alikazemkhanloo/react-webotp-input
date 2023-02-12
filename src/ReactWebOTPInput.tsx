import { WebOTPInputProps } from "./types";
import React from "react";
import useReactWebOTPInput from "./hooks/useReactWebOTPInput";
import defaultRenderInputs from "./renderers/renderInput";

const ReactWebOTPInput = (props: WebOTPInputProps) => {
  const {
    value,
    numberOfdigits,
    renderInput = defaultRenderInputs,
    inputProps = {},
    wrapperProps = {},
  } = props;

  const { handleInputChange, focused, setFocused, inputRef } =
    useReactWebOTPInput(props);

  return (
    <div style={{ position: "relative", display: "flex" }} {...wrapperProps}>
      {Array(numberOfdigits)
        .fill(0)
        .map((_, index) => {
          return renderInput({ index, value, focused });
        })}
      <input
        ref={inputRef}
        onSelect={() => {
          inputRef.current?.setSelectionRange(numberOfdigits, numberOfdigits);
        }}
        maxLength={numberOfdigits}
        style={{
          position: "absolute",
          opacity: 0,
          backgroundColor: "transparent",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleInputChange}
        {...inputProps}
      />
    </div>
  );
};

export default ReactWebOTPInput;
