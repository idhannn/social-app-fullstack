"use client";
import { IoHome } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaFlag, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Menus = () => {
  return (
    <div className="fixed z-50 bottom-0 w-full lg:w-[250px] left-0 xl:left-6 lg:top-24 mt-3">
      <ul className="flex lg:flex-col max-lg:pt-2 max-lg:grid max-lg:grid-cols-4 max-lg:bg-white">
        {MenuLists.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <div
              onClick={() => signIn()}
              className="flex duration-300 hover:-translate-y-3 rounded-xl max-lg:flex-col items-center gap-1 lg:gap-3 lg:my-2 px-2 lg:px-4 py-2 hover:bg-slate-200"
            >
              <button
                className={`${menu.bg} p-[10px] lg:p-3 rounded-full text-[20px] ${menu.color}`}
              >
                {menu.icon}
              </button>
              <p className="font-bold lg:text-[20px]">{menu.title}</p>
            </div>{" "}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menus;

const MenuLists = [
  {
    link: "/",
    title: "Home",
    icon: <IoHome />,
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    link: "/user/freindslist",
    title: "Freinds",
    icon: <BsFillPeopleFill />,
    bg: "bg-green-100",
    color: "text-green-500",
  },
  {
    link: "/user/favorites",
    title: "Favorite",
    icon: <FaHeart />,
    bg: "bg-red-100",
    color: "text-red-500",
  },
  {
    link: "/user/Pages",
    title: "Pages",
    icon: <FaFlag />,
    bg: "bg-yellow-100",
    color: "text-yellow-500",
  },
];
