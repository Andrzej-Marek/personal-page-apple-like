import LetsWorkTogether from "~/media/images/lets-work-together.webp?jsx";
import { component$ } from "@builder.io/qwik";
import Card from "~/components/Card";

const LetsWorkTogethersCard = component$(() => {
  return (
    <Card class="min-h-[180px]">
      <LetsWorkTogether
        class="w-full left-0 top-0 z-10 h-full absolute rounded-xl"
        alt="Let's work together"
      />
      <div class="absolute z-20 top-0 left-0 bottom-0 right-0 w-full h-full">
        <div class="w-full h-full flex flex-col items-center justify-center text-white">
          <h5 class="text-xl lg:text-2xl xl:text-4xl font-bold">
            Let's work together
          </h5>
        </div>
      </div>
    </Card>
  );
});

export default LetsWorkTogethersCard;
