import { IHeading } from "../lib/types";

export interface Contact {
  heading: IHeading;
  formspree: string;
}

export const contact: Contact = {
  heading: {
    title: "CONTACT",
    paragraphs: [
      {
        id: 1,
        text: "If you have any questions or would like to contact me about private training, fill out the form below.",
      },
    ],
  },
  formspree: "mzbneqzd",
};
