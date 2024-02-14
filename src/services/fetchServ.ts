import { HOME_ROUTE } from "@/constants/routes";
import axios from "axios";

export const getAllUID = async (userId: String) => {
  const res = await fetch(`http://localhost:3000/api/recipes/${userId}`);
  const res2 = axios.get(`http://localhost:3000/api/recipes/${userId}`);
  const vals = (await res2).data;
  console.log(vals);
  const temp = await res.json();
  return vals;
};
