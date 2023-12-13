"use client";

import { useForm } from "react-hook-form";
import Input from "./InputForm";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object({
  username: yup.string().required().min(5),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState("");

  const { push } = useRouter();
  const onSubmitRegister = (data: any) => {
    mutate(data);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (userData: any) => {
      const { data } = await axios.post("/api/register", {
        email: userData.email,
        username: userData.username,
        password: userData.password,
      });
      if (data?.status) {
        push("/");
      } else {
        setError(data?.message);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmitRegister)}>
      {isPending && <Loading />}
      <h2 className="text-2xl font-bold opacity-80 text-center max-md:mt-3">
        Sign Up To <span className="text-rose-500">Social App</span>
      </h2>
      <div className="text-red-500 mt-10 text-center">{error}</div>
      <div className="flex flex-col">
        {/* <p className="text-red-500">{error?.message}</p> */}
        <p className="text-red-500">{errors.username?.message}</p>
        <div className="flex gap-3 justify-between max-lg:gap-0 max-lg:flex-col">
          <Input
            type="email"
            place="Email"
            register={{ ...register("email") }}
          />
          <Input
            type="text"
            place="Username"
            register={{ ...register("username") }}
          />
        </div>
        <p className="text-red-500">{errors.password?.message}</p>
        <Input
          type="password"
          place="Password"
          register={{ ...register("password") }}
        />
        <p className="text-red-500">{errors.confirmPassword?.message}</p>
        <Input
          type="password"
          place="Confirm Password"
          register={{ ...register("confirmPassword") }}
        />
        <button
          type="submit"
          className="bg-rose-500 mt-5 text-white py-3 px-2 rounded-full hover:bg-rose-400 text-lf font-semibold duration-300"
        >
          Sign In
        </button>
        <p className="text-center my-5">Or</p>
        <button className="border py-4 px-3 rounded-full flex gap-2 justify-center hover:shadow items-center">
          <Image src={"/google.png"} width={20} height={20} alt="google" />
          <p>Sign In With Google</p>
        </button>
        <p className="mt-5 text-sm text-center">
          Dont Have An Account?{" "}
          <Link style={{ textDecoration: "underline" }} href={"/auth/login"}>
            Sign In
          </Link>{" "}
          Here
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
