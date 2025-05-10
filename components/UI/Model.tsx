"use client";
import { useModel } from "@/hooks/useModel";
import { JSX, useRef } from "react";
import Button from "./Button";
import ModelOverlay from "./ModelOverlay";

interface Props {
  button: {
    props: React.ButtonHTMLAttributes<HTMLButtonElement>;
    content: React.ReactNode;
  };
  model: React.ReactNode;
  withOverlay?: boolean;
  containerClassName?: string;
}
/**
 * Model client component that renders a button and a model (modal) with optional overlay.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.button - The button properties and content.
 * @param {Object} props.model - The model content to be displayed.
 * @param {boolean} props.withOverlay - Flag to determine if the model should be displayed with an overlay.
 * @param {string} props.containerClassName - Additional class names for the container.
 *
 * @returns {JSX.Element} The rendered Model component.
 */
export default function Model({
  button,
  model,
  withOverlay,
  containerClassName,
}: Props): JSX.Element {
  const modelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useModel(modelRef);

  return (
    <div
      ref={!withOverlay ? modelRef : null}
      className={"relative " + containerClassName}
    >
      <Button
        {...button.props}
        className={button.props.className + " " + (isOpen ? "open" : "")}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("Button clicked");
          setIsOpen((prev) => !prev);
        }}
      >
        {button.content}
      </Button>

      {withOverlay ? (
        <ModelOverlay isOpen={isOpen}>
          <div ref={modelRef}>{model}</div>
        </ModelOverlay>
      ) : (
        isOpen && <>{model}</>
      )}
    </div>
  );
}
