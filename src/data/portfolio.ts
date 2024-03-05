export interface PortfolioType {
  name: string;
  slug: string;
  id: number;
}

export interface PortfolioItem {
  id: number;
  type: Array<PortfolioType["slug"]>;
  name: string;
  link: string;
  title: string;
}

export const portfolioFilters: PortfolioType[] = [
  {
    id: 1,
    name: "All",
    slug: "all",
  },
  {
    id: 2,
    name: "Fat Loss",
    slug: "fatLoss",
  },
  {
    id: 3,
    name: "Training",
    slug: "training",
  },
  {
    id: 4,
    name: "Videos",
    slug: "videos",
  },
  {
    id: 5,
    name: "Nutrition",
    slug: "nutrition",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    type: ["fatLoss"],
    title: "Several tea plants that help you lose weight",
    name: "Training Cardio Abs",
    link: "https://picsum.photos/650/400?random=1",
  },
  {
    id: 2,
    type: ["training", "nutrition"],
    title: "Several tea plants that help you lose weight",
    name: "Training Cardio Abs",
    link: "https://picsum.photos/650/400?random=1",
  },
  {
    id: 3,
    type: ["videos"],
    title: "Several tea plants that help you lose weight",
    name: "",
    link: "https://picsum.photos/650/400?random=1",
  },
  {
    id: 4,
    type: ["fatLoss"],
    title: "Several tea plants that help you lose weight",
    name: "",
    link: "https://picsum.photos/650/400?random=1",
  },
  {
    id: 5,
    type: ["training", "nutrition"],
    title: "Several tea plants that help you lose weight",
    name: "",
    link: "https://picsum.photos/650/400?random=1",
  },
  {
    id: 6,
    type: ["videos"],
    title: "Several tea plants that help you lose weight",
    name: "",
    link: "https://picsum.photos/650/400?random=1",
  },
];
