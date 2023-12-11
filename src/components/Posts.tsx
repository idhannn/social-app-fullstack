"use client";
import { useAppSelector } from "@/lib/hooks";
import PostsProperty from "./PostsProperty";
import { SlOptionsVertical } from "react-icons/sl";
import Image from "next/image";

const Posts = () => {
  const { like, toast, name } = useAppSelector((state) => state.alert);
  console.log({
    toast,
    name,
    like,
  });

  return (
    <div className="rounded-lg mt-5 p-2 lg:p-3 xl:p-6 bg-white w-full flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Image
            src="https://i.pravatar.cc/300"
            alt="avatar social app"
            className="w-[40px] h-[40px]"
          />
          <div>
            <h2 className="font-bold text-lg">Name {name}</h2>
            <p>Time</p>
          </div>
        </div>
        <div className="text-lg cursor-pointer hover:bg-slate-100 p-2 rounded-full">
          <SlOptionsVertical />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <p className="font-semibold opacity-70">caps</p>
        <Image src="/abt.png" alt="" className="object-contain" />
      </div>
      <PostsProperty />
    </div>
  );
};

export default Posts;
