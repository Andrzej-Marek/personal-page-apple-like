import { component$ } from "@builder.io/qwik";

const CloseIcon = component$(({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      class={className}
    >
      <path
        d="M16.0864 10.1426L10.1436 16.0854M10.1436 10.1426L16.0864 16.0854"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M25 13C25 18.6568 25 21.4853 23.2426 23.2426C21.4853 25 18.6568 25 13 25C7.34314 25 4.51472 25 2.75736 23.2426C1 21.4853 1 18.6568 1 13C1 7.34314 1 4.51472 2.75736 2.75736C4.51472 1 7.34314 1 13 1C18.6568 1 21.4853 1 23.2426 2.75736C24.4112 3.92585 24.8027 5.56786 24.9339 8.2"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
});

export default CloseIcon;
