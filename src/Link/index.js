import React from 'react';
import "../tailwind.css";

export default function index({ children }) {
  return (
    <a className="font-normal text-xs text-blue-500 hover:text-blue-600 dark:text-white cursor-pointer">
      {children}
    </a>
  );
}