import { component$ } from "@builder.io/qwik";

const HamburgerIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="23"
      viewBox="0 0 29 23"
      fill="none"
      class={className}
    >
      <path
        d="M2 2H6.5M26 2H12.5"
        stroke="#1C274C"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M26 21H21.5M2 21H15.5"
        stroke="#1C274C"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M2.33301 11.3335H6.83301H26.333"
        stroke="#1C274C"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
  );
});

export default HamburgerIcon;
