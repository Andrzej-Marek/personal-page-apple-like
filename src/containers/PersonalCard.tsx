import { component$ } from "@builder.io/qwik";
import Profile from "~/media/images/profile.webp?jsx";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";

const PersonalCard = component$(() => {
  return (
    <Card>
      <div class="flex flex-col justify-center items-center gap-2">
        <Profile
          class="aspect-square w-full max-w-[200px] h-auto rounded-xl"
          alt="Andrzej Marek"
        />
        <div class="text-center">
          <h2 class="text-gray font-semibold text-xs">SOFTWARE DEVELOPER</h2>
          <h1 class="text-xl lg:text-2xl font-semibold">Andrzej Marek</h1>
        </div>
        <div>
          <p class="text-xs text-gray ">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <CallToAction title="Check more" subTitle="about me" />
      </div>
    </Card>
  );
});

export default PersonalCard;
