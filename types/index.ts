import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ImageType = {
  src: string;
  alt: string;
};

export type CompanyType = {
  name: string;
  src: string;
};

export type HobbyCardType = {
  title: string;
  cardBody: JSX.Element;
  modalBody: JSX.Element;
};
