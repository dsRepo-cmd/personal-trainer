import { HeadingI } from "../lib/types";
type PortfolioItemType =
  | "all"
  | "fatLoss"
  | "training"
  | "videos"
  | "nutrition";

interface PortfolioType {
  name: string;
  type: PortfolioItemType;
  id: number;
}

interface PortfolioItem {
  id: number;
  types: Array<PortfolioType["type"]>;
  name: string;
  link: string;
  title: string;
}

export interface Portfolio {
  heading: HeadingI;
  portfolioItems: PortfolioItem[];
  portfolioFilters: PortfolioType[];
}

export const portfolio: Portfolio = {
  heading: {
    title: "My portfolio",
  },
  portfolioFilters: [
    {
      id: 1,
      name: "All",
      type: "all",
    },
    {
      id: 2,
      name: "Fat Loss",
      type: "fatLoss",
    },
    {
      id: 3,
      name: "Training",
      type: "training",
    },
    {
      id: 4,
      name: "Videos",
      type: "videos",
    },
    {
      id: 5,
      name: "Nutrition",
      type: "nutrition",
    },
  ],
  portfolioItems: [
    {
      id: 1,
      types: ["fatLoss"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "https://picsum.photos/650/400?image=1058",
    },
    {
      id: 2,
      types: ["training"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "https://picsum.photos/650/400?image=389",
    },
    {
      id: 3,
      types: ["videos", "training"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "https://picsum.photos/650/400?image=390",
    },
    {
      id: 4,
      types: ["fatLoss"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "https://picsum.photos/650/400?image=770",
    },
    {
      id: 5,
      types: ["training", "nutrition"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "https://picsum.photos/650/400?image=817",
    },
    {
      id: 6,
      types: ["videos"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "https://picsum.photos/650/400?image=1023",
    },
  ],
};
