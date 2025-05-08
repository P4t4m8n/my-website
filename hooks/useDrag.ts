import { useRef, useState } from "react";

const initialPositions = {
  "my-computer": { top: 40, left: 40 },
  "recycling-bin": { top: 160, left: 40 },
};

export const useDrag = () => {
  const currentDragRef = useRef<HTMLButtonElement | null>(null);
  const [positions, setPositions] = useState(initialPositions);

  const [touchState, setTouchState] = useState<{
    element: HTMLButtonElement | null;
    offsetX: number;
    offsetY: number;
    id?: string;
  }>({ element: null, offsetX: 0, offsetY: 0 });

  const onDragStart = (e: React.DragEvent<HTMLButtonElement>) => {
    e.dataTransfer.effectAllowed = "move";
    currentDragRef.current = e.currentTarget;
  };

  const onDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (currentDragRef.current) {
      const id = currentDragRef.current.dataset.id;
      if (!id) return;

      const rect = currentDragRef.current.getBoundingClientRect();
      const containerRect = (
        e.currentTarget as HTMLElement
      ).getBoundingClientRect();

      let x = e.clientX - containerRect.left - rect.width / 2;
      let y = e.clientY - containerRect.top - rect.height / 2;

      x = Math.max(0, Math.min(x, containerRect.width - rect.width));
      y = Math.max(0, Math.min(y, containerRect.height - rect.height));

      currentDragRef.current.style.left = `${x}px`;
      currentDragRef.current.style.top = `${y}px`;

      setPositions((prev) => ({
        ...prev,
        [id]: { top: y, left: x },
      }));

      currentDragRef.current = null;
    }
  };

  const onTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    const touch = e.touches[0];
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left;
    const offsetY = touch.clientY - rect.top;
    element.style.zIndex = "10";
    setTouchState({ element, offsetX, offsetY });
  };

  const onTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!touchState.element) return;

    const touch = e.touches[0];
    const containerRect = (
      e.currentTarget as HTMLElement
    ).getBoundingClientRect();

    let x = touch.clientX - containerRect.left - touchState.offsetX;
    let y = touch.clientY - containerRect.top - touchState.offsetY;

    const elemRect = touchState.element.getBoundingClientRect();
    x = Math.max(0, Math.min(x, containerRect.width - elemRect.width));
    y = Math.max(0, Math.min(y, containerRect.height - elemRect.height));

    touchState.element.style.left = `${x}px`;
    touchState.element.style.top = `${y}px`;
  };

  const onTouchEnd = () => {
    if (touchState.element && touchState.id) {
      touchState.element.style.zIndex = "";

      const finalLeft = parseFloat(touchState.element.style.left);
      const finalTop = parseFloat(touchState.element.style.top);

      setPositions((prev) => ({
        ...prev,
        [touchState.id!]: { top: finalTop, left: finalLeft },
      }));
    }
    setTouchState({ element: null, offsetX: 0, offsetY: 0 });
  };

  const resetPositions = () => {
    console.log("Resetting positions to initial state");
    setPositions(initialPositions);
  };

  return {
    currentDragRef,
    positions,
    touchState,
    onDragStart,
    onDragOver,
    onDrop,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    resetPositions,
  };
};
