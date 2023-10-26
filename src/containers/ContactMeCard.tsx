import ImgIosChat from "~/media/images/ios-chat.webp?jsx";
import { component$ } from "@builder.io/qwik";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";

const ContactMeCard = component$(() => {
  return (
    <Card>
      <div class="flex flex-col h-full justify-center items-center gap-4">
        <div class="flex-1 flex flex-col items-center justify-center">
          <ImgIosChat
            class=" w-full max-w-[300px] h-auto rounded-xl "
            alt="Let's Talk!"
          />
        </div>
        <CallToAction title="Let's Talk!" subTitle="contact" />
      </div>
    </Card>
  );
});

export default ContactMeCard;
