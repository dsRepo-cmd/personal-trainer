export type Variant = "dark" | "white" | "primary" | "secondary";

interface Paragraph {
  id: number;
  text: string;
}

export interface IHeading {
  title: string;
  paragraphs?: Paragraph[];
}

export enum Theme {
  RED_GREEN = "red_green_theme",
  PURPLE_YELLOW = "purple-yellow_theme",
  BLUE_ORANGE = "orange_blue_theme",
  LIGHT_GREEN_PINK = "light-green-pink_theme",
  TURQUOISE_ORANGE = "turquoise-orange_theme",
  DARK_BLUE_DARK_RED = "dark-blue-dark-red_theme",
}
