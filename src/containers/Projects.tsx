import Project from "~/media/images/project.webp?jsx";
import { component$ } from "@builder.io/qwik";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";
import { Link } from "@builder.io/qwik-city";

const ProjectsCard = component$(() => {
  return (
    <Card>
      <Link href="/portfolio" class="h-full">
        <div class="flex flex-col justify-center items-center gap-4">
          <Project
            class=" w-full max-w-[200px] h-auto rounded-xl"
            alt="My projects"
          />
          <CallToAction title="Projects" subTitle="PORTFOLIO" />
        </div>
      </Link>
    </Card>
  );
});

export default ProjectsCard;
