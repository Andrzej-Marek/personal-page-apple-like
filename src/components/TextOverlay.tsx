import { component$ } from "@builder.io/qwik";

const TextOverlay = component$(() => {
  return (
    <div class="text-5xl md:text-6xl xl:text-9xl text-gray font-semibold opacity-10  fixed z-0 top-10 left-12 -rotate-12">
      Hello There!
    </div>
  );
});

export default TextOverlay;
