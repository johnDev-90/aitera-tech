import { ComponentType, SVGProps } from "react";

export type ButtonProps_Type = {
  text: string;
};

export type ParagrhapTypes = {
  title: string;
  textContent: string;
}[];

export type CardsContentTypes = {
  logo: ComponentType<SVGProps<SVGAElement>>;
  CardTitle: string;
  slogan: string;
  list: string[];
};
