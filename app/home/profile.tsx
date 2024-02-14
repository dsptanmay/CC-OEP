// components/ProfileDropdown.tsx
"use client"
import React, { useState } from 'react';
import DropdownMenu from './dropdown'; 
import logo from './img.png';

const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <img
        src={logo.src}
        alt="Profile"
        className="w-20 h-20 rounded-full cursor-pointer"
        onClick={toggleDropdown}
      />
      {isOpen && <DropdownMenu />}
    </div>
  );
};

export default ProfileDropdown;
