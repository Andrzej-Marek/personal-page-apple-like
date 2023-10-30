import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import CVPage from "~/pages/cv/CVPage";

export default component$(() => {
  return <CVPage />;
});

export const head: DocumentHead = {
  title: "Andrzej Marek - CV",
  meta: [
    {
      name: "description",
      content:
        "View the CV of Andrzej Marek, a React and Node.js developer with expertise in web application development. Explore my skills, experience, and qualifications.",
    },
    {
      name: "keywords",
      content:
        "CV, resume, Andrzej Marek, React developer, Node.js developer, web development, software development, qualifications",
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
      content: "Andrzej Marek - CV",
    },
    {
      name: "og:description",
      content:
        "View the CV of Andrzej Marek, a React and Node.js developer with expertise in web application development. Explore my skills, experience, and qualifications.",
    },
    {
      name: "og:image",
      content: "https://andrzejmarek.com/images/ogimage.webp",
    },
    {
      name: "og:url",
      content: "https://andrzejmarek.com/cv", // Replace with the actual URL of your CV page
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
      content: "Andrzej Marek - CV",
    },
    {
      name: "twitter:description",
      content:
        "View the CV of Andrzej Marek, a React and Node.js developer with expertise in web application development. Explore my skills, experience, and qualifications.",
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
      content: "https://andrzejmarek.com/cv", // Replace with the actual URL of your CV page
    },
  ],
};
