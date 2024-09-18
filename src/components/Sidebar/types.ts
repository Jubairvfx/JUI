import { ReactNode } from "react";

interface SliderChild {
  label: string;
  icon?: ReactNode;
  active?: boolean;
  command?: () => void;
}

interface SliderItem {
  label: string;
  icon?: ReactNode;
  command?: () => void;
  children?: SliderChild[];
}

export type SliderArray = SliderItem[];
