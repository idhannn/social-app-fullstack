import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

const Avatar = async () => {
  const session = await getServerSession();
  const user = await prisma.users
    .findUnique({
      where: {
        email: session?.user?.email as string,
      },
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <img
      src={user?.avatar || ""}
      alt="avatar"
      className="rounded-full lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]"
    />
  );
};

export default Avatar;
