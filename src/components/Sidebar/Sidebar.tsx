import React, { useState } from "react";
import { SliderArray } from "./types";
import "./Sidebar.css";

export interface SidebarProps {
  toggleClass: boolean;
  sliderData: SliderArray;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleClass, sliderData }) => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const handleMenuToggle = (label: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <nav className={`jui-sidebar-wrapper ${toggleClass ? "expand" : ""}`}>
      <ul>
        {sliderData.map((ele, ind) => (
          <li key={ele.label} data-testid={`menu-item-${ind}`}>
            <a
              id={`slide-${ind + 1}`}
              data-testid={`menu-link-${ind}`}
              onClick={() => {
                handleMenuToggle(ele.label);
                ele.command && ele.command();
              }}
            >
              {ele.icon && (
                <span
                  className="menu-icon-wrapper"
                  data-testid={`menu-icon-${ind}`}
                >
                  {ele.icon}
                </span>
              )}
              <div className="menu-content">
                <span>{ele.label}</span>
                <svg
                  className={`menu-dropdown-icon ${
                    openMenus[ele.label] ? "toggle-menu" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  data-testid={`dropdown-icon-${ind}`}
                >
                  <path d="M12 15.6L5.4 9l1.2-1.2L12 13.2l5.4-5.4L18.6 9z" />
                </svg>
              </div>
              {!toggleClass && <span className="tooltiptext">{ele.label}</span>}
            </a>
            <ul className={`${openMenus[ele.label] ? "toggle-menu" : ""}`}>
              {ele.children &&
                ele.children.map((item, index) => (
                  <li key={index} data-testid={`submenu-item-${index}`}>
                    <a
                      id={`item-${index + 1}`}
                      data-testid={`submenu-link-${index}`}
                      className={`${item.active ? "active" : ""}`}
                      onClick={() => {
                        item.command && item.command();
                      }}
                    >
                      {item.icon && (
                        <span
                          className="menu-icon-wrapper"
                          data-testid={`submenu-icon-${index}`}
                        >
                          {item.icon}
                        </span>
                      )}
                      <div className="menu-content">
                        <span>{item.label}</span>
                      </div>
                      {!toggleClass && (
                        <span className="tooltiptext">{item.label}</span>
                      )}
                    </a>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
