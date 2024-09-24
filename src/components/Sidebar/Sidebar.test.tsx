import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";

describe("Sidebar Component", () => {
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

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Sidebar component without crashing", () => {
    render(<Sidebar toggleClass={false} sliderData={sliderDataMock} />);
  });

  it("renders menu labels correctly", () => {
    render(<Sidebar toggleClass={false} sliderData={sliderDataMock} />);
    expect(screen.getByText("Menu 1")).toBeInTheDocument();
    expect(screen.getByText("Menu 2")).toBeInTheDocument();
    expect(screen.getByText("Submenu 1.2")).toBeInTheDocument();
  });

  it("executes the command function when a menu item is clicked", () => {
    render(<Sidebar toggleClass={false} sliderData={sliderDataMock} />);
    const menuItem = screen.getByText("Menu 1");
    fireEvent.click(menuItem);
    expect(sliderDataMock[0]?.command).toHaveBeenCalled();
  });

  it("executes the command function of the active submenu when clicked", () => {
    render(<Sidebar toggleClass={false} sliderData={sliderDataMock} />);
    const submenuItem = screen.getByText("Submenu 1.2");
    fireEvent.click(submenuItem);
    expect(sliderDataMock[0]?.children[1]?.command).toHaveBeenCalled();
  });

  it("indicates which submenu is active", () => {
    render(<Sidebar toggleClass={false} sliderData={sliderDataMock} />);
    const activeSubmenu = screen.getByTestId("submenu-link-1");
    expect(activeSubmenu).toHaveClass("active"); // Assuming 'active' class is applied
  });

  test("opens submenu when clicking on a parent menu", () => {
    render(<Sidebar toggleClass={false} sliderData={sliderDataMock} />);
    fireEvent.click(screen.getByText("Menu 1"));
    expect(screen.getByText("Submenu 1.1")).toBeInTheDocument();
    expect(screen.getByText("Submenu 1.2")).toBeInTheDocument();
  });
});
