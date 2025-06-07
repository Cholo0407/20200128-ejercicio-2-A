const CustomButton = ({ 
  onClick, 
  text = "Botón", 
  icon = null, 
  className = "",
  disabled = false,
  type = "button",
  variant = "primary",
  size = "medium"
}) => {
  // Variantes de estilo
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  // Tamaños
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3",
    large: "px-8 py-4 text-lg"
  };

  const baseClasses = "inline-flex items-center font-medium rounded-md transition-colors shadow-sm";
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.medium;
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  const finalClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
    >
      {icon && (
        <span className="mr-2">
          {icon}
        </span>
      )}
      {text}
    </button>
  );
};

export default CustomButton;