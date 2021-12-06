import { param } from "jquery";
import React from "react";
import { useParams } from "react-router";
const PersonProfile = () => {
  var params = useParams();
  //   useParams를 통해서 라우트로 들어온 params를 받아올 수 있다.
  console.log(params);
  return <div>{params.name}</div>;
};
export default PersonProfile;
