"use client";

import { useDrag } from "@/hooks/useDrag";
import Image from "next/image";
import ContextMenu from "../ContextMenu/ContextMenu";
import { TMenuItem } from "@/types/contextMenu.type";

export default function DraggableGrid() {
  const {
    onDragOver,
    onDrop,
    onTouchMove,
    onTouchEnd,
    onDragStart,
    onTouchStart,
    resetPositions,
    positions,
  } = useDrag();

  const MENU_OPTIONS: TMenuItem[] = [
    { label: "Arrange Icons" },
    { label: "Line up Icons", action: resetPositions },
    { divider: true },
    { label: "Refresh" },
    { divider: true },
    { label: "Paste", disabled: true },
    { label: "Paste Shortcut", disabled: true },
    { divider: true },
    {
      label: "New",
      submenu: [
        { label: "Folder" },
        { label: "Shortcut" },
        { label: "Text Document" },
        { label: "Bitmap Image" },
        { label: "Wave Sound" },
        { label: "Compressed (zipped) Folder" },
      ],
    },
    { divider: true },
    { label: "Properties" },
  ];
  return (
    <section
      className="h-[calc(100%-2.5rem)] relative"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button
        draggable="true"
        data-id="my-computer"
        className="absolute cursor-grab active:cursor-grabbing"
        style={{
          top: `${positions["my-computer"].top}px`,
          left: `${positions["my-computer"].left}px`,
        }}
        onDragStart={onDragStart}
        onTouchStart={onTouchStart}
      >
        <Image src="/myComputer.png" width={64} height={64} alt="My Computer" />
      </button>

      <button
        draggable="true"
        data-id="recycling-bin"
        className="absolute cursor-grab active:cursor-grabbing"
        style={{
          top: `${positions["recycling-bin"].top}px`,
          left: `${positions["recycling-bin"].left}px`,
        }}
        onDragStart={onDragStart}
        onTouchStart={onTouchStart}
      >
        <Image
          src="/recycling_bin.png"
          width={64}
          height={64}
          alt="Recycling Bin"
        />
      </button>
      <ContextMenu menuOptions={MENU_OPTIONS} />
    </section>
  );
}
