// import React from "react";
// import { SliderArray } from "./types";
// import "./Sidebar.css";

// export interface SidebarProps {
//   toggleClass: boolean;
//   menuToggle: boolean;
//   setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
//   sliderData: SliderArray;
// }

// const Sidebar: React.FC<SidebarProps> = ({
//   toggleClass,
//   menuToggle,
//   setMenuToggle,
//   sliderData,
// }) => {
//   return (
//     <nav className={`jui-sidebar-wrpaer ${toggleClass ? "expand" : ""}`}>
//       <ul>
//         {sliderData.map((ele, ind) => (
//           <li key={ele.label}>
//             <a
//               id={`slide-${ind + 1}`}
//               onClick={() => {
//                 setMenuToggle((prev) => !prev);
//                 ele.command && ele.command();
//               }}
//             >
//               {ele.icon && <span className="menu-icon-wraper">{ele.icon}</span>}
//               <div className="menu-content">
//                 <span>{ele.label}</span>
//                 <svg
//                   className={`menu-dropdown-icon ${
//                     menuToggle && "toggle-menu"
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="24"
//                   height="24"
//                   fill="currentColor"
//                 >
//                   <path d="M12 15.6L5.4 9l1.2-1.2L12 13.2l5.4-5.4L18.6 9z" />
//                 </svg>
//               </div>
//               {!toggleClass && <span className="tooltiptext">{ele.label}</span>}
//             </a>
//             <ul className={`${menuToggle ? "toggle-menu" : ""}`}>
//               {ele.children &&
//                 ele.children.map((item, index) => (
//                   <li key={index}>
//                     <a
//                       id={`item-${index + 1}`}
//                       className={`${item.active && "active"}`}
//                       onClick={() => {
//                         item.command && item.command();
//                       }}
//                     >
//                       {item.icon && (
//                         <span className="menu-icon-wraper">{item.icon}</span>
//                       )}
//                       <div className="menu-content">
//                         <span>{item.label}</span>
//                       </div>
//                       {!toggleClass && (
//                         <span className="tooltiptext">{item.label}</span>
//                       )}
//                     </a>
//                   </li>
//                 ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Sidebar;

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
          <li key={ele.label}>
            <a
              id={`slide-${ind + 1}`}
              onClick={() => {
                handleMenuToggle(ele.label);
                ele.command && ele.command();
              }}
            >
              {ele.icon && (
                <span className="menu-icon-wrapper">{ele.icon}</span>
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
                >
                  <path d="M12 15.6L5.4 9l1.2-1.2L12 13.2l5.4-5.4L18.6 9z" />
                </svg>
              </div>
              {!toggleClass && <span className="tooltiptext">{ele.label}</span>}
            </a>
            <ul className={`${openMenus[ele.label] ? "toggle-menu" : ""}`}>
              {ele.children &&
                ele.children.map((item, index) => (
                  <li key={index}>
                    <a
                      id={`item-${index + 1}`}
                      className={`${item.active ? "active" : ""}`}
                      onClick={() => {
                        item.command && item.command();
                      }}
                    >
                      {item.icon && (
                        <span className="menu-icon-wrapper">{item.icon}</span>
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
