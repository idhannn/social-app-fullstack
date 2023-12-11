import CreatePost from "@/components/CreatePost";
import Menus from "@/components/Menus";
import Posts from "@/components/Posts";
import RecomendationFreinds from "@/components/RecomendationFreinds";

export default function Home() {
  return (
    <main className="flex max-lg:flex-col gap-5 h-[6000px]">
      <div>
        <Menus />
      </div>
      <div className="mt-24 max-lg:mx-2 lg:mt-28 w-full xl:w-[700px] 2xl:mx-auto lg:ml-64 lg:mr-80 xl:ml-72 xl:mr-96">
        <CreatePost />
        <div className="max-lg:hidden">
          <Posts />
        </div>
      </div>
      <div className="max-lg:ml-2">
        <RecomendationFreinds />
        <div className="lg:hidden">
          <Posts />
        </div>
      </div>
    </main>
  );
}
