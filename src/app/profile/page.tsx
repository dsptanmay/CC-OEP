import React from "react";
import Link from "next/link"; 
const ProfilePage = () => {
  
  const user = {
    avatar: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-8">Profile</h2>
        <div className="mb-6">
            <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Name</label>
          <p className="text-gray-800">{user.name}</p>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Email</label>
          <p className="text-gray-800">{user.email}</p>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
