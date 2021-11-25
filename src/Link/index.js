import React from 'react';
import classNames from '../classNames';
import "../tailwind.css";

export default function index({ children, ...props }) {
  // do we need an onclick callback function also?

  const anchorTagStyles = props.anchorTagStyles || 'font-normal text-xs text-blue-500 hover:text-blue-600 dark:text-white cursor-pointer';

  return (
    <a className={classNames(anchorTagStyles)} {...props}>
      {children}
    </a>
  );
}