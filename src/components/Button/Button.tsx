import React from "react";

import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button {...props} className="jui-btn">
      {label}
    </button>
  );
};

export default Button;
