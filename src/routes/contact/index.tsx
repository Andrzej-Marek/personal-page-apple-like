import CompletedSVG from "~/media/images/completed.svg?jsx";
import { $, component$, useSignal } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
import { z } from "zod";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Input from "~/components/Input";
import TextArea from "~/components/TextArea";
import ContactCard from "~/containers/ContactCard";
import SocialMediaCard from "~/containers/SocialMediaCard";
import { EmailService } from "~/services/Emial.service";

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
          <ContactCard />
          <SocialMediaCard />
        </div>
        <Card headingSize="xl" heading="Let’s Work Together.">
          <ContactForm />
        </Card>
      </div>
    </section>
  );
});

export const useFormLoader = routeLoader$<InitialValues<ContactSchema>>(() => ({
  message: "",
  email: "",
  name: "",
}));

const ContactForm = component$(() => {
  const status = useSignal<"INITIAL" | "IN_PROGRESS" | "SUBMITTED" | "ERROR">(
    "INITIAL"
  );

  const [, { Form, Field }] = useForm<ContactSchema>({
    loader: useFormLoader(),
    validate: zodForm$(ContactSchema),
  });

  const handleSubmit = $<SubmitHandler<ContactSchema>>(async (values) => {
    status.value = "IN_PROGRESS";
    try {
      await EmailService.send({
        email: values.email,
        message: values.message,
        name: values.name ?? undefined,
      });
      status.value = "SUBMITTED";
    } catch (error) {
      status.value = "ERROR";
    }
  });

  if (status.value == "SUBMITTED") {
    return (
      <div class="flex items-center justify-center flex-col text-center gap-8">
        <div>
          <h2 class="text-xl font-semibold">Thank You for Contacting Me!</h2>

          <p class="text-sm text-gray">I'll answer as soon as possible</p>
        </div>
        <CompletedSVG class="aspect- w-full max-w-[200px] h-auto rounded-xl" />
      </div>
    );
  }

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

      <Button
        disabled={status.value === "IN_PROGRESS"}
        type="submit"
        loading={status.value === "IN_PROGRESS"}
      >
        Send
      </Button>
      {status.value === "ERROR" && (
        <div class="text-center">
          <p class="text-base text-red-500 font-semibold">
            It seems there was an issue with the contact form submission.
          </p>
          <p class="text-sm">
            Please feel free to reach out to me directly via email at{" "}
            <a
              href="mailto:contact@andrzejmarek.com"
              class="text-primary font-semibold underline whitespace-nowrap"
            >
              contact@andrzejmarek.com
            </a>{" "}
            or by phone at{" "}
            <a
              href="tel:+48794965465"
              class="text-primary font-semibold underline whitespace-nowrap"
            >
              (+48) 794 965 465
            </a>
            . I apologize for any inconvenience.
          </p>
        </div>
      )}
    </Form>
  );
});

export const head: DocumentHead = {
  title: "Contact Andrzej Marek - Software Developer",
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
      content: "Contact Andrzej Marek - Software Developer",
    },
    {
      name: "og:description",
      content:
        "Contact Andrzej Marek, a React and Node.js developer, to discuss collaborations, projects, or any inquiries related to web application development. Get in touch with me today.",
    },
    {
      name: "og:image",
      content: "https://andrzejmarek.com/images/ogimage.webp",
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
      content: "Contact Andrzej Marek - Software Developer",
    },
    {
      name: "twitter:description",
      content:
        "Contact Andrzej Marek, a React and Node.js developer, to discuss collaborations, projects, or any inquiries related to web application development. Get in touch with me today.",
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
      content: "https://andrzejmarek.com/contact", // Replace with the actual URL of your contact page
    },
  ],
};
