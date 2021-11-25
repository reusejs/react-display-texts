import React from "react";
import "../tailwind.css";
import classNames from "../classNames";

export default function index({ children, ...props }) {
  const textAndFontStyles =
    props.textAndFontStyles || "text-2xl font-medium text-gray-800";

  return (
    <h3 className={classNames(textAndFontStyles)} {...props}>
      {children}
    </h3>
  );
}
