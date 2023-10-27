import { $, component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
import { z } from "zod";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Input from "~/components/Input";
import TextArea from "~/components/TextArea";
import GithubIcon from "~/components/icons/GithubIcon ";
import LinkedinIcon from "~/components/icons/LinkedinIcon";
import LocalizationIcon from "~/components/icons/LocalizationIcon";
import MailIcon from "~/components/icons/MailIcon";
import PhoneIcon from "~/components/icons/PhoneIcon";
import TwitterIcon from "~/components/icons/TwitterIcon ";

const ContactSchema = z.object({
  name: z.string().nullish(),
  email: z.string().email(),
  message: z
    .string()
    .min(10, "Message must contain at least 10 characters")
    .max(2000, "String must contain at most 2000 characters"),
});

type ContactSchema = z.infer<typeof ContactSchema>;

export default component$(() => {
  return (
    <section class="container space-y-6 mt-4 md:mt-20">
      <div class="grid lg:grid-cols-contact-layout gap-6">
        <div class="grid md:grid-cols-2  gap-6 lg:block lg:space-y-6">
          <Card headingSize="sm" heading="Contacts">
            <div class="space-y-6">
              <ContactElement
                section="LOCALIZATION"
                text={["Pszczyńska 116", "43-254 Warszowice", "Poland"]}
              >
                <LocalizationIcon />
              </ContactElement>
              <ContactElement
                section="MAIL"
                text={["andrzejmarek116@gmail.com"]}
              >
                <MailIcon />
              </ContactElement>
              <ContactElement section="PHONE" text={["(+48) 794 965 465"]}>
                <PhoneIcon />
              </ContactElement>
            </div>
          </Card>
          <Card headingSize="sm" heading="Social Media" class="h-fit">
            <div class="flex justify-center md:justify-between gap-12 px-6">
              <LinkedinIcon />
              <GithubIcon />
              <TwitterIcon />
            </div>
          </Card>
        </div>
        <Card headingSize="xl" heading="Let’s Work Together.">
          <ContactForm />
        </Card>
      </div>
    </section>
  );
});

const ContactElement = ({
  children,
  section,
  text,
}: {
  children: any;
  section: string;
  text: string[];
}) => {
  return (
    <div class="flex gap-6 items-center">
      <div class="p-3 lg:p-6">{children}</div>
      <div class="font-semibold space-y-1">
        <span class="uppercase text-xs text-gray ">{section}</span>
        <div class="text-sm ">
          {text.map((t) => (
            <div key={t} class="break-words w-[150px] sm:w-full">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const useFormLoader = routeLoader$<InitialValues<ContactSchema>>(() => ({
  message: "",
  email: "",
  name: "",
}));

const ContactForm = component$(() => {
  const [, { Form, Field }] = useForm<ContactSchema>({
    loader: useFormLoader(),
    validate: zodForm$(ContactSchema),
  });

  const handleSubmit = $<SubmitHandler<ContactSchema>>((values, event) => {
    // Runs on client
    console.log({ values, event });
  });

  return (
    <Form class="flex flex-col h-full gap-4" onSubmit$={handleSubmit}>
      <Field name="name">
        {(field, props) => (
          <>
            <Input
              {...props}
              placeholder="Enter your name / company name"
              type="text"
              value={field.value}
            />

            {!!field.error && (
              <div class="text-sm text-red-500 font-medium">{field.error}</div>
            )}
          </>
        )}
      </Field>
      <Field name="email">
        {(field, props) => (
          <>
            <Input
              {...props}
              placeholder="Enter your e-mail address"
              type="email"
              value={field.value}
            />
            {!!field.error && (
              <div class="text-sm text-red-500 font-medium">{field.error}</div>
            )}
          </>
        )}
      </Field>
      <Field name="message">
        {(field, props) => (
          <>
            <TextArea
              {...props}
              placeholder="Your message"
              wrapperClass="flex-1"
              class="h-full"
              value={field.value}
            />
            {!!field.error && (
              <div class="text-sm  text-red-500 font-medium">{field.error}</div>
            )}
          </>
        )}
      </Field>

      <Button type="submit">Send</Button>
    </Form>
  );
});

export const head: DocumentHead = {
  title: "Contact Andrzej Marek - React & Node.js Developer",
  links: [
    {
      rel: "canonical",
      href: "https://andrzejmarek.com/contact",
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "Contact Andrzej Marek, a React and Node.js developer, to discuss collaborations, projects, or any inquiries related to web application development. Get in touch with me today.",
    },
    {
      name: "keywords",
      content:
        "contact, get in touch, React developer, Node.js developer, web development, software development",
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
      content: "Contact Andrzej Marek - React & Node.js Developer",
    },
    {
      name: "og:description",
      content:
        "Contact Andrzej Marek, a React and Node.js developer, to discuss collaborations, projects, or any inquiries related to web application development. Get in touch with me today.",
    },
    {
      name: "og:image",
      content: "https://andrzejmarek.com/contact-image.jpg", // Replace with an image related to your contact page or your profile image
    },
    {
      name: "og:url",
      content: "https://andrzejmarek.com/contact", // Replace with the actual URL of your contact page
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
      content: "Contact Andrzej Marek - React & Node.js Developer",
    },
    {
      name: "twitter:description",
      content:
        "Contact Andrzej Marek, a React and Node.js developer, to discuss collaborations, projects, or any inquiries related to web application development. Get in touch with me today.",
    },
    {
      name: "twitter:image",
      content: "https://andrzejmarek.com/contact-image.jpg", // Replace with an image related to your contact page or your profile image
    },
    {
      name: "twitter:site",
      content: "@yourtwitterhandle", // Replace with your actual Twitter handle
    },
    {
      name: "twitter:creator",
      content: "@yourtwitterhandle", // Replace with your actual Twitter handle
    },
    {
      name: "canonical",
      content: "https://andrzejmarek.com/contact", // Replace with the actual URL of your contact page
    },
  ],
};
