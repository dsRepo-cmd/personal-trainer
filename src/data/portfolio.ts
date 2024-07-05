import { IHeading } from "../lib/types";
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
  heading: IHeading;
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
      link: "/BikeWorkout.webp",
    },
    {
      id: 2,
      types: ["training"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "/Pre-Workout.webp",
    },
    {
      id: 3,
      types: ["videos", "training"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "/puch-up.webp",
    },
    {
      id: 4,
      types: ["fatLoss"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "/Stretching.webp",
    },
    {
      id: 5,
      types: ["training", "nutrition"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "/working-out-stock.webp",
    },
    {
      id: 6,
      types: ["videos"],
      title: "Several tea plants that help you lose weight",
      name: "Training Cardio Abs",
      link: "/workout-run.webp",
    },
  ],
};
