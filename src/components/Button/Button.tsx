import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className="jui-btn">{label}</button>;
};

export default Button;
