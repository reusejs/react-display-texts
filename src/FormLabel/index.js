import React from "react";
import "../tailwind.css";
import classNames from "../classNames";

export default function index({ children, labelCorner = () => {}, ...props }) {
  const wrapperAlignmentStyles =
    props.wrapperAlignmentStyles || "flex justify-between";

  const labelStyles =
    props.labelStyles ||
    "block text-sm font-normal text-gray-900 dark:text-gray-200";

  return (
    <div className={classNames(wrapperAlignmentStyles)} {...props}>
      <label htmlFor={props.htmlFor} className={classNames(labelStyles)}>
        {children}
      </label>
      {labelCorner()}
    </div>
  );
}
