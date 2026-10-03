const InputField = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  id,
  required = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      id={id}
      required={required}
    />
  );
};

export default InputField;
