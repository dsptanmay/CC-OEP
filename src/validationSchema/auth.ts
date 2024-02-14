import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please fill this field"),
  password: Yup.string()
    .required("Please fill this field")
    .min(6, "Please enter minimum 6 characters"),
});

const registerSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please fill this field"),
  password: Yup.string()
    .required("Please fill this field")
    .min(6, "Please enter minimum 6 characters"),
  cnfPassword: Yup.string()
    .required("Please fill this field")
    .oneOf([Yup.ref("password")], "Entered passwords do not match"),
});


export const loginValidation = () =>
  useForm({
    resolver: yupResolver(loginSchema),
  });

export const registerValidation = () =>
  useForm({
    resolver: yupResolver(registerSchema),
  });
