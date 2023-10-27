import { component$ } from "@builder.io/qwik";
import Card from "~/components/Card";
import ListElement from "~/components/ListElement";

const EducationCard = component$(() => {
  return (
    <Card heading="Education">
      <div class="flex flex-1 flex-col h-full gap-4">
        <ListElement
          startDate={new Date("2013-10-01")}
          endDate={new Date("2017-07-01")}
          description="At the High School of Technology and Engineering, I acquired a solid foundation in technology and engineering, gaining essential skills and knowledge to thrive in these cutting-edge fields."
          title="High School of Technology and Engineering"
        />
      </div>
    </Card>
  );
});

export default EducationCard;
