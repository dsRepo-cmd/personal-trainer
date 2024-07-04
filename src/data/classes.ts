import { HeadingI } from "../lib/types";

export interface Skin {
  img: string;
  className: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface Classes {
  heading: HeadingI;
  skins: {
    skin1: Skin;
    skin2: Skin;
    skin3: Skin;
    skin4: Skin;
    skin5: Skin;
    skin6: Skin;
    skin7: Skin;
  };
}

export const classes: Classes = {
  heading: {
    title: "Course classes",
    paragraphs: [
      {
        id: 1,
        text: "I can give advice & offer you a personalised nutrition plan.",
      },
      {
        id: 2,
        text: "My nutrition plans will not leave you famished and it will achieve results in no time!",
      },
    ],
  },
  skins: {
    skin1: {
      className: "skin1",
      img: "/fitness-nutrition.webp",
      title: "Fitness nutrition",
      subtitle: "We’ll gladly take care of your diet",
      paragraphs: [
        "No soleat aperiri eruditi eos, apeirian percipitur at per. Nec an amet omnium alienum. Nostro causae euripidis cu eos, viris viderer ad vix.",
        "Has sumo legere volutpat cu, his ad aperiri equidem conclusionemque.",
        "No soleat aperiri eruditi eos, apeirian percipitur at per. Nec an amet omnium alienum. Nostro causae euripidis cu eos, viris viderer ad vix.",
        "Has sumo legere volutpat cu, his ad aperiri equidem conclusionemque.",
      ],
    },

    skin2: {
      className: "skin2",
      img: "/food-discipline.webp",
      title: "Food discipline",
      subtitle: "Learn how to eat & be disciplined",
      paragraphs: [
        "No soleat aperiri eruditi eos, apeirian percipitur at per. Nec an amet omnium alienum. Nostro causae euripidis cu eos, viris viderer ad vix.",
        "Has sumo legere volutpat cu, his ad aperiri equidem conclusionemque.",
      ],
    },

    skin3: {
      className: "skin3",
      img: "/personal-training.webp",
      title: "Personal Training",
      subtitle: "Need a push? We’re at your side!",
      paragraphs: [
        "No soleat aperiri eruditi eos, apeirian percipitur at per. Nec an amet omnium alienum. Nostro causae euripidis cu eos, viris viderer ad vix.",
        "Has sumo legere volutpat cu, his ad aperiri equidem conclusionemque.",
      ],
    },
    skin4: {
      className: "skin4",
      img: "/motivation.webp",
      title: "Motivation & Support",
      subtitle: "We’re here to help you!",
      paragraphs: [
        "No soleat aperiri eruditi eos, apeirian percipitur at per. Nec an amet omnium alienum. Nostro causae euripidis cu eos, viris viderer ad vix.",
        "Has sumo legere volutpat cu, his ad aperiri equidem conclusionemque.",
      ],
    },
    skin5: {
      className: "skin5",
      img: "/schedule.webp",
      title: "Training schedule",
      subtitle: "Your time, your terms!",
      paragraphs: [
        "No soleat aperiri eruditi eos, apeirian percipitur at per. Nec an amet omnium alienum. Nostro causae euripidis cu eos, viris viderer ad vix.",
        "Has sumo legere volutpat cu, his ad aperiri equidem conclusionemque.",
      ],
    },
    skin6: {
      className: "skin6",
      img: "/first-time.webp",
      title: "First time?",
      subtitle: "You’ll get a free session!",
      paragraphs: [
        "No soleat aperiri eruditi eos, apeirian percipitur at per. Nec an amet omnium alienum. Nostro causae euripidis cu eos, viris viderer ad vix.",
        "Has sumo legere volutpat cu, his ad aperiri equidem conclusionemque.",
      ],
    },
    skin7: {
      className: "skin7",
      img: "/maximum.webp",
      title: "Maximise results",
      subtitle: "Get best results combining sports",
      paragraphs: [
        "No soleat aperiri eruditi eos, apeirian percipitur at per. Nec an amet omnium alienum. Nostro causae euripidis cu eos, viris viderer ad vix.",
        "Has sumo legere volutpat cu, his ad aperiri equidem conclusionemque.",
      ],
    },
  },
};
