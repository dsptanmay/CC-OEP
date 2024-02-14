"use client";
import { InputFieldT } from "@/types/FormTypes";
import InputField from "@/components/InputField";
import Link from "next/link";
import { PROFILE_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { auth } from "@/services/firebase";
import { loginValidation } from "@/validationSchema/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = loginValidation();

  const submitForm = (values: any) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        router.push(PROFILE_ROUTE);
      })
      .catch((e) => {
        alert("Please try again!");
      });
  };

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
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-3/6 h-3/5">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit(submitForm)} className="mb-6">
          {fields.map((field, index) => (
            <InputField key={index} {...field} />
          ))}
          <div className="flex justify-center">
            <button className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4 ">
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-sm">Don't have an account?</span> <br />
          <Link href={REGISTER_ROUTE} className="text-blue-500 hover:underline">
            Create one here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
