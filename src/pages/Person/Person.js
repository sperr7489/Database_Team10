import React from "react";
import "../../Components/Navbar/Sidebar.css"
import Sidebar from "../../Components/Navbar/Sidebar"
import { NavLink } from "react-router-dom";
import "../../Components/Navbar/page.css"

const Person = () => {
  return (
    <div className="Container">
      <Sidebar height={"100vh"}>
        <li className="nav-item1"> 
          <NavLink className="navitem" to ="/">배우</NavLink>
        </li>
        <li className="nav-item1"> 
          <NavLink className="navitem" to ="/">감독</NavLink>
        </li>
        
        </Sidebar>
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        인물 소개 화면
      </h1>
      <h2>
        안녕하세요
        </h2>
    </div>
  );
};
export default Person;
