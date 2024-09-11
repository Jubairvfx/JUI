type props = {
  label: string;
};

const Button: React.FC<props> = ({ label }) => {
  return <div>{label}</div>;
};

export default Button;
