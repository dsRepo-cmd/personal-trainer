import { MdLocalPhone } from "react-icons/md";
import Section from "../../components/section/Section";
import { fastContact } from "../../data/fastContact";
import Text from "../../components/text/Text";
import { IoIosMail } from "react-icons/io";
import { Variant } from "../../lib/types";
import { FC } from "react";
import { SiGooglemaps } from "react-icons/si";

interface FastContactProps {
  className?: string;
  variant?: Variant;
}

const FastContact: FC<FastContactProps> = ({ variant = "dark" }) => {
  return (
    <Section variant={variant} thin>
      <div className="flex  w-full justify-between md:flex-col md:gap-3 md:items-start ">
        <div className=" flex justify-center items-center gap-4 ">
          <MdLocalPhone className=" fill-secondary" size={30} />
          <Text className=" text-sm" text={fastContact.phone} />
        </div>
        <div className=" flex justify-center items-center gap-4  ">
          <IoIosMail className="fill-secondary" size={30} />
          <Text className=" text-sm" text={fastContact.email} />
        </div>
        <div className=" flex justify-center items-center gap-4 ">
          <SiGooglemaps className="fill-secondary" size={30} />
          <Text className=" text-sm" text={fastContact.adress} />
        </div>
      </div>
    </Section>
  );
};

export default FastContact;
