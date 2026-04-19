import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

type LordIconTrigger =
  | "in"
  | "hover"
  | "loop"
  | "loop-on-hover"
  | "click"
  | "morph"
  | "Boomerang";

type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  colors?: string;
  delay?: string | number;
  target?: string;
  stroke?: string;
};

type LordIconElement = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  LordIconProps;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": LordIconElement;
    }
  }
}

export type CountryCodeOption = {
  country: string;
  iso: string;
  code: string;
};
