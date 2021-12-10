import "./Sidebar.css";
import React from "react";
import { fontSize } from "@mui/system";

export const Sidebar = ({ height ,children }) => {

  return (
      <div className="side-bar" style={{minHeight: height}}>
        <React.Fragment>{children}</React.Fragment>
      </div>
  );
};

export default Sidebar;