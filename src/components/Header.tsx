"use client";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
  SHOW_RECIPES_ROUTE,
} from "@/constants/routes";
import { AuthContext } from "@/provider/AuthProvider";
import { auth } from "@/services/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user }: any = AuthContext();
  const router = useRouter();
  const logOut = () => {
    signOut(auth)
      .then((response) => {
        router.push(LOGIN_ROUTE);
      })
      .catch((e) => {
        console.log("Logout Catch ", e.message);
      });
  };

  return (
    <header className="h-20 bg-gray-900 text-white flex p-8 drop-shadow-[0px_2px_10px_rgba(2,0,0)]">
      <nav className="w-full flex justify-between items-center ">
        <Link href={HOME_ROUTE}>
          <div className="text-3xl font-bold ">Cookbook Manager</div>
        </Link>
        <ul className="flex gap-4">
          {!user?.isLogin && (
            <>
              <Link href={LOGIN_ROUTE}>
                <li>Login</li>
              </Link>
              <Link href={REGISTER_ROUTE}>
                <li>Register</li>
              </Link>
            </>
          )}
          {user?.isLogin && (
            <>
              <li className="cursor-pointer" onClick={logOut}>
                Logout
              </li>
              <Link href={SHOW_RECIPES_ROUTE}>
                <li>Show Recipes</li>
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
