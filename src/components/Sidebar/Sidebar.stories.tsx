import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faGear,
  faUserTie,
  faFlag,
  faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";
import { SliderArray } from "./types";
import Sidebar, { SidebarProps } from "./Sidebar";

export default {
  title: "UI/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: { layout: "left" },
  argTypes: {
    toggleCLass: { control: "boolean" },
    menuToggle: { control: "boolean" },
    setMenuToggle: { action: "setMenuToggle" },
    sliderData: { control: "object" },
  },
} as Meta<typeof Sidebar>;

const Template = (args: SidebarProps) => {
  const [menuToggle, setMenuToggle] = useState(args.menuToggle);

  return (
    <Sidebar
      toggleCLass={args.toggleCLass}
      menuToggle={menuToggle}
      setMenuToggle={setMenuToggle}
      sliderData={args.sliderData}
    />
  );
};

// Mock slider data for the story
const sliderData: SliderArray = [
  {
    label: "Dashboard",
    icon: <FontAwesomeIcon icon={faGauge} />,
    children: [
      {
        label: "Report",
        icon: <FontAwesomeIcon icon={faFlag} />,
        active: true,
      },
      {
        label: "Services",
        icon: <FontAwesomeIcon icon={faBellConcierge} />,
      },
    ],
  },
  // {
  //   label: "Settings",
  //   icon: <FontAwesomeIcon icon={faGear} />,
  //   children: [
  //     {
  //       label: "Profile",
  //       icon: <FontAwesomeIcon icon={faUserTie} />,
  //     },
  //   ],
  // },
];

// Define the story using StoryObj
export const DefaultSidebar: StoryObj<typeof Sidebar> = {
  render: Template,
  args: {
    toggleCLass: false,
    menuToggle: false,
    sliderData: sliderData,
  },
};
