import { component$ } from "@builder.io/qwik";

const ArrowRight = component$(({ className }: { className?: string }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={className}
    >
      <path
        d="M3.66699 11.5H5.95866M18.3337 11.5L12.8337 6M18.3337 11.5L12.8337 17M18.3337 11.5H8.70866"
        stroke="#8D8D8D"
        stroke-width="1.46667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default ArrowRight;
