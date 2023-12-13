import { FaVideo } from "react-icons/fa";
import {
  MdAddAPhoto,
  MdOutlineInsertEmoticon,
  MdVideoLibrary,
} from "react-icons/md";

const CreatePost = () => {
  return (
    <div className="rounded-lg p-2 lg:p-3 xl:p-6 bg-white w-full flex flex-col">
      <div className="flex gap-5 w-full border-b-2 pb-5">
        <img
          src="https://i.pravatar.cc/300"
          className="w-[50px] h-[50px] rounded-full"
          alt="avatar"
        />
        <input
          type="text"
          className="px-5 py-2 lg:py-3 rounded-full w-[100%] outline-none bg-slate-100"
          placeholder="What's on your mind"
        />
      </div>
      <div className="w-full grid grid-cols-4 mt-3">
        {MenuLists.map((menu, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-2 p-1 lg:p-3 rounded-lg cursor-pointer hover:bg-slate-100"
          >
            <button className={`${menu.color} rounded-full text-[20px]`}>
              {menu.icon}
            </button>
            <p className="font-bold">{menu.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePost;

const MenuLists = [
  {
    link: "/",
    title: "Go Live",
    icon: <FaVideo fontSize={"24px"} />,
    color: "text-blue-500",
  },
  {
    link: "/user/freindslist",
    title: "Video",
    icon: <MdVideoLibrary fontSize={"24px"} />,
    color: "text-red-500",
  },
  {
    link: "/user/favorites",
    title: "Photo",
    icon: <MdAddAPhoto fontSize={"24px"} />,
    color: "text-green-500",
  },
  {
    link: "/user/Pages",
    title: "Feeling",
    icon: <MdOutlineInsertEmoticon fontSize={"24px"} />,
    color: "text-yellow-500",
  },
];
