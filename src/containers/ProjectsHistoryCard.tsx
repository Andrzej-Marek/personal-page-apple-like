import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { fetchEntries } from "@builder.io/sdk-qwik";
import { ExperienceResult } from "~/api/experience.api";
import Card from "~/components/Card";
import ListElement from "~/components/ListElement";
import Spinner from "~/components/Spinner";
import { BUILDER_PUBLIC_API_KEY } from "~/routes/portfolio";

const ProjectsHistoryCard = component$(() => {
  const linksResource = useResource$(() =>
    fetchEntries({
      model: "experience",
      apiKey: BUILDER_PUBLIC_API_KEY,
    })
  );

  return (
    <Resource
      value={linksResource}
      onPending={() => <Spinner variant="dark" class="mx-auto w-full " />}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(content) => (
        // @ts-ignore
        <ExperienceCard data={content!.results as ExperienceResult[]} />
      )}
    />
  );
});

const ExperienceCard = ({ data }: { data: ExperienceResult[] }) => {
  return (
    <Card heading="Projects">
      <div class="flex flex-1 flex-col h-full gap-4">
        {data.map((el) => (
          <ListElement
            key={el.data.title}
            startDate={new Date(el.data.startDate)}
            endDate={el.data.endDate ? new Date(el.data.endDate) : undefined}
            description={el.data.description}
            title={el.data.title}
          />
        ))}
      </div>
    </Card>
  );
};

export default ProjectsHistoryCard;
