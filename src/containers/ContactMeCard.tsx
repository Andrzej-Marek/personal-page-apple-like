import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import CallToAction from "~/components/CallToAction";
import Card from "~/components/Card";

const ContactMeCard = component$(() => {
  return (
    <Card>
      <Link href="/contact" class="h-full">
        <div class="flex flex-col h-full justify-center items-center gap-4">
          <div class="flex-1 flex w-full flex-col items-center justify-center">
            <div class="chat">
              <div class="yours messages">
                <div class="message last">Hey!</div>
                {/* <div class="message">You there?</div>
              // <div class="message last">Hello, how's it going?</div> */}
              </div>

              <div class="mine messages">
                <div class="message last">Hey! how can I help u?</div>
              </div>

              {/* <div class="mine messages">
              <div class="message">Great thanks!</div>
              <div class="message last">How about you?</div>
            </div> */}
            </div>
          </div>
          <CallToAction title="Let's Talk!" subTitle="contact" />
        </div>
      </Link>
    </Card>
  );
});

export default ContactMeCard;
