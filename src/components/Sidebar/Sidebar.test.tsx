import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import "@testing-library/jest-dom";

describe("Sidebar Component", () => {
  const mockSetMenuToggle = jest.fn();
  const sliderDataMock = [
    {
      label: "Menu 1",
      icon: <span>Icon 1</span>,
      command: jest.fn(),
      children: [
        {
          label: "Submenu 1.1",
          icon: <span>Icon 1.1</span>,
          active: false,
          command: jest.fn(),
        },
        {
          label: "Submenu 1.2",
          active: true,
          command: jest.fn(),
        },
      ],
    },
    {
      label: "Menu 2",
      icon: <span>Icon 2</span>,
      command: jest.fn(),
      children: [],
    },
  ];

  const defaultProps: SidebarProps = {
    toggleClass: false,
    menuToggle: false,
    setMenuToggle: mockSetMenuToggle,
    sliderData: sliderDataMock,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Sidebar component without crashing", () => {
    render(
      <Sidebar
        toggleClass={false}
        menuToggle={false}
        setMenuToggle={mockSetMenuToggle}
        sliderData={sliderDataMock}
      />
    );
  });
});
