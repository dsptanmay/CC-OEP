// components/DropdownMenu.tsx
"use client"
import Link from 'next/link';

const DropdownMenu: React.FC = () => {
  return (
    <div className="absolute top-16 right-0 bg-white shadow-md rounded-md p-2">
      <Link legacyBehavior href="/profile">
        <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
      </Link>
      <Link legacyBehavior href="/settings">
        <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
      </Link>
    </div>
  );
};

export default DropdownMenu;