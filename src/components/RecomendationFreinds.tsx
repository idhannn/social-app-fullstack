"use client";
import { update } from "@/lib/alertSplice";
import { useAppDispatch } from "@/lib/hooks";
const RecomendationFreinds = () => {
  const dispatch = useAppDispatch();

  const handleFollow = (name: string) => {
    dispatch(update({ toast: true, name: name }));
  };

  return (
    <div>
      <div className="bg-white p-3 lg:hidden rounded-lg lg:mr-5">
        <h1 className="text-xl font-bold">Rekomendasi Teman</h1>
        <p>Temukan Teman Sefrekuensi Mu Disini</p>
      </div>
      <div className="lg:fixed overflow-x-scroll lg:overflow-y-scroll lg:h-[500px] lg:w-[300px] lg:right-0 xl:right-10 lg:mt-4 lg:top-24">
        <div className="bg-white p-3 max-lg:hidden rounded-lg">
          <h1 className="text-xl font-bold">Rekomendasi Teman</h1>
          <p>Temukan Teman Sefrekuensi Mu Disini</p>
        </div>
        <ul className="max-lg:flex max-lg:gap-2">
          {MenuLists.map((menu, index) => (
            <div
              key={index}
              className="flex max-lg:flex-col items-center rounded-lg border-slate-200 border lg:gap-3 my-2 p-2 lg:px-5 lg:py-2 relative hover:bg-slate-200"
            >
              <button
                className={`${menu.bg} w-[80px] h-[80px] lg:w-[40px] lg:h-[40px] overflow-hidden rounded-full text-[20px] ${menu.color}`}
              >
                <img src={menu.image} alt="avatar" className="w-full h-full" />
              </button>
              <p className="font-bold text-sm lg:text-[20px]">{menu.title}</p>
              <p
                onClick={() => handleFollow(menu.title)}
                className="text-end text-rose-500 max-lg:mt-3 lg:absolute right-7 cursor-pointer border py-1 px-2 rounded-xl text-[10px] lg:text-xs hover:text-white hover:bg-rose-500 border-rose-500 bottom-2"
              >
                Follow
              </p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecomendationFreinds;

const MenuLists = [
  {
    title: "John Doe",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
  {
    title: "Doe John",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
  {
    title: "Rendi",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
  {
    title: "Aprija",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
  {
    title: "Ahannn",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
  {
    title: "Emjjjj",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
  {
    title: "John Doe",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
  {
    title: "John Doe",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
  {
    title: "John Doe",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
  {
    title: "John Doe",
    image: "/abt.png",
    bg: "bg-slate-100",
    color: "text-slate-800",
    link: "/",
  },
];
