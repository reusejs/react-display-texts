import React from 'react';
import "../tailwind.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function index({ children, ...props }) {
  const fontSize = props.fontSize || 'text-base';

  return (
    <p
      className={classNames(
        props.className,
        'block font-normal text-gray-500 dark:text-white',
        fontSize
      )}
    >
      {children}
    </p>
  );
}