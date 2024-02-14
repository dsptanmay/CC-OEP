"use client";
import InputField from "@/components/InputField";
import { PROFILE_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { auth } from "@/services/firebase";
import { LoginValidation } from "@/validationSchema/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";
import { InputFieldT } from "@/types/FormTypes";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = LoginValidation();
  const router = useRouter();
  useAuthentication();
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

  const submitForm = (values: any) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((response) => {
        router.push(PROFILE_ROUTE);
      })
      .catch((e) => {
        console.log("Login Error ", e.message);
        alert("Please try Again");
      });
  };

  return (
    <div className="h-screen max:h-screen-auto flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
      <div className="bg-white p-8 rounded-xl shadow-lg w-3/6 h-1/2">
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
          <span className="text-sm">Don`&apos;`t have an account?</span> <br />
          <Link href={REGISTER_ROUTE} className="text-blue-500 hover:underline">
            Create one here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
