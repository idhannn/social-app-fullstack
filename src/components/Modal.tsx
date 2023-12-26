"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { update } from "@/lib/redux/modalSlice";
import { useEffect } from "react";

const Modal = ({ children }: { children?: React.ReactNode }) => {
  const { showModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  if (showModal) {
    document.querySelector("body")?.classList.add("overflow-hidden");
  }

  const closeModal = () => {
    dispatch(update({ showModal: false }));
    document.querySelector("body")?.classList.remove("overflow-hidden");
  };

  return (
    <>
      <main
        onClick={() => closeModal()}
        className="fixed scroll-m-0 z-40 top-0 left-0 overflow-hidden w-full flex justify-center h-full items-center bg-slate-800/30"
      ></main>
      {children}
    </>
  );
};

export default Modal;
