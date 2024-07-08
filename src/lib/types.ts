export type Variant = "dark" | "white" | "primary" | "secondary";

interface Paragraph {
  id: number;
  text: string;
}

export interface IHeading {
  title: string;
  paragraphs?: Paragraph[];
}


