import { Slot, component$ } from "@builder.io/qwik";
import classNames from "classnames";

const Card = component$(({ class: className }: { class?: string }) => {
  return (
    <div
      class={classNames(
        "bg-white relative rounded-xl shadow-card p-4 ",
        className
      )}
    >
      <Slot />
    </div>
  );
});

export default Card;
