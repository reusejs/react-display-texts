import React from 'react';
import "../tailwind.css";

export default function index({ children }) {
  return (
    <h1 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
      {children}
    </h1>
  );
}