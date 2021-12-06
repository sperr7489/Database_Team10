import React, { useState } from "react";
import dog from "../../img/dog.jpeg";
import { Link, Route } from "react-router-dom";
import PersonProfile from "../PersonProfile/PersonProfile";
const PersonElement = () => {
  const [elemName, setElemName] = useState("기창이");

  return (
    <div
      className="element_container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Link를 통해서 해당 라우트에 연결해주고 Route 태그는 그 route가 되었을 때 다음과 같은 component를 
      열어주기 위한 태그이다.  */}
      <Link to={`/PersonProfile/${elemName}`}>
        <img
          src={dog}
          alt="default"
          style={{ width: "150px", height: "200px" }}
        ></img>
      </Link>
      <div style={{ fontSize: "20px" }}>{elemName}</div>
      <Route path="/PersonProfile/:name" component={PersonProfile}>
        <PersonProfile />
      </Route>
    </div>
  );
};

export default PersonElement;
