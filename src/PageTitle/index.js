import React from "react";
import classNames from "../classNames";
import "../tailwind.css";

export default function index({ children, ...props }) {
  const titleStyles =
    props.titleStyles ||
    "text-lg font-medium leading-6 text-gray-900 dark:text-white";

  return (
    <h1 className={classNames(titleStyles)} {...props}>
      {children}
    </h1>
  );
}
