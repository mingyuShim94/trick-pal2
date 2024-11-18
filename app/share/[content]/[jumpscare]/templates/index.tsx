import { InstaCapture } from "./insta-capture";
import { LoveStyle } from "./love-style";
import { CelebMatch } from "./celeb-match";

export const templates = {
  "insta-capture": InstaCapture,
  "love-style": LoveStyle,
  "celeb-match": CelebMatch,
} as const;

export type TemplateProps = {
  onComplete: () => void;
};

export type TemplateKey = keyof typeof templates;
