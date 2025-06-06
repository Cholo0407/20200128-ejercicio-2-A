const InputText = ({ label, name, placeholder, register, error, type = "text" }) => {
    return (
      <div className="sm:col-span-3">
        {/* Label */}
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
  
        {/* Input field */}
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...register(name, { required: `${label} es obligatorio` })}
          className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out ${error ? 'border-red-500' : 'border-gray-300'} hover:border-blue-400`}
        />
  
        {/* Error message */}
        {error && (
          <p className="mt-1 text-xs text-red-500">
            {error.message}
          </p>
        )}
      </div>
    );
  };
  
  export default InputText;
  