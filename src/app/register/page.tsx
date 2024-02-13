import { InputFieldT } from "@/types/FormTypes";
import InputField from "@/components/InputField";
import Link from "next/link";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "@/constants/routes";

const RegisterForm = () => {
  const fields: InputFieldT[] = [
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      label: "Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      label: "Password",
    },
    {
      type: "password",
      name: "cnfPassword",
      placeholder: "Confirm your password",
      label: "Confirm Password",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-3/6 h-4/6">
        <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
        <form className="mb-6">
          {fields.map((field, index) => (
            <InputField key={index} {...field} />
          ))}
          <div className="flex justify-center">
            <button className=" bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mt-4">
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-sm">Already have an account?</span>
          <Link href={LOGIN_ROUTE} className="text-blue-500 hover:underline">
             Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
