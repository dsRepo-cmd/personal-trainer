export interface NawSchema {
  name: string;
  path: string;
  id: number;
}

export const nav: NawSchema[] = [
  {
    name: "Welcome",
    path: "#welcome",
    id: 1,
  },
  {
    name: "Portfolio",
    path: "#portfolio",
    id: 2,
  },
  {
    name: "Classes",
    path: "#classes",
    id: 3,
  },
  {
    name: "Pricing",
    path: "#pricing",
    id: 4,
  },
  {
    name: "Blog",
    path: "#blog",
    id: 5,
  },
  {
    name: "Contact",
    path: "#contact",
    id: 6,
  },
];
