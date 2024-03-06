export interface NawSchema {
  name: string;
  path: string;
  id: number;
}

export const nav: NawSchema[] = [
  {
    name: "welcome",
    path: "welcome",
    id: 1,
  },
  {
    name: "portfolio",
    path: "portfolio",
    id: 2,
  },
  {
    name: "classes",
    path: "classes",
    id: 3,
  },
  {
    name: "pricing",
    path: "pricing",
    id: 4,
  },
  {
    name: "blog",
    path: "blog",
    id: 5,
  },
  {
    name: "contact",
    path: "contact",
    id: 6,
  },
];
