import React, { useCallback, useState, useEffect } from "react";
import dog from "../../img/dog.jpeg";
import { Link } from "react-router-dom";
import PersonProfile from "../PersonProfile/PersonProfile";
const PersonElement = (props) => {
  const [elemName, setElemName] = useState("dog");
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  // const test = () => {
  //   if (props.name) {
  //     setElemName(() => props.name);
  //   }
  // };

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
      <Link to={`/PersonProfile/${props.name}`}>
        <img
          src={require(`../../img/${props.name}.jpeg`).default}
          alt="default"
          style={{ width: "150px", height: "200px" }}
        ></img>
      </Link>
      <div style={{ fontSize: "20px" }}>{props.name}</div>
    </div>
  );
};

export default PersonElement;
