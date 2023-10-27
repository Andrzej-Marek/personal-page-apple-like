import { component$ } from "@builder.io/qwik";
import Card from "~/components/Card";

const SkillsCard = component$(() => {
  return (
    <Card heading="Skills">
      <div class="space-y-4">
        <div class="grid grid-cols-2 h-full gap-4">
          <Element language="JavaScript" level="+7 years" />
          <Element language="TypeScript" level="+7 years" />
          <Element language="React" level="+7 years" />
          <Element language="NodeJS" level="+7 years" />
          <Element language="GraphQL" level="+7 years" />
          <Element language="NestJS" level="+5 years" />
          <Element language="NextJS" level="+5 years" />
          <Element language="AWS" />
          <Element language="ThreeJS" />
          <Element language="Firebase" />
          <Element language="Git" />
          <Element language="Docker" />
          <Element language="MongoDB" />
          <Element language="SQL" />
        </div>
        <div class="font-semibold text-xs uppercase text-gray text-center">
          And many many more 💪
        </div>
      </div>
    </Card>
  );
});

const Element = ({ language, level }: { language: string; level?: string }) => (
  <div class="text-center ">
    <div class="text-primary text-lg font-semibold">{language}</div>
    {!!level && <div class="text-gray text-sm">{level}</div>}
  </div>
);

export default SkillsCard;
