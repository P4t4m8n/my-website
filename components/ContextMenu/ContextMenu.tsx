"use client";

import { useContext } from "@/hooks/useContextMenu";
import { useRef } from "react";
import ContextMenuSubMenu from "./ContextMenuSubMenu";
import ContextMenuDivider from "./ContextMenuDivider";
import ContextMenuItem from "./ContextMenuItem";
import { useMenuPosition } from "@/hooks/useMenuPosition";
import { TMenuItem } from "@/types/contextMenu.type";

// const MENU_OPTIONS: TMenuItem[] = [
//   { label: "Arrange Icons" },
//   { label: "Line up Icons" },
//   { divider: true },
//   { label: "Refresh" },
//   { divider: true },
//   { label: "Paste", disabled: true },
//   { label: "Paste Shortcut", disabled: true },
//   { divider: true },
//   {
//     label: "New",
//     submenu: [
//       { label: "Folder" },
//       { label: "Shortcut" },
//       { label: "Text Document" },
//       { label: "Bitmap Image" },
//       { label: "Wave Sound" },
//       { label: "Compressed (zipped) Folder" },
//     ],
//   },
//   { divider: true },
//   { label: "Properties" },
// ];

interface ContextMenuProps {
  menuOptions: TMenuItem[];
}

export default function ContextMenu({ menuOptions }: ContextMenuProps) {
  const menuRef = useRef<HTMLUListElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, _, position] = useContext(menuRef);
  const { adjustedPos } = useMenuPosition({ open, position, menuRef });

  if (!open) return null;

  const renderItems = (menuOptions: TMenuItem[]) => {
    return menuOptions.map((item, idx) => {
      if (item.divider) {
        return <ContextMenuDivider key={idx} />;
      }
      if (item.submenu) {
        return <ContextMenuSubMenu item={item} key={idx} />;
      }
      return (
        <ContextMenuItem
        item={item}
          key={idx}
        />
      );
    });
  };

  return (
    <ul
      ref={menuRef}
      className={` fixed bg-main-gray z-50 w-46 border-2 border-white shadow-[2px_2px_0_rgba(0,0,0,0.5),4px_4px_0_rgba(255,255,255,0.5)] flex flex-col gap-0.5 text-sm `}
      style={{
        fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
        visibility: !adjustedPos ? "hidden" : "visible",
        top: adjustedPos?.y || 0,
        left: adjustedPos?.x || 0,

        userSelect: "none",
      }}
      tabIndex={-1}
    >
      {renderItems(menuOptions)}
    </ul>
  );
}
