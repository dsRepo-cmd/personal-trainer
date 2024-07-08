import { IHeading } from "../lib/types";
import FacebookIcon from "../assets/facebook.svg";
import GoogleIcon from "../assets/google.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import SkypeIcon from "../assets/skype.svg";

export interface Links {
  id: number;
  title: string;
  icon: React.ReactNode;
}

export interface Footer {
  heading: IHeading;
  links: Links[];
  copyright: string;
}

export const footer: Footer = {
  heading: {
    title: "Get in touch!",
    paragraphs: [],
  },
  links: [
    {
      id: 1,
      title: "Share on Facebook",
      icon: (
        <FacebookIcon
          width={20}
          height={20}
          className=" fill-primary group-hover:fill-secondary"
        />
      ),
    },
    {
      id: 2,
      title: "Share on Twitter",
      icon: (
        <TwitterIcon
          width={20}
          height={20}
          className=" fill-primary group-hover:fill-secondary"
        />
      ),
    },
    {
      id: 3,
      title: "Share on Skype",
      icon: (
        <SkypeIcon
          width={20}
          height={20}
          className=" fill-primary group-hover:fill-secondary"
        />
      ),
    },
    {
      id: 4,
      title: "Share on Linkedin",
      icon: (
        <LinkedinIcon
          width={20}
          height={20}
          className=" fill-primary group-hover:fill-secondary"
        />
      ),
    },
    {
      id: 5,
      title: "Share on Google Plus",
      icon: (
        <GoogleIcon
          width={20}
          height={20}
          className=" fill-primary  group-hover:fill-secondary"
        />
      ),
    },
  ],
  copyright: `© 2024 Fitness Trainers.`,
};
