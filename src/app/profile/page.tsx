"use client";
import useAuthentication from "@/hooks/useAuthentication";
import { AuthContext } from "@/provider/AuthProvider";
import {
  profilePasswordValidation,
  profileValidation,
} from "@/validationSchema/profile";
import { updatePassword, updateProfile } from "firebase/auth";
import { useState } from "react";

const Profile = () => {
  useAuthentication();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = profileValidation();

  const {
    handleSubmit: passwordHandleSubmit,
    register: registerPassword,
    formState: { errors: passwordErrors },
  } = profilePasswordValidation();
  const { user }: any = AuthContext();

  const userInfo = user.user;

  return (
    <div className="h-screen max:h-screen-auto flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-8">Profile</h2>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Email: </label>
          <p className="text-gray-800">{userInfo.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
