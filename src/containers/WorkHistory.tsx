import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";
import CVIcon from "~/components/icons/CVIcon";

const WorkHistoryCard = component$(() => {
  return (
    <Card>
      <Link href="/cv" class="h-full">
        <div class="flex flex-col h-full justify-center items-center gap-4">
          <div class="flex-1 flex">
            <CVIcon class="w-full  max-w-[50px] h-auto rounded-xl" />
          </div>
          <CallToAction subTitle="CV" title="Work History" />
        </div>
      </Link>
    </Card>
  );
});

export default WorkHistoryCard;
