import { InputFieldT } from "@/types/FormTypes";

const InputField = ({ type, name, placeholder, label }: InputFieldT) => {
  return (
    <div>
      <label className="my-2 flex flex-col">{label}</label>
      <input
        className="w-full rounded-md border border-gray-100 p-2 my-2"
        type={type}
        name={name}
        placeholder={placeholder}
        id={`field_${name}`}
      />
    </div>
  );
};

export default InputField;
