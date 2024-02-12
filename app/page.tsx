"use client";
import React from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const handleSignUp = () => {
    router.push("/signup");
  };
  const handleSignIn = () => {
    router.push("/signin");
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-teal-50">
      <button
        onClick={handleSignUp}
        className="border mb-2 p-4 rounded-lg bg-green-600 border-gray-600 text-white"
      >
        Sign Up
      </button>
      <button
        onClick={handleSignIn}
        className="border mb-2 p-4 rounded-lg bg-blue-600 border-gray-600 text-white"
      >
        Sign In
      </button>
    </div>
  );
};

export default page;
