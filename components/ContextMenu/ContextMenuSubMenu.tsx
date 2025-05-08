import { TMenuItem } from "@/types/contextMenu.type";
import { useState } from "react";

interface ContextMenuSubMenuProps {
  item?: TMenuItem;
}
export default function ContextMenuSubMenu({ item }: ContextMenuSubMenuProps) {
  const { label, submenu } = item || {};
  const [showSubMenu, setShowSubMenu] = useState(false);

  if (!label) return null;
  return (
    <li
      className="py-0.5 px-[1.5rem_.5rem]"
      onMouseEnter={() => setShowSubMenu(true)}
      onMouseLeave={() => setShowSubMenu(false)}
    >
      <p>{label}</p>
      {showSubMenu && submenu && (
        <ul className="absolute bg-white border border-main-gray-light rounded-md shadow-lg  z-10">
          {submenu.map((subItem, idx) => {
            if (subItem.divider) {
              return (
                <li key={idx} className="border-t border-main-gray-light" />
              );
            }
            return (
              <li
                key={idx}
                className="py-0.5 px-[1.25rem_.5rem] hover:bg-blue-400"
              >
                {subItem.label}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
