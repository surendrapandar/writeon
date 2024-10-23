import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'; // specify the types for variants
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", children, ...props }) => {
  // Define base classes for the button
  let className = "px-4 py-2 rounded-md focus:outline-none transition duration-200 ease-in-out ";

  // Apply styles based on the variant
  if (variant === "outline") {
    className += "w-200px border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"; // Ensure border is defined
  } else if (variant === "default") {
    className += "bg-blue-600 text-white hover:bg-blue-700";
  } else {
    className += "bg-gray-300 text-gray-700"; // fallback style
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};


