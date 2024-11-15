import { InstaCapture } from "./insta-capture";
import { LoveStyle } from "./love-style";
import { CelebMatch } from "./celeb-match";
import { FriendSearch } from "./friend-search";
import { FirstImpression } from "./first-impression";
import { MbtiCrush } from "./mbti-crush";

export const templates = {
  "insta-capture": InstaCapture,
  "love-style": LoveStyle,
  "celeb-match": CelebMatch,
  "friend-search": FriendSearch,
  "first-impression": FirstImpression,
  "mbti-crush": MbtiCrush,
} as const;

export type TemplateProps = {
  onComplete: () => void;
};

export type TemplateKey = keyof typeof templates;
