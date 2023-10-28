import { component$ } from "@builder.io/qwik";
import Card from "~/components/Card";
import AppIcon from "~/components/icons/AppIcon";
import CloudIcon from "~/components/icons/CloudIcon";
import DashboardIcon from "~/components/icons/DashboardIcon";
import WebAppIcon from "~/components/icons/WebAppIcon";
import LetsWorkTogethersCard from "~/containers/LetWorkTogetherCard";
import ProjectsCard from "~/containers/Projects";

const ServicesPage = component$(() => {
  return (
    <section class="container space-y-6 mt-4 md:mt-20">
      <div class="grid lg:grid-cols-contact-layout gap-6">
        <Card>
          <div class="flex h-full flex-col gap-12 lg:gap-24 justify-center px-4">
            <ServiceIconElement icon={<CloudIcon />} text="CLOUD SOLUTIONS" />
            <ServiceIconElement
              icon={<WebAppIcon />}
              text="WEB APP DEVELOPMENT"
            />
            <ServiceIconElement
              icon={<AppIcon />}
              text="TECH AND TEAM LEAD SUPPORT"
            />
            <ServiceIconElement
              icon={<DashboardIcon />}
              text="COMPLETE MVP BUILD"
            />
          </div>
        </Card>
        <MyOfferingsCard />

        <ProjectsCard />
        <LetsWorkTogethersCard />
      </div>
    </section>
  );
});

const MyOfferingsCard = () => {
  return (
    <Card heading="My Offerings" headingSize="xl">
      <div class="grid gap-8 lg:gap-4 xl:gap-20 md:grid-cols-2">
        <div>
          <div class="text-primary uppercase text-lg font-semibold mb-4">
            CLOUD SOLUTIONS
          </div>
          <p class="text-gray text-sm">
            Crafting applications that are entirely cloud-based, allowing for
            effortless scalability and universal accessibility. My expertise in
            cloud technology empowers businesses to leverage the full potential
            of cloud infrastructure, creating robust and flexible applications.
          </p>
        </div>

        <div>
          <div class="text-primary uppercase text-lg font-semibold mb-4">
            WEB APP DEVELOPMENT
          </div>
          <p class="text-gray text-sm">
            I'm dedicated to creating exceptional web applications that deliver
            exceptional user experiences and meet the unique needs of businesses
            and users. My passion lies in crafting efficient, user-friendly, and
            innovative web solutions that drive success.
          </p>
        </div>

        <div>
          <div class="text-primary uppercase text-lg font-semibold mb-4">
            TECH AND TEAM LEAD SUPPORT
          </div>
          <p class="text-gray text-sm">
            In my role as a Tech and Team Lead, I provide comprehensive support,
            ensuring that technology and teams align seamlessly to achieve
            project success. My guidance and expertise help drive projects
            forward while fostering collaboration and growth within the team.
          </p>
        </div>

        <div>
          <div class="text-primary uppercase text-lg font-semibold mb-4">
            COMPLETE MVP BUILD
          </div>
          <p class="text-gray text-sm">
            I specialize in MVP (Minimum Viable Product) builds, efficiently
            transforming your vision into a functional product that allows you
            to validate your concept and bring it to market swiftly. My focus is
            on delivering a streamlined and essential version of your idea,
            setting the foundation for future development and success.
          </p>
        </div>
      </div>
    </Card>
  );
};

const ServiceIconElement = ({ icon, text }: { text: string; icon: any }) => (
  <div class="flex items-center gap-4">
    {icon}
    <span class="text-sm uppercase font-semibold">{text}</span>
  </div>
);

export default ServicesPage;
