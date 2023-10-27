import { Slot, component$ } from "@builder.io/qwik";
import classNames from "classnames";

const Card = component$(
  ({
    class: className,
    heading,
    headingSize = "md",
  }: {
    class?: string;
    heading?: string;
    headingSize?: "sm" | "md" | "lg" | "xl";
  }) => {
    return (
      <div
        class={classNames(
          "bg-white flex flex-col relative rounded-xl shadow-card p-4 ",
          className
        )}
      >
        {!!heading && (
          <div
            class={classNames("font-semibold mb-6", {
              "text-sm": headingSize === "sm",
              "text-md": headingSize === "md",
              "text-lg": headingSize === "lg",
              "text-xl md:text-2xl": headingSize === "xl",
            })}
          >
            {heading}
          </div>
        )}
        <Slot />
      </div>
    );
  }
);

export default Card;
