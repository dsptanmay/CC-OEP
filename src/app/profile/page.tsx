"use client";
import { HOME_ROUTE } from "@/constants/routes";
import useAuthentication from "@/hooks/useAuthentication";
import { AuthContext } from "@/provider/AuthProvider";
import {
  profilePasswordValidation,
  profileValidation,
} from "@/validationSchema/profile";
import { useState } from "react";
const ProfilePage = () => {
  useAuthentication();
  const {
    handleSubmit: passwordHandleSubmit,
    register: registerPassword,
    formState: { errors: passwordErrors },
  } = profilePasswordValidation();
  const { user }: any = AuthContext();
  const userInfo = user;
  const [visibleForm, setVisibleForm] = useState<any>();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-8">Profile</h2>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Email</label>
          <p className="text-gray-800">{userInfo.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
