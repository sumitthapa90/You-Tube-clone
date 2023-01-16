import React from "react";
import "./sidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebar-row ${selected && "selected"}`}>
      <Icon className="sidebar-icon" />
      <h2 className="sidebar-title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
