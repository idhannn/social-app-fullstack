import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src={"https://i.pravatar.cc/300"}
      alt="avatar"
      className="rounded-full lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]"
    />
  );
};

export default Avatar;