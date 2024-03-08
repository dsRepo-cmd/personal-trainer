import { HeadingI } from "../lib/types";

import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

export interface Links {
  id: number;
  title: string;
  icon: React.ReactNode;
}

export interface Footer {
  heading: HeadingI;
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
      icon: <FaFacebookF size={24} className="footer_icon" />,
    },
    {
      id: 2,
      title: "Share on Twitter",
      icon: <FaTwitter size={24} className="footer_icon" />,
    },
    {
      id: 3,
      title: "Share on Skype",
      icon: <FaSkype size={24} className="footer_icon" />,
    },
    {
      id: 4,
      title: "Share on Linkedin",
      icon: <FaLinkedinIn size={24} className="footer_icon" />,
    },
    {
      id: 5,
      title: "Share on Google Plus",
      icon: <FaGooglePlusG size={24} className="footer_icon" />,
    },
  ],
  copyright: `© 2024 Fitness Trainers.`,
};
