import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import { fastContact } from "../../data/fastContact";
import type { Variant } from "../../lib/types";
import MapPointIcon from "../../assets/map-point.svg";
import PhoneIcon from "../../assets/phone.svg";
import MailIcon from "../../assets/mail.svg";

interface FastContactProps {
  className?: string;
  variant?: Variant;
}

const FastContact = ({ variant = "dark" }: FastContactProps) => {
  return (
    <Section variant={variant} thin>
      <div className="flex  w-full justify-between md:flex-col md:gap-3 md:items-start ">
        <div className=" flex justify-center items-center gap-4 ">
          <PhoneIcon className="fill-secondary" height={30} width={30} />
          <Text className=" text-sm" text={fastContact.phone} />
        </div>
        <div className=" flex justify-center items-center gap-4  ">
          <MailIcon className="fill-secondary" height={30} width={30} />
          <Text className=" text-sm" text={fastContact.email} />
        </div>
        <div className=" flex justify-center items-center gap-4 ">
          <MapPointIcon className="fill-secondary" height={30} width={30} />
          <Text className=" text-sm" text={fastContact.adress} />
        </div>
      </div>
    </Section>
  );
};

export default FastContact;
