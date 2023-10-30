import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { fetchEntries } from "@builder.io/sdk-qwik";
import { PortfolioData } from "~/api/porfolio.api";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";
import Spinner from "~/components/Spinner";
import TruncatedHtml from "~/components/TruncatedHtml";
import ContactMeCard from "~/containers/ContactMeCard";
import ExperienceCard from "~/containers/ExperienceCard";
import LetsWorkTogethersCard from "~/containers/LetWorkTogetherCard";

export const BUILDER_PUBLIC_API_KEY = "643b6175fa2a4417aef11522cc42f205";

export const BUILDER_MODEL = "page";

export default component$(() => {
  const linksResource = useResource$(() =>
    fetchEntries({
      model: "projects",
      apiKey: BUILDER_PUBLIC_API_KEY,
    })
  );

  return (
    <Resource
      value={linksResource}
      onPending={() => <Spinner variant="dark" class="mx-auto w-full " />}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(content) => (
        <section class="container space-y-6 mt-4 md:mt-20">
          <div class="grid gap-6 md:grid-cols-2">
            {content?.results.map((result, index) => {
              let additionalContent = null;

              if (index === 1) {
                additionalContent = <ContactMeCard />;
              }

              if (index === 3) {
                additionalContent = <LetsWorkTogethersCard />;
              }

              if (index === 5) {
                additionalContent = <ExperienceCard />;
              }

              return (
                <>
                  {!!additionalContent && additionalContent}
                  <PortfolioCard
                    key={result.id}
                    data={result.data as PortfolioData}
                    name={result.name!}
                  />
                </>
              );
            })}
          </div>
        </section>
      )}
    />
  );
});

const PortfolioCard = component$(
  ({ data, name }: { data: PortfolioData; name: string }) => {
    return (
      <Card>
        <Link class="w-full" href={`/portfolio/${name}`}>
          <div class="grid gap-6 items-center  lg:grid-cols-2">
            <img
              src={data.images[0].image}
              alt={data.images[0].alt}
              width={200}
              height={200}
              class="rounded-xl aspect-square overflow-hidden mx-auto"
            />

            <div class="flex flex-col h-full gap-4">
              <CallToAction
                subTitle={data.callToActionSubTitle}
                title={data.callToActionTitle}
              />

              <TruncatedHtml content={data.description} maxLength={140} />
              <div class="flex justify-between items-center gap-4">
                {data.technologies.splice(0, 4).map((el) => (
                  <img
                    key={el.name}
                    src={el.icon}
                    class="w-10 h-10"
                    width={40}
                    height={40}
                    alt={el.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </Link>
      </Card>
    );
  }
);

export const head: DocumentHead = {
  title: "Portfolio - Andrzej Marek, Software Developer",
  links: [
    {
      rel: "canonical",
      href: "https://andrzejmarek.com/portfolio",
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "Explore my portfolio showcasing the projects I've developed as a React and Node.js developer. Get an overview of my skills and expertise in web application development.",
    },
    {
      name: "keywords",
      content:
        "portfolio, projects, web development, React, Node.js, software development, web apps, developer",
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
      content: "Portfolio - Andrzej Marek, Software Developer",
    },
    {
      name: "og:description",
      content:
        "Explore my portfolio showcasing the projects I've developed as a React and Node.js developer. Get an overview of my skills and expertise in web application development.",
    },
    {
      name: "og:image",
      content: "https://andrzejmarek.com/images/ogimage.webp",
    },
    {
      name: "og:url",
      content: "https://andrzejmarek.com/portfolio", // Replace with the actual URL of your portfolio page
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
      content: "Portfolio - Andrzej Marek, Software Developer",
    },
    {
      name: "twitter:description",
      content:
        "Explore my portfolio showcasing the projects I've developed as a React and Node.js developer. Get an overview of my skills and expertise in web application development.",
    },
    {
      name: "twitter:image",
      content: "https://andrzejmarek.com/images/ogimage.webp",
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
      content: "https://andrzejmarek.com/portfolio", // Replace with the actual URL of your portfolio page
    },
  ],
};
