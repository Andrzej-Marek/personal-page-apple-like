import { component$ } from "@builder.io/qwik";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";

const ExperienceCard = component$(() => {
  return (
    <Card>
      <div class="flex flex-col h-full justify-center items-center gap-4">
        {/* <div class="grid sm:grid-cols-3 md:grid-cols-2  lg:grid-cols-3 gap-6"> */}
        <div class="flex flex-wrap justify-center gap-6">
          <Tile lineOne="years" lineTwo="experience" value="08" />
          <Tile lineOne="Clients" lineTwo="worldwide" value="+30" />
          <Tile lineOne="total" lineTwo="Projects" value="+50" />
        </div>
        <CallToAction subTitle="Specialization" title="Experience" />
      </div>
    </Card>
  );
});

const Tile = ({
  lineOne,
  lineTwo,
  value,
}: {
  value: string;
  lineOne: string;
  lineTwo: string;
}) => {
  return (
    <div class="rounded bg-gray-LIGHT p-4">
      <div class="flex flex-col gap-4 text-center font-semibold">
        <span class="text-black text-xl md:text-2xl xl:text-3xl">{value}</span>
        <span class="uppercase text-sm text-gray">
          {lineOne} <br /> {lineTwo}
        </span>
      </div>
    </div>
  );
};

export default ExperienceCard;
