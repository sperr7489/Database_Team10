import React, { useState } from "react";
import { useParams } from "react-router";
import PersonElement from "../element/PersonElement";

const PersonProfile = () => {
  var params = useParams();
  const [title, setTitle] = useState("강아지"); //제목
  const [status, setStatus] = useState({
    title: "강아지",
    age: "0",
    genre: "큐티",
    country: "한국",
    runTime: "0",
    publish: "",
    summary: "너무 귀엽지 않아?",
  });
  //   useParams를 통해서 라우트로 들어온 params를 받아올 수 있다.

  console.log(params);
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
      <img
        style={{ height: "100%", width: "400px" }}
        src={require(`../../img/${params.name}.jpeg`).default}
        alt="test"
      ></img>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: 20,
          justifyContent: "space-evenly",
          marginBottom: 50,
        }}
      >
        <div className="title">
          <h2>제목 : {params.name}</h2>
        </div>
        <div
          className="status"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>{status.age}세 연령가 / </div>
          <div>{status.genre} / </div>
          <div>{status.country} / </div>
          <div>{status.runTime} </div>
        </div>
        <div className="publishDay">
          <div>개봉일 : {status.publish}</div>
        </div>
        <div className="summary">
          <div>줄거리 : {status.summary}</div>
        </div>
      </div>
      <div style={{ flex: 1, backgroundColor: "beige", overflowX: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <PersonElement name="cat" />
          <PersonElement name="dog" />
          <PersonElement name="cat" />
          <PersonElement name="dog" />
        </div>
      </div>
    </div>
  );
};
export default PersonProfile;
