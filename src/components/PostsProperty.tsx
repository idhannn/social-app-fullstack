import React from "react";
import { FaCommentDots, FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const PostsProperty = () => {
  return (
    <div className="flex max-lg:flex-wrap justify-between gap-5 mt-6">
      <div className="flex gap-6">
        <div className="text-rose-500 flex items-center gap-1 text-2xl">
          <FaRegHeart />
          <p className="text-sm">10</p>
        </div>
        <div className="text-blue-500 flex items-center gap-1 text-2xl">
          <FaCommentDots />
          <p className="text-sm">234</p>
        </div>
        <div className="text-yellow-500 items-center flex gap-1 text-2xl">
          <IoMdShare />
          <p className="text-sm">34</p>
        </div>
      </div>
      <div className="relative flex w-full">
        <input
          type="text"
          className="w-full outline-none px-3 py-2 flex rounded-full bg-slate-100"
          placeholder="Berikan Komentar"
        />
        {/* <IoSearch /> */}
      </div>
    </div>
  );
};

export default PostsProperty;
