import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { BUILDER_PUBLIC_API_KEY } from "..";
import { fetchOneEntry } from "@builder.io/sdk-qwik";
import Card from "~/components/Card";
import { PortfolioData, PortfolioResult } from "~/api/porfolio.api";
import { DocumentHead, routeLoader$, useLocation } from "@builder.io/qwik-city";

import LetsWorkTogethersCard from "~/containers/LetWorkTogetherCard";
import Spinner from "~/components/Spinner";

export const useProject = routeLoader$(async (requestEvent) => {
  const project = requestEvent.params.project;
  const response = await fetch(
    `https://cdn.builder.io/api/v3/content/projects?apiKey=643b6175fa2a4417aef11522cc42f205&query.name=${project}`
  );
  return await response.json();
});

export default component$(() => {
  const location = useLocation();

  const linksResource = useResource$(() =>
    fetchOneEntry({
      model: "projects",
      apiKey: BUILDER_PUBLIC_API_KEY,
      query: {
        name: location.params.project,
      },
    })
  );

  return (
    <Resource
      value={linksResource}
      onPending={() => <Spinner variant="dark" class="mx-auto w-full " />}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(productDetails) => (
        <>
          <ProjectPage data={productDetails?.data as PortfolioData} />
        </>
      )}
    />
  );
});

const formatDate = (date: Date) =>
  `${date.getDate()}.${date.getMonth()}.${date.getUTCFullYear()}`;

const ProjectPage = component$(({ data }: { data: PortfolioData }) => {
  return (
    <section class="container space-y-6 mt-4 md:mt-20">
      <div class="grid gap-6 lg:grid-cols-2">
        <div class="space-y-4 ">
          <Card class="space-y-4 ">
            <div class="font-semibold text-center">
              <h2 class="text-xs text-gray uppercase">
                {data.callToActionSubTitle}
              </h2>
              <h1 class="text-2xl text-black xl:text-4xl">
                {data.callToActionTitle}
              </h1>
            </div>

            <div class="font-semibold text-sm space-x-1 text-gray">
              <span>{formatDate(new Date(data.startDate))}</span>
              <span>-</span>
              <span>
                {data.endDate ? formatDate(new Date(data.endDate)) : "NOW"}
              </span>
            </div>

            <div
              class="text-gray flex-1 text-sm leading-6"
              dangerouslySetInnerHTML={data.description}
            />
          </Card>
          <Card heading="Technology">
            <div class="flex items-center justify-evenly gap-4 flex-wrap">
              {data.technologies.map((tech) => (
                <div class="flex flex-col items-center gap-2" key={tech.name}>
                  <img
                    src={tech.icon}
                    class="w-10 h-10"
                    width={40}
                    height={40}
                    alt={tech.name}
                  />
                  <span class="text-sm text-gray font-semibold uppercase">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card heading="My role">
            <div
              class="text-gray flex-1 text-sm leading-6 "
              dangerouslySetInnerHTML={data.about}
            />
          </Card>
          <LetsWorkTogethersCard />
        </div>
        <div class="flex flex-col gap-4 items-center overflow-y-auto">
          {data.images.slice(0, 2).map((image) => (
            <img
              key={image.alt}
              src={image.image}
              alt={image.alt}
              width={500}
              height={500}
              class="aspect-square rounded-xl"
            />
          ))}
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.images.slice(2).map((image) => (
          <img
            key={image.alt}
            src={image.image}
            alt={image.alt}
            width={500}
            height={500}
            class="aspect-square rounded-xl"
          />
        ))}
      </div>
    </section>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const { results } = resolveValue(useProject) as {
    results: [PortfolioResult];
  };
  const [project] = results;
  return {
    title: `${project.data.callToActionTitle} - Andrzej Marek's Portfolio`,
    links: [
      {
        rel: "canonical",
        href: `https://andrzejmarek.com/portfolio/${project.name}`,
      },
    ],
    meta: [
      {
        name: "description",
        content: project.data.description,
      },
      {
        name: "keywords",
        content: `${project.name}, ${project.data.callToActionTitle}, ${project.data.callToActionSubTitle}, React developer, Node.js developer, web development, software development, technology stack`,
      },
      {
        name: "author",
        content: "Andrzej Marek",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "og:title",
        content: `${project.data.callToActionTitle} - Andrzej Marek's Portfolio`,
      },
      {
        name: "og:description",
        content: project.data.description,
      },
      {
        name: "og:image",
        content: project.data.images[0].image,
      },
      {
        name: "og:url",
        content: project.data.images[0].image,
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:locale",
        content: "en_US",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: `${project.data.callToActionTitle} - Andrzej Marek's Portfolio`,
      },
      {
        name: "twitter:description",
        content:
          "Explore the details of the project name, developed by Andrzej Marek. This project showcases my skills as a React and Node.js developer and highlights the technologies and solutions used.",
      },
      {
        name: "twitter:image",
        content: project.data.images[0].image,
      },
      {
        name: "twitter:site",
        content: "@EkstraPower", // Replace with your actual Twitter handle
      },
      {
        name: "twitter:creator",
        content: "@EkstraPower", // Replace with your actual Twitter handle
      },
      {
        name: "canonical",
        content: `https://andrzejmarek.com/portfolio/${project.name}`,
      },
    ],
  };
};
