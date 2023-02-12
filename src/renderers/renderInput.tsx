import React from "react";
import { RendererProps } from "../types";

const defaultRenderInputs = (props: RendererProps) => {
  const { index, value, focused } = props;
  const isSelected = focused && value?.length === index;
  return (
    <div
      style={{
        display: "flex",
        transition: "all 300ms linear",
        boxShadow: isSelected ? "0 0 12px 0px grey" : "0 0 5px 0px grey",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        width: 60,
        height: 60,
        marginLeft:10,
        borderRadius:5,
      }}
    >
      {isSelected ? '|' : value?.[index]}
    </div>
  );
};

export default defaultRenderInputs;
