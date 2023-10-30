import { ButtonHTMLAttributes, Slot, component$ } from "@builder.io/qwik";
import Spinner from "./Spinner";
import classNames from "classnames";

type ButtonProps = {
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button = component$(({ loading, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      class={classNames("bg-primary w-full text-sm text-white p-4 rounded-xl", {
        "flex gap-2 items-center justify-center": loading,
        "bg-gray cursor-not-allowed": props.disabled,
      })}
    >
      {loading && <Spinner variant="light" size="xs" />}
      <Slot />
    </button>
  );
});

export default Button;
