import React from "react";
import "../tailwind.css";
import classNames from "../classNames";

export default function index({ children, ...props }) {
  const fontSize = props.fontSize || "text-base";
  const paragraphStyles =
    props.paragraphStyles || "block font-normal text-gray-500 dark:text-white";

  return (
    <p className={classNames(paragraphStyles, fontSize)} {...props}>
      {children}
    </p>
  );
}
