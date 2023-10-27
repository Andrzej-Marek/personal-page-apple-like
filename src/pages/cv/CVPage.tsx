import { component$ } from "@builder.io/qwik";
import ContactCard from "~/containers/ContactCard";
import ContactMeCard from "~/containers/ContactMeCard";
import EducationCard from "~/containers/EducationCard";
import LanguagesCard from "~/containers/LanguagesCard";
import LetsWorkTogethersCard from "~/containers/LetWorkTogetherCard";
import PersonalCard from "~/containers/PersonalCard";
import ProjectsHistoryCard from "~/containers/ProjectsHistoryCard";
import SkillsCard from "~/containers/SkillsCard";
import SocialMediaCard from "~/containers/SocialMediaCard";

const CVPage = component$(() => {
  return (
    <section class="container space-y-6 mt-4 md:mt-20">
      <div class="grid gap-6 lg:grid-cols-cv-layout">
        <div class="space-y-6">
          <PersonalCard hideCallToAction />
          <ContactCard variant="compact" />
          <SocialMediaCard />
        </div>
        <div class="space-y-6">
          <ProjectsHistoryCard />
          <LetsWorkTogethersCard />
          <EducationCard />
        </div>
        <div class="space-y-6">
          <LanguagesCard />
          <SkillsCard />
          <ContactMeCard />
        </div>
      </div>
    </section>
  );
});

export default CVPage;
