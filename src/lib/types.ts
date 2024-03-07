export type Variant = "dark" | "white" | "primary" | "secondary";

interface Paragraph {
  id: number;
  text: string;
}

export interface HeadingI {
  title: string;
  paragraphs?: Paragraph[];
}
