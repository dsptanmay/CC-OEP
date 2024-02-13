import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  RECIPES_ROUTE,
  REGISTER_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import React from "react";

const Header = () => {
  const isLogin = false;
  return (  
    <header className="h-20 bg-gray-900 text-white flex p-8 drop-shadow-[0px_2px_10px_rgba(2,0,0)]">
      <nav className="w-full flex justify-between items-center ">
        <Link href={HOME_ROUTE}>
          <div className="text-3xl font-bold">Cookbook Manager</div>
        </Link>
        <ul className="flex gap-4">
          {!isLogin && (
            <>
              <Link href={LOGIN_ROUTE}>
                <li>Login</li>
              </Link>
              <Link href={REGISTER_ROUTE}>
                <li>Register</li>
              </Link>
            </>
          )}
          {isLogin && (
            <>
              <Link href={RECIPES_ROUTE}>
                <li>Show Recipes</li>
              </Link>
              <Link href={HOME_ROUTE}>
                <li>Logout</li>
              </Link>
              <Link href={PROFILE_ROUTE}>
                <li>Profile</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
