import { HeadingI } from "../lib/types";

export interface Post {
  id: number;
  title: string;
  date: string;
  text: string;
  img: string;
}

export interface Blog {
  heading: HeadingI;
  posts: Post[];
}

export const blog: Blog = {
  heading: {
    title: "MY BLOG",
    paragraphs: [
      {
        id: 1,
        text: "In my personal time I like to write and help people as much as I can, so that’s why from time to time I will write articles related to dieting, nutrition, exercises and so on. Hope you’ll like and appreciate them.",
      },
    ],
  },
  posts: [
    {
      id: 1,
      title: "My daily training routine",
      date: "May 13th, 2014",
      text: "Ea per fastidii vivendum. Duo ei case bonorum, ei nam quodsi labores, in justo molestiae adipiscing per. Mei ne honestatis definitionem. Qui accusamus no, ea sea alii tractatos, et pro consul vulputate.",
      img: "https://picsum.photos/650/400?image=366",
    },
    {
      id: 2,
      title: "Several tea plants that help you lose weight",
      date: "May 2nd, 2014",
      text: "Pri accusata instructior ne. Per officiis tacimates tincidunt et, est harum nobis iudico ad. Aeterno feugait hendrerit eam in, ius ad natum simul interpretaris. Nam suas definitiones id.",
      img: "https://picsum.photos/650/400?image=598",
    },
    {
      id: 3,
      title: "My natural lemon juice",
      date: "May 12th, 2014",
      text: "Per probo paulo qualisque an, tempor scripta nonumes pro ut, eam euismod antiopam contentiones at. Mei ne honestatis definitionem. Qui accusamus no, ea sea alii tractatos, et pro consul vulputate.",
      img: "https://picsum.photos/650/400?image=429",
    },
    {
      id: 4,
      title: "Several tea plants that help you lose weight",
      date: "May 2nd, 2014",
      text: "Populo postulant theophrastus usu cu, praesent definitiones mea an. No purto molestie qui, mea te alii feugait philosophia. Nec sonet viris decore ex. Mei ne assum dictas, dolor fierent ad mel.",
      img: "https://picsum.photos/650/400?image=425",
    },
  ],
};
