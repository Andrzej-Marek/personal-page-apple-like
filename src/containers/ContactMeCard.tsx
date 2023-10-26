import { component$ } from "@builder.io/qwik";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";

const ContactMeCard = component$(() => {
  return (
    <Card>
      <div class="flex flex-col h-full justify-center items-center gap-4">
        <div class="flex-1 flex w-full flex-col items-center justify-center">
          <div class="chat">
            <div class="mine messages">
              <div class="message last">Hey! how can i help u?</div>
            </div>
            <div class="yours messages">
              <div class="message last">Hey! ...</div>
              {/* <div class="message">You there?</div>
              // <div class="message last">Hello, how's it going?</div> */}
            </div>
            {/* <div class="mine messages">
              <div class="message">Great thanks!</div>
              <div class="message last">How about you?</div>
            </div> */}
          </div>
        </div>
        <CallToAction title="Let's Talk!" subTitle="contact" />
      </div>
    </Card>
  );
});

export default ContactMeCard;
