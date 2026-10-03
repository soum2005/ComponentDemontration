import InputIcon from '../atoms/InputIcon';
import InputField from '../atoms/InputField';

const InputBox = ({ icon, type, placeholder, value, onChange, required = false }) => {
  return (
    <div className="inputBox">
      <InputIcon iconClass={icon} />
      <InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputBox;
