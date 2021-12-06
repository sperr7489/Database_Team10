import React from "react";
import "../../Components/Navbar/Sidebar.css"
import Sidebar from "../../Components/Navbar/Sidebar"
import { NavLink } from "react-router-dom";
import "../../Components/Navbar/page.css"

const Movies = () => {
  return (
    <div className="Container">
      
      <Sidebar height={"100vh"}>
        <li className="nav-item1"> 
          <NavLink className="navitem" to ="/Movie">개봉예정</NavLink>
        </li>
        <li className="nav-item1"> 
          <NavLink className="navitem" to ="/">인기</NavLink>
        </li>
        <li className="nav-item1"> 
          <NavLink className="navitem" to ="/">높은 평점</NavLink>
        </li>
        
        </Sidebar>
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        영화관련
      </h1>
    </div>
  );
};
export default Movies;
