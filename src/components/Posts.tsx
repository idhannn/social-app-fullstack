"use client";

import PostsProperty from "./PostsProperty";
import { SlOptionsVertical } from "react-icons/sl";

const Posts = () => {
  return (
    <div className="rounded-lg mt-5 p-2 lg:p-3 xl:p-6 bg-white w-full flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img
            src="https://i.pravatar.cc/300"
            alt="avatar social app"
            className="w-[40px] h-[40px]"
          />
          <div>
            <h2 className="font-bold text-lg">Name</h2>
            <p>Time</p>
          </div>
        </div>
        <div className="text-lg cursor-pointer hover:bg-slate-100 p-2 rounded-full">
          <SlOptionsVertical />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <p className="font-semibold opacity-70">caps</p>
        <img src="/abt.png" alt="" className="object-contain" />
      </div>
      <PostsProperty />
    </div>
  );
};

export default Posts;
