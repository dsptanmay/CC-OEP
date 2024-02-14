import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen max:h-screen-auto flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
      <span className="font-bold text-6xl">
        Organize, Create, Share Recipes
      </span>
    </div>
  );
}
