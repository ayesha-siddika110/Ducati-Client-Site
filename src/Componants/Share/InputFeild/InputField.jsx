const InputField = ({
    label,
    placeholder,
    error,
    icon,
    className = "",
    ...rest // <-- this will capture {...register()}
  }) => {
    return (
      <div className={`w-full ${className}`}>
        {label && <label className="block text-sm font-medium mb-1">{label}</label>}
        <div
          className={`flex items-center rounded-xl border ${
            error ? "border-red-500" : "border-gray-300"
          } px-3 py-2 focus-within:ring-2 focus-within:ring-green-500`}
        >
          {icon && <span className="mr-2 text-gray-400">{icon}</span>}
          <input
            placeholder={placeholder}
            className="flex-1 outline-none bg-transparent text-sm"
            {...rest} // <-- spreads register props here
          />
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  };
  
  export default InputField;
  