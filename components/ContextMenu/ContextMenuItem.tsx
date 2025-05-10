import { TMenuItem } from "@/types/contextMenu.type";

interface ContextMenuItemProps {
  item: TMenuItem;
}
export default function ContextMenuItem({ item }: ContextMenuItemProps) {
  const { label, disabled, action } = item;
  return (
    <li
      className={`${disabled ? "text-main-gray-light" : ""} ${
        disabled ? "cursor-not-allowed" : ""
      } py-0.5 px-[1.25rem_.5rem] hover:bg-blue-400`}
    >
      {action ? (
        <button className="w-full text-left" onClick={() => action()}>
          {label}
        </button>
      ) : (
        <p>{label}</p>
      )}
    </li>
  );
}
