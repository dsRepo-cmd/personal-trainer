import { MdLocalPhone } from "react-icons/md";
import Section from "../../components/section/Section";
import { fastContact } from "../../data/fastContact";
import Text from "../../components/text/Text";
import { IoIosMail } from "react-icons/io";

import { Variant } from "../../lib/types";
import { FC } from "react";
import { SiGooglemaps } from "react-icons/si";
import "./FastContact.css";

interface FastContactProps {
  className?: string;
  variant?: Variant;
}

const FastContact: FC<FastContactProps> = ({ variant = "dark" }) => {
  return (
    <Section backgroundColor={variant} className=" my-[20px] ">
      <div className="flex  w-full justify-between ">
        <div className=" flex items-center justify-center gap-4">
          <MdLocalPhone className="fc_icon" size={30} />
          <Text text={fastContact.phone} />
        </div>
        <div className=" flex items-center justify-center gap-4">
          <IoIosMail className="fc_icon" size={30} />
          <Text text={fastContact.email} />
        </div>
        <div className=" flex items-center justify-center gap-4">
          <SiGooglemaps className="fc_icon" size={30} />
          <Text text={fastContact.adress} />
        </div>
      </div>
    </Section>
  );
};

export default FastContact;
