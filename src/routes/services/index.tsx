import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import ServicesPage from "~/pages/services/ServicesPage";

export default component$(() => {
  return <ServicesPage />;
});

export const head: DocumentHead = {
  title: "Services - Andrzej Marek, Software Developer",
  links: [
    {
      rel: "canonical",
      href: "https://andrzejmarek.com/services",
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "Explore the services offered by Andrzej Marek, a skilled React and Node.js developer. From Cloud Solutions to Web App Development and Tech & Team Lead Support, discover how I can help bring your projects to life.",
    },
    {
      name: "keywords",
      content:
        "services, Cloud Solutions, Web App Development, Tech & Team Lead Support, MVP Build, React developer, Node.js developer, web development",
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
      content: "Services - Andrzej Marek, Software Developer",
    },
    {
      name: "og:description",
      content:
        "Explore the services offered by Andrzej Marek, a skilled React and Node.js developer. From Cloud Solutions to Web App Development and Tech & Team Lead Support, discover how I can help bring your projects to life.",
    },
    {
      name: "og:image",
      content: "https://andrzejmarek.com/images/ogimage.webp",
    },
    {
      name: "og:url",
      content: "https://andrzejmarek.com/services", // Replace with the actual URL of your services card
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
      content: "Services - Andrzej Marek, Software Developer",
    },
    {
      name: "twitter:description",
      content:
        "Explore the services offered by Andrzej Marek, a skilled React and Node.js developer. From Cloud Solutions to Web App Development and Tech & Team Lead Support, discover how I can help bring your projects to life.",
    },
    {
      name: "twitter:image",
      content: "https://andrzejmarek.com/images/services.webp", // Replace with an image related to your services
    },
    {
      name: "twitter:site",
      content: "@EkstraPower", // Replace with your actual Twitter handle
    },
    {
      name: "twitter:creator",
      content: "@EkstraPower", // Replace with your actual Twitter handle
    },
  ],
};
