import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import { FaBed } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoScaleSharp } from "react-icons/io5";
import { CgGym } from "react-icons/cg";

function Intro() {
  return (
    <Section doubleLine backgroundColor="white">
      <div className="flex flex-col w-[1200px] gap-6 items-center justify-center ">
        <Text
          title={"If it’s not personal, It’s not possible!"}
          className=" uppercase font-bold"
        />
        <Text
          text={
            "Welcome dear visitor! Short story, my name is Jessica Smith and I’m a Personal Trainer (PT) licensed by the National School of Coaches, ISSA certified specialist in sports, nutrition and fitness school teacher . You can have a look at my portfolio."
          }
        />

        <div className="flex items-center justify-center gap-4 xl:grid grid-cols-2 sm:grid-cols-1 mt-10 ">
          <div className=" flex flex-col justify-center items-center gap-4 w-[300px]">
            <TbToolsKitchen2 size={50} />
            <Text text="EAT BETTER" className="text-[#62dc42]" />
            <Text text="Homero nominati democritum sit adongue consectetuer no sed. Unum habemus ex alterum impedit." />
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center w-[300px]">
            <FaBed size={50} />
            <Text text="SLEEP TIGHT" className="text-[#62dc42]" />
            <Text text="No stet imperdiet expetendis vix, postulant constituam dissentiunt vis ad ex mel exerci delicata.." />
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center w-[300px]">
            <CgGym size={50} />
            <Text text="EXERCISE" className="text-[#62dc42]" />
            <Text text="Eu erat nonumy petentium ha fierent eleifend expetenda sea antiopam voluptatum apeirian scribentur." />
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center w-[300px]">
            <IoScaleSharp size={50} />
            <Text text="LOSE WEIGHT" className="text-[#62dc42]" />
            <Text text="Est ad soleat omnesque vulputate. Vivendo nostrum urbanitas vis et, verear aperiam in sea, euismod corrumpit." />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Intro;
