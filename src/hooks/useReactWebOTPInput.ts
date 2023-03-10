import { useEffect, useRef, useState } from "react";
import { WebOTPInputProps } from "../types";

const useReactWebOTPInput = (props: WebOTPInputProps) => {
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e?.target?.value?.trim();
    props.onChange?.(newValue);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const handleWebOTPAPI = async () => {
    const otp = await navigator.credentials.get({
      otp: { transport: ["sms"] },
    });
    if (otp?.code) {
      props.onChange?.(otp.code);
    }
  }

  useEffect(() => {
    handleWebOTPAPI();
  }, []);

  return {
    handleInputChange,
    focused,
    setFocused,
    inputRef,
  };
};

export default useReactWebOTPInput;
