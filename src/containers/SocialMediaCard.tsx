import { component$ } from "@builder.io/qwik";
import Card from "~/components/Card";
import GithubIcon from "~/components/icons/GithubIcon ";
import LinkedinIcon from "~/components/icons/LinkedinIcon";
import TwitterIcon from "~/components/icons/TwitterIcon ";

const SocialMediaCard = component$(() => {
  return (
    <Card headingSize="sm" heading="Social Media" class="h-fit">
      <div class="flex justify-center md:justify-between gap-12 px-6">
        <a
          href="https://www.linkedin.com/in/andrzej-marek/"
          target="_blank"
          rel="nofollow"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/Andrzej-Marek"
          target="_blank"
          rel="nofollow"
        >
          <GithubIcon />
        </a>
        <a
          href="https://twitter.com/EkstraPower"
          target="_blank"
          rel="nofollow"
        >
          <TwitterIcon />
        </a>
      </div>
    </Card>
  );
});

export default SocialMediaCard;
