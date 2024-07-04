import { IHeading } from "../lib/types";

export interface TestimonialsList {
  id: number;
  text: string;
  textBy: string;
}

export interface Testimonials {
  heading: IHeading;
  list: TestimonialsList[];
}

export const testimonials: Testimonials = {
  heading: {
    title: "Testimonials",
    paragraphs: [],
  },
  list: [
    {
      id: 1,
      text: "I started doing personal training with Jessica about two years ago. The results were impressive. Within two or three months I had considerably gained muscle mass, reduced fat levels, my body was looking a lot more toned, and I felt a lot fitter.",
      textBy: "- Josef Nolan",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing enim non mi commodo elit. Vestibulum vel enim non mi commodo lobortis a a nibh. Donec at est ac sem iaculis tincidunt. Cras non erat vitae felis sagittis lobortis.",
      textBy: "- Michael Jordan",
    },
    {
      id: 3,
      text: "Nam fringilla elit metus, in dictum odio accumsan vel porta augue mattis vestibulum ut. Donec posuere quis diam et varius. Etiam ultricies feugiat elit, sit amet dignissim sapien rutrum quis",
      textBy: "- John Doe",
    },
    {
      id: 4,
      text: "Pellentesque eget gravida nunc. Interdum et malesuada fames ac ante ipsum primis s. Etiam ac aliquet turpis in faucibus. Etiam ac aliquet turpis. Duis cursus, sem ut tincidunt imperdiet.",
      textBy: "- Second John Doe",
    },
  ],
};
