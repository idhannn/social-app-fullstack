"use client";
import { createClient } from "@supabase/supabase-js";
import { IoMdClose, IoMdImages } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import Loading from "./Loading";

const supabase = createClient(
  "https://vgoytsxwbdsdkmxkkwkf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnb3l0c3h3YmRzZGtteGtrd2tmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMTQyMzIsImV4cCI6MjAxNzc5MDIzMn0.ogFDRCLs5yzm4on1KWs1WQwpNMyCnZc1sN5z8JPJX4w"
);

// PAKE .ENV GABISA

const bucket = supabase.storage.from("socialmedia");

const ImagePreview = () => {
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [prevImg, setPrevImg] = useState<string | null>(null);

  const { isUpload } = useAppSelector((state) => state.modal);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectFile(file || null);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPrevImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPrevImg(null);
    }
  };

  const handleUpload = async () => {
    if (selectFile) {
      const fileName = selectFile.name;
      const fileData = new Blob([selectFile]);

      try {
        const { data, error } = await bucket.upload(
          `posts/${fileName}`,
          fileData
        );
        if (error) {
          alert(error.message);
        } else {
          alert("Success");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Masukkan Foto");
    }
  };

  useEffect(() => {
    if (isUpload) {
      handleUpload();
    }
  }, [isUpload]);

  return (
    <div className="w-full relative">
      {prevImg ? (
        <div>
          <img
            src={prevImg}
            className="w-full h-[230px] object-contain border py-5"
            alt=""
          />
          <div
            onClick={() => setPrevImg(null)}
            className="absolute right-3 top-3 p-2 cursor-pointer rounded-full bg-slate-100 hover:bg-slate-200"
          >
            <IoMdClose />
          </div>
        </div>
      ) : (
        <div className="relative h-[200px] cursor-pointer p-5 border-4 border-white outline outline-slate-100 rounded-lg bg-slate-100 hover:bg-slate-200 grid place-content-center">
          <div className="bg-slate-300/50  p-5 rounded-full">
            <div className="opacity-80">
              <IoMdImages fontSize={50} />
              <input
                onChange={handleFileChange}
                type="file"
                className="w-full h-full absolute left-0 top-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>
          <p className="text-lg font-bold mt-16 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Tambahkan Foto
          </p>
        </div>
      )}
      {isUpload && <Loading />}
    </div>
  );
};

export default ImagePreview;
