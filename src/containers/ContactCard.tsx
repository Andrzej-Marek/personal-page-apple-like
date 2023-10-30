import classNames from "classnames";
import Card from "~/components/Card";
import LocalizationIcon from "~/components/icons/LocalizationIcon";
import MailIcon from "~/components/icons/MailIcon";
import PhoneIcon from "~/components/icons/PhoneIcon";

export type ContactCardVariant = "normal" | "compact";
const ContactCard = ({
  variant = "normal",
}: {
  variant?: ContactCardVariant;
}) => {
  return (
    <Card headingSize="sm" heading="Contacts">
      <div class="space-y-6">
        <ContactElement
          variant={variant}
          section="LOCALIZATION"
          text={["Pszczyńska 116", "43-254 Warszowice", "Poland"]}
        >
          <LocalizationIcon />
        </ContactElement>
        <ContactElement
          variant={variant}
          section="MAIL"
          text={["contact@andrzejmarek.com"]}
        >
          <MailIcon />
        </ContactElement>
        <ContactElement
          variant={variant}
          section="PHONE"
          text={["(+48) 794 965 465"]}
        >
          <PhoneIcon />
        </ContactElement>
      </div>
    </Card>
  );
};

const ContactElement = ({
  children,
  section,
  text,
  variant,
}: {
  children: any;
  section: string;
  text: string[];
  variant: ContactCardVariant;
}) => {
  return (
    <div class="flex gap-6 items-center">
      <div class={classNames("p-3", { "lg:p-6": variant === "normal" })}>
        {children}
      </div>
      <div class="font-semibold space-y-1">
        <span class="uppercase text-xs text-gray ">{section}</span>
        <div class="text-sm ">
          {text.map((t) => (
            <div key={t} class="break-all w-[150px] sm:w-full">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
