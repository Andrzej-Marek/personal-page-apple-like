import Project from "~/media/images/project.webp?jsx";
import { component$ } from "@builder.io/qwik";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";

const ProjectsCard = component$(() => {
  return (
    <Card>
      <div class="flex flex-col justify-center items-center gap-4">
        <Project
          class=" w-full max-w-[200px] h-auto rounded-xl"
          alt="My projects"
        />
        <CallToAction title="Check more" subTitle="about me" />
      </div>
    </Card>
  );
});

export default ProjectsCard;
