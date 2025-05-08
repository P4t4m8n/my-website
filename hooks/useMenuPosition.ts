import { TCoords } from "@/types/contextMenu.type";
import { RefObject, useEffect, useState } from "react";

interface IUseMenuPosition {
  open: boolean;
  position: TCoords;
  menuRef: RefObject<HTMLUListElement | null>;
}
export const useMenuPosition = ({
  open,
  position,
  menuRef,
}: IUseMenuPosition) => {
  const [adjustedPos, setAdjustedPos] = useState<TCoords | null>(null);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;

    const { innerWidth, innerHeight } = window;
    const rect = menu.getBoundingClientRect();
    let x = position.x;
    let y = position.y;

    if (x + rect.width > innerWidth) {
      x = Math.max(0, innerWidth - rect.width - 4);
    }
    if (y + rect.height > innerHeight) {
      y = Math.max(0, innerHeight - rect.height - 4);
    }
    if (y < 0) y = 0;
    if (x < 0) x = 0;

    setAdjustedPos({ x, y });
    return () => {
      console.log("Cleanup function called");
      setAdjustedPos(null);
    };
  }, [open, position, menuRef]);

  return { adjustedPos };
};
