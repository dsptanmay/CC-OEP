import { LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { AuthContext } from "@/provider/AuthProvider";
import { UserType } from "@/validationSchema/user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const GUEST_ROUTES = [LOGIN_ROUTE, REGISTER_ROUTE];

const useAuthentication = () => {
  const { user }: any = AuthContext();
  const userInfo: UserType = user;
//   console.log(userInfo);
  const router = useRouter();
  const currentRoute = window.location.pathname;

  useEffect(() => {
    if (userInfo.user === null && !GUEST_ROUTES.includes(currentRoute)) {
      router.push(LOGIN_ROUTE);
    }

    if (userInfo && GUEST_ROUTES.includes(currentRoute)) {
      router.push(PROFILE_ROUTE);
    }
  }, []);
};

export default useAuthentication;
