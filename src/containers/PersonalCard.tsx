import { component$ } from "@builder.io/qwik";
import Profile from "~/media/images/profile.webp?jsx";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";
import { Link } from "@builder.io/qwik-city";

const PersonalCard = component$(
  ({ hideCallToAction }: { hideCallToAction?: boolean }) => {
    const content = (
      <div class="flex flex-col h-full justify-center items-center space-y-2 ">
        <div class="flex-1 flex w-full flex-col items-center justify-center space-y-2">
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
              React & Node.js Maestro 🔥 Crafting Digital Marvels 💻 Turning
              Code into Creative Magic 💪
            </p>
          </div>
        </div>
        {!hideCallToAction && (
          <CallToAction title="Check more" subTitle="about me" />
        )}
      </div>
    );
    return (
      <Card>
        {hideCallToAction ? (
          content
        ) : (
          <Link href="/cv" class="w-full">
            {content}
          </Link>
        )}
      </Card>
    );
  }
);

export default PersonalCard;
