import { component$ } from "@builder.io/qwik";
import Card from "~/components/Card";

const LanguagesCard = component$(() => {
  return (
    <Card heading="Languages">
      <div class="grid grid-cols-2 h-full gap-4">
        <Element language="Polish" level="Native" />
        <Element language="English" level="C1" />
      </div>
    </Card>
  );
});

const Element = ({ language, level }: { language: string; level: string }) => (
  <div class="text-center space-y-2">
    <div class="text-primary text-lg font-semibold">{language}</div>
    <div class="text-gray text-sm">{level}</div>
  </div>
);

export default LanguagesCard;
