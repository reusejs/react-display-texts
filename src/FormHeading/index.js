import React from 'react';
import "../tailwind.css";

export default function index({ children, ...props }) {
  return <h3 className="text-2xl font-medium text-gray-800">{children}</h3>;
}