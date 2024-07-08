import { IHeading } from "../lib/types";
import BedIcon from "../assets/bed.svg";
import ToolsKitchenIcon from "../assets/kitchen-tools.svg";
import ScaleIcon from "../assets/scale.svg";
import CgGym from "../assets/exercise.svg";

interface IntroBlock {
  id: number;
  text: string;
  title: string;
  icon: React.ReactNode;
}

interface Intro {
  heading: IHeading;
  blocks: IntroBlock[];
}

export const intro: Intro = {
  heading: {
    title: "If it’s not personal, It’s not possible!",
    paragraphs: [
      {
        id: 1,
        text: "Welcome dear visitor! Short story, my name is Jessica Smith and I’m a Personal Trainer (PT) licensed by the National School of Coaches, ISSA certified specialist in sports, nutrition and fitness school teacher . You can have a look at my portfolio.",
      },
    ],
  },
  blocks: [
    {
      id: 1,
      text: "Homero nominati democritum sit adongue consectetuer no sed. Unum habemus ex alterum impedit.",
      title: "EAT BETTER",
      icon: <ToolsKitchenIcon width={50} height={50} />,
    },
    {
      id: 2,
      text: "No stet imperdiet expetendis vix, postulant constituam dissentiunt vis ad ex mel exerci delicata..",
      title: "SLEEP TIGHT",
      icon: <BedIcon width={50} height={50} />,
    },
    {
      id: 3,
      text: "Eu erat nonumy petentium ha fierent eleifend expetenda sea antiopam voluptatum apeirian scribentur.",
      title: "EXERCISE",
      icon: <CgGym width={50} height={50} />,
    },
    {
      id: 4,
      text: "Est ad soleat omnesque vulputate. Vivendo nostrum urbanitas vis et, verear aperiam in sea, euismod corrumpit.",
      title: "LOSE WEIGHT",
      icon: <ScaleIcon width={50} height={50} className=" text-dark" />,
    },
  ],
};
