"use client";
import { IoMdClose, IoMdImages } from "react-icons/io";
import { useAppDispatch } from "@/lib/redux/hooks";
import { update, upload } from "@/lib/redux/modalSlice";
import ImagePreview from "./ImagePreview";

const CreatePostBox = () => {
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(update({ showModal: false }));
    document.querySelector("body")?.classList.remove("overflow-hidden");
  };
  return (
    <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[330px] md:w-[600px] rounded-lg shadow-xl">
      <p className="text-center font-bold text-2xl border-b py-4 relative">
        Buat Postingan
        <div
          onClick={() => closeModal()}
          className="absolute right-3 top-3 p-2 cursor-pointer rounded-full bg-slate-100 hover:bg-slate-200"
        >
          <IoMdClose />
        </div>
      </p>
      <div className="flex flex-col p-5">
        <div className="flex gap-2">
          <img
            src="https://i.pravatar.cc"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full"
          />
          <h3 className="text-lg font-bold">Ahandev</h3>
        </div>
        <textarea
          className="my-3 outline-none"
          placeholder="What Do You Think?"
          rows={5}
        ></textarea>
        <ImagePreview />
        <button
          onClick={() => dispatch(upload({ isUpload: true }))}
          className="py-2 mt-5 px-4 text-center text-white font-bold rounded-lg bg-blue-500 hover:bg-blue-400  duration-300"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default CreatePostBox;
