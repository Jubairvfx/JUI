import { ReactNode } from "react";

interface SliderChild {
  label: string;
  icon?: ReactNode;
  active?: boolean;
}

interface SliderItem {
  label: string;
  icon?: ReactNode;
  children?: SliderChild[];
}

export type SliderArray = SliderItem[];
