import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications, IoSearch } from "react-icons/io5";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <nav className="p-3 py-4 lg:p-5 bg-white fixed z-30 top-0 ledt-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1>Social App.</h1>
          </div>
          <form className="w-[500px] relative overflow-hidden hidden lg:flex">
            <input
              type="text"
              placeholder="Cari Temnanmu"
              className="px-3 py-2 border-none bg-slate-100 outline-none w-full rounded-full"
            />
            <div className="absolute right-0 rounded-full px-5 cursor-pointer p-3 hover:bg-slate-200 -top-1">
              <IoSearch fontSize={24} />
            </div>
          </form>
          <div className="flex gap-3 md:gap-6 items-center icons-nav">
            {MenuNavbar.map((menu, index) => (
              <Link key={index} href={menu.link}>
                <button className="bg-slate-100 p-3 hover:bg-slate-200 rounded-full">
                  {menu.icon}
                </button>
              </Link>
            ))}
            <Link href={"/user/profile"}>
              <Avatar />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const MenuNavbar = [
  { link: "/user/chats", icon: <FaFacebookMessenger fontSize="20px" /> },
  { link: "/user/notifications", icon: <IoNotifications fontSize="20px" /> },
];
