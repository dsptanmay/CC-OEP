import { User } from "firebase/auth";

export type UserType = {
  isLogin: boolean;
  user: User;
};
