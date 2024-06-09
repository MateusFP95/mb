interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", className, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
