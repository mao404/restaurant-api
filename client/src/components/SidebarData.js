import React from "react";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Panel",
    path: "/panel",
    icon: <MdIcons.MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Ordenar",
    path: "/orders",
    icon: <MdIcons.MdShoppingBag />,
    cName: "nav-text",
  },
  {
    title: "Menu",
    path: "/menu",
    icon: <MdIcons.MdRestaurantMenu />,
    cName: "nav-text",
  },
  {
    title: "Inventario",
    path: "/inventory",
    icon: <MdIcons.MdOutlineInventory />,
    cName: "nav-text",
  },
];
