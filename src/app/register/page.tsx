"use client";
import { InputFieldT } from "@/types/FormTypes";
import InputField from "@/components/InputField";
import Link from "next/link";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { registerValidation } from "@/validationSchema/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = registerValidation();
  const fields: InputFieldT[] = [
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      label: "Email",
      register: register,
      error: errors.email,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      label: "Password",
      register: register,
      error: errors.password,
    },
    {
      type: "password",
      name: "cnfPassword",
      placeholder: "Confirm your password",
      label: "Confirm Password",
      register: register,
      error: errors.cnfPassword,
    },
  ];

  const submitForm = (values: any) => {
    // console.log("Register form values: ", values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        alert("User has been registered sucessfully!");
        router.push(LOGIN_ROUTE);
      })
      .catch((e) => {
        console.log("Catch", e.message);
        alert("Something went wrong. Please try again!");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-3/6 h-4/6">
        <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit(submitForm)} className="mb-6">
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
