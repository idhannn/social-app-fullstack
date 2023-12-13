"use client";
import Input from "./InputForm";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
  const { handleSubmit, register } = useForm();
  const { push } = useRouter();
  const [error, setError] = useState(false);

  const onSubmitLogin = async (data: any) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.ok) {
      push("/");
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)}>
      <h2 className="text-2xl font-bold opacity-80 text-center max-md:mt-3">
        Sign In To <span className="text-rose-500">Social App</span>
      </h2>
      <div className="text-red-500 mt-10 text-center">
        {error && "Wrong Email or Password"}
      </div>
      <div className="flex flex-col">
        <Input
          type="text"
          place="Email or Username"
          register={{ ...register("email") }}
        />
        <Input
          type="password"
          place="Password"
          register={{ ...register("password") }}
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
          <Link style={{ textDecoration: "underline" }} href={"/auth/register"}>
            Sign Up
          </Link>{" "}
          Here
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
