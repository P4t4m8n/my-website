import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";

type TCoords = { x: number; y: number };

export const useContext = (
  ref: React.RefObject<Element | null>,
  callBack?: null | (() => void)
): [boolean, Dispatch<SetStateAction<boolean>>, TCoords] => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const router = useRouter();
  const eventListenerRef = useRef<{
    click: (ev: MouseEvent) => void;
    keydown: (ev: KeyboardEvent) => void;
    context: (ev: MouseEvent) => void;
  }>({
    click: () => {},
    keydown: () => {},
    context: () => {},
  });

  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLElement;

      if (ref.current && ref.current.contains(target)) return;
      setOpen(true);
      // setSubmenu(false);
      setPosition({ x: e.clientX, y: e.clientY });
      console.log(" target:", target);
    },
    [ref]
  );

  const checkClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // If clicking a link, delay modal closing until navigation starts
      if (target.closest("a")) {
        e.preventDefault(); // Prevent default anchor behavior
        const href = target.closest("a")?.getAttribute("href"); // Get link URL

        if (href) {
          router.push(href); // Navigate programmatically
          setTimeout(() => setOpen(false), 100); // Delay modal close slightly
          return;
        }
      }

      console.log(" target:", target);
      if (target.closest("button")) {
        //Delay modal close slightly to allow button click to register
        setTimeout(() => setOpen(false), 200);
        return;
      }

      // Handle normal outside clicks
      if (!target || !open || !ref.current || ref.current.contains(target))
        return;

      if (callBack) {
        callBack();
        return;
      }
      setOpen(false);
    },
    [open, ref, callBack, router]
  );

  const checkKeyPress = useCallback((ev: KeyboardEvent) => {
    if (ev.key === "Escape") {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    const currentEventListeners = eventListenerRef.current;
    currentEventListeners.click = checkClickOutside;
    currentEventListeners.keydown = checkKeyPress;
    currentEventListeners.context = handleContextMenu;
    const controller = new AbortController();

    window.addEventListener("contextmenu", currentEventListeners.context, {
      signal: controller.signal,
    });
    if (!ref.current || !open) return;
    window.addEventListener("mousedown", currentEventListeners.click, {
      signal: controller.signal,
    });
    window.addEventListener("keydown", currentEventListeners.keydown, {
      signal: controller.signal,
    });
    return () => {
      controller.abort();
    };
  }, [open, ref, checkClickOutside, checkKeyPress, handleContextMenu]);

  const memoizedValue: [boolean, Dispatch<SetStateAction<boolean>>, TCoords] =
    useMemo(() => [open, setOpen, position], [open, setOpen, position]);

  return memoizedValue;
};
