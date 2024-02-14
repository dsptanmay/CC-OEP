import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const profileSchema = Yup.object({
  name: Yup.string().nullable(),
  photo: Yup.string().nullable(),
});

export const ProfileValidation = () =>
  useForm({
    resolver: yupResolver(profileSchema),
  });

const profilePasswordSchema = Yup.object({
  password: Yup.string().nullable(),
});

export const ProfilePasswordValidation = () =>
  useForm({
    resolver: yupResolver(profilePasswordSchema),
  });
