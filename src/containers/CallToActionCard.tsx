import { Slot, component$ } from "@builder.io/qwik";
import { CallToActionProps } from "~/components/CallToAction";
import Card from "~/components/Card";

type CallToActionCardProps = CallToActionProps;

const CallToActionCard = component$(
  ({ subTitle, title }: CallToActionCardProps) => {
    return (
      <Card>
        <Slot />
        <CallToActionCard subTitle={subTitle} title={title} />
      </Card>
    );
  }
);

export default CallToActionCard;
