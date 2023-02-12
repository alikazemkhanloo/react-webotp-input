import { HTMLProps } from "react";

type Value = string;

export type WebOTPInputProps = {
  numberOfdigits: number;
  inputProps?: HTMLProps<HTMLInputElement>;
  wrapperProps?: HTMLProps<HTMLDivElement>;
  value?: Value;
  onChange?(value: Value): void;
  renderInput?(props: RendererProps): JSX.Element;
};

export type RendererProps = {
  index: number;
  value?: Value;
  focused?: boolean;
};
