import { HeadingI } from "../lib/types";

interface PricingPlan {
  id: number;
  price: string;
  priceInfo: string;
  type: string;
  info: string[];
  buttonText: string;
}

export interface Pricing {
  heading: HeadingI;
  plans: PricingPlan[];
}

export const pricing: Pricing = {
  heading: {
    title: "Pricing plans",
    paragraphs: [
      {
        id: 1,
        text: "Are you tired of so many things on so many different directions? Why can’t they be in the same place?",
      },
      {
        id: 2,
        text: "Well they can, please check out our pricing plans.",
      },
    ],
  },

  plans: [
    {
      id: 1,
      price: "$49.99",
      priceInfo: "per month",
      type: "STANDARD",
      info: [
        "4 Sessions (60 min each)",
        "Full Evaluation",
        "Nutritional Supplements",
      ],
      buttonText: "Choose Plan",
    },
    {
      id: 2,
      price: "$79.99",
      priceInfo: "per month",
      type: "INTENSE",
      info: [
        "8 Sessions (60 min each)",
        "Full Evaluation",
        "Nutritional Supplements",
      ],
      buttonText: "Choose Plan",
    },
    {
      id: 3,
      price: "$119.99",
      priceInfo: "per month",
      type: "ULTRA INTENSE",
      info: [
        "12 Sessions (60 min each)",
        "Full Evaluation",
        "Personalized Nutrition Plan",
      ],
      buttonText: "Choose Plan",
    },
  ],
};
