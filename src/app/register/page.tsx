"use client";
import InputField from "@/components/InputField";
import { LOGIN_ROUTE, PROFILE_ROUTE } from "@/constants/routes";
import useAuthentication from "@/hooks/useAuthentication";
import { auth } from "@/services/firebase";
import { registerValidation } from "@/validationSchema/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InputFieldT } from "@/types/FormTypes";

const Register = () => {
  const router = useRouter();
  useAuthentication();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
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

  const submitForm = async (values: any) => {
    console.log("Register form values", values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((response) => {
        alert("User Registered Successfully");
        reset();
        router.push(PROFILE_ROUTE);
      })
      .catch((e) => {
        console.log("catch ", e.message);
        alert("Something went wrong please try again");
      });
  };

  return (
    <div className="h-screen max:h-screen-auto flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
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
          <span className="text-md">Already have an account?</span>
          <Link href={LOGIN_ROUTE} className="text-blue-500 hover:underline">
            <p>Login here</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
