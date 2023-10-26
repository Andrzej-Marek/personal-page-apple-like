import { component$ } from "@builder.io/qwik";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";
import APIIcon from "~/components/icons/APIIcon";
import AppIcon from "~/components/icons/AppIcon";
import CodeIcon from "~/components/icons/CodeIcon";
import DatabaseIcon from "~/components/icons/DatabaseIcon";

const ServicesCard = component$(() => {
  return (
    <Card>
      <div class="flex flex-col h-full justify-center items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center">
          <div class="grid gap-8 grid-cols-2 sm:grid-cols-4 md:grid-cols-2 md:gap-16 lg:grid-cols-4  ">
            <CodeIcon />
            <AppIcon />
            <DatabaseIcon />
            <APIIcon />
          </div>
        </div>
        <CallToAction title="Services Offering" subTitle="Specialization" />
      </div>
    </Card>
  );
});

export default ServicesCard;
