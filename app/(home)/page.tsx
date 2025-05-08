import DraggableGrid from "@/components/Draggable/DraggableGrid";
import { WindowsLogo } from "@/components/icons/windowsLogo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <Image
        src="/backgroundImage.webp"
        fill
        alt="Background Image"
        className="w-full h-full -z-10 object-cover"
      />
      <DraggableGrid />
      

      <footer className="h-10 bg-blue-900 w-full absolute bottom-0 left-0">
        <button className="flex items-center gap-2 bg-main-green rounded-br-xl rounded-tr-xl px-3 h-full">
          <WindowsLogo className="w-8 h-8 " />
          <span className="font-bold text-lg font-franklinGothic text-white text-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]">
            Start
          </span>
        </button>
      </footer>
    </main>
  );
}
