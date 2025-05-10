import DraggableGrid from "@/components/Draggable/DraggableGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-[calc(100vh-2.5rem)] relative overflow-hidden">
      <Image
        src="/backgroundImage.webp"
        fill
        alt="Background Image"
        className="w-full h-full -z-10 object-cover"
      />
      <DraggableGrid />
    </main>
  );
}
