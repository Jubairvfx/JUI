import { useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faGear,
  faUserTie,
  faFlag,
  faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar, { SidebarProps } from "./Sidebar";
import Button from "../Button";

// Sample data for testing
const sliderData = [
  {
    label: "Dashboard",
    icon: <FontAwesomeIcon icon={faGauge} />,
    command: () => alert("Dashboard"),
    children: [
      {
        label: "Report",
        icon: <FontAwesomeIcon icon={faFlag} />,
        active: true,
        command: () => alert("Report"),
      },
      {
        label: "Services",
        icon: <FontAwesomeIcon icon={faBellConcierge} />,
      },
    ],
  },
  {
    label: "Settings",
    icon: <FontAwesomeIcon icon={faGear} />,
    children: [
      {
        label: "Profile",
        icon: <FontAwesomeIcon icon={faUserTie} />,
      },
    ],
  },
];

// Storybook metadata
export default {
  title: "JUI/Sidebar",
  component: Sidebar,
  argTypes: {
    toggleClass: { control: "boolean" },
    sliderData: { control: "object" },
  },
} as Meta;

// Template for the component stories
const Template = (args: SidebarProps) => {
  const [toggleClass, setToggleClass] = useState(args.toggleClass);

  // Sync the state with the args control in Storybook
  useEffect(() => {
    setToggleClass(args.toggleClass);
  }, [args.toggleClass]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar {...args} toggleClass={toggleClass} />
      <Button
        label="Toggle Sidebar"
        onClick={() => setToggleClass((prev) => !prev)}
        style={{ marginLeft: "350px" }}
      />
    </div>
  );
};

// Define the story using StoryObj
export const DefaultSidebar: StoryObj<typeof Sidebar> = {
  render: Template,
  args: {
    toggleClass: true,
    sliderData: sliderData,
  },
};
