import { component$ } from "@builder.io/qwik";
import ArrowRight from "./icons/ArrowRight";

export type CallToActionProps = {
  subTitle: string;
  title: string;
};

const CallToAction = component$(({ subTitle, title }: CallToActionProps) => {
  return (
    <div class="flex justify-between w-full items-center">
      <div class="space-y-0.5 xl:space-y-1">
        <span class="text-xs text-gray uppercase ">{subTitle}</span>
        <div class="font-semibold text-black">{title}</div>
      </div>
      <ArrowRight />
    </div>
  );
});

export default CallToAction;
