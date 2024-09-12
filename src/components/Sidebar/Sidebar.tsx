import React from "react";
import { SliderArray } from "./types";
import "./Sidebar.css";

export interface SidebarProps {
  toggleCLass: boolean;
  menuToggle: boolean;
  setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
  sliderData: SliderArray;
}

const Sidebar: React.FC<SidebarProps> = ({
  toggleCLass,
  menuToggle,
  setMenuToggle,
  sliderData,
}) => {
  return (
    <nav className={`jui-sidebar-wrpaer ${toggleCLass && "expand"}`}>
      <ul>
        {sliderData.map((ele, ind) => (
          <li key={ele.label}>
            {/* {!toggleCLass && (
              <Tooltip target={`#slide-${ind + 1}`}>{ele.label}</Tooltip>
            )} */}
            <a
              id={`slide-${ind + 1}`}
              onClick={() => setMenuToggle((prev) => !prev)}
            >
              <div>
                {ele.icon && ele.icon}
                <span>{ele.label}</span>
              </div>
              <svg
                className={`menu-dropdown-icon ${menuToggle && "toggle-menu"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M12 15.6L5.4 9l1.2-1.2L12 13.2l5.4-5.4L18.6 9z" />
              </svg>
            </a>
            <ul className={`${menuToggle && "toggle-menu"}`}>
              {ele.children &&
                ele.children.map((item, index) => (
                  <li key={index}>
                    {/* {!toggleCLass && (
                    <Tooltip target={`#item-${index + 1}`}>
                      {item.label}
                    </Tooltip>
                  )} */}
                    <a
                      id={`item-${index + 1}`}
                      className={`${item.active && "active"}`}
                    >
                      {item.icon && item.icon}
                      <span>{item.label}</span>
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
