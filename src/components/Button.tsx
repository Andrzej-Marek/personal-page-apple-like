import { ButtonHTMLAttributes, Slot, component$ } from "@builder.io/qwik";

const Button = component$((props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      class="bg-primary w-full text-sm text-white p-4 rounded-xl"
    >
      <Slot />
    </button>
  );
});

export default Button;
