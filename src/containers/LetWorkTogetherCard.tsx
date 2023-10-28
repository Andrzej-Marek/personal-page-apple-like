import { component$ } from "@builder.io/qwik";
import Card from "~/components/Card";

const LetsWorkTogethersCard = component$(() => {
  return (
    <Card class="min-h-[180px] bg-lets-work-together bg-no-repeat bg-center bg-cover">
      <div class="absolute z-20 top-0 left-0 bottom-0 right-0 w-full h-full">
        <div class="w-full h-full flex flex-col items-center justify-center text-white">
          <span class="text-xl lg:text-2xl xl:text-4xl font-bold">
            Let's work together 💪
          </span>
        </div>
      </div>
    </Card>
  );
});

export default LetsWorkTogethersCard;
