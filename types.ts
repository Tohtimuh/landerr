
export interface LandingPageContent {
  headline: string;
  subheadline: string;
  benefits: string[];
  socialProof: string;
  ctaText: string;
  ctaLink: string;
}

export interface DesignConfig {
  bgColor: string;
  btnColor: string;
  accentColor: string;
  textColor: string;
}

export enum AppView {
  EDITOR = 'EDITOR',
  PREVIEW = 'PREVIEW'
}

export type TailwindColor = {
  name: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
};
