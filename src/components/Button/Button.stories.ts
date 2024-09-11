import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { label: "Click me!" },
};
export const WithOnClick: Story = {
  args: { label: "Click me!", onClick: () => alert("Clicked!") },
};

export const Disabled: Story = {
  args: { label: "Click me!", disabled: true },
};
