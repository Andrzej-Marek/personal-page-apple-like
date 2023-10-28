import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import TextOverlay from "~/components/TextOverlay";
import ContactMeCard from "~/containers/ContactMeCard";
import ExperienceCard from "~/containers/ExperienceCard";
import LetsWorkTogethersCard from "~/containers/LetWorkTogetherCard";
import PersonalCard from "~/containers/PersonalCard";
import ProjectsCard from "~/containers/Projects";
import ServicesCard from "~/containers/ServicesCard";
import WorkHistoryCard from "~/containers/WorkHistory";

// export const apiKey = process.env.PUBLIC_BUILDER_API_KEY as string;

export default component$(() => {
  return (
    <div>
      <TextOverlay />
      <section class="container space-y-6 mt-4 md:mt-20">
        <div class="grid lg:grid-cols-main-layout gap-6">
          <PersonalCard />
          <div class="space-y-6">
            <div class="grid h-fit md:grid-cols-2 gap-6 ">
              <ProjectsCard />
              <ContactMeCard />
            </div>
            <div class="grid h-fit md:grid-cols-2 xl:grid-cols-3/1fr   gap-6 ">
              <LetsWorkTogethersCard />
              <WorkHistoryCard />
            </div>
          </div>
        </div>

        {/* NEW ROW */}
        <div class="grid gap-6 md:grid-cols-2">
          <ExperienceCard />
          <ServicesCard />
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Andrej Marek - React & Node.js Developer",
  links: [
    {
      rel: "canonical",
      href: "https://andrzejmarek.com",
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "I'm a passionate React and Node.js developer, creating web apps to bring your ideas to life. Learn more about me and my work on this website.",
    },

    {
      name: "charset",
      content: "UTF-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },

    {
      name: "description",
      content:
        "I'm a passionate React and Node.js developer, creating web apps to bring your ideas to life. Learn more about me and my work on this website.",
    },
    {
      name: "keywords",
      content:
        "React developer, Node.js developer, web app development, software engineer, front-end developer, back-end developer",
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
      content: "Andrzej Marek - React & Node.js Developer",
    },
    {
      name: "og:description",
      content:
        "I'm a passionate React and Node.js developer, creating web apps to bring your ideas to life. Learn more about me and my work on this website.",
    },
    {
      name: "og:image",
      content: "https://andrzejmarek.com/images/profile.webp",
    },
    {
      name: "og:url",
      content: "https://andrzejmarek.com",
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
      content: "Andrzej Marek - React & Node.js Developer",
    },
    {
      name: "twitter:description",
      content:
        "I'm a passionate React and Node.js developer, creating web apps to bring your ideas to life. Learn more about me and my work on this website.",
    },
    {
      name: "twitter:image",
      content: "https://andrzejmarek.com/images/profile.webp",
    },
    {
      name: "twitter:site",
      content: "@EkstraPower",
    },
    {
      name: "twitter:creator",
      content: "@EkstraPower",
    },
  ],
};
