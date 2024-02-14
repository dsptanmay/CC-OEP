import { InputFieldT } from "@/types/FormTypes";

const InputField = ({
  type,
  name,
  placeholder,
  label,
  register,
  error,
}: InputFieldT) => {
  return (
    <div>
      <label className="my-2 flex flex-col">{label}</label>
      <input
        {...register(name)}
        className="w-full rounded-md border border-gray-100 p-2 my-2"
        type={type}
        name={name}
        placeholder={placeholder}
        id={`field_${name}`}
      />
      {error && <span className="text-red-500 py-1 ">{error?.message}</span>}
    </div>
  );
};

export default InputField;
