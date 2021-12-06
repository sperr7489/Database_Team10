import React from "react";
import PersonElement from "../../Components/element/PersonElement.js";
const Home = () => {
  return (
    <div className="container" style={{ display: "flex" }}>
      <h1 style={{ paddingTop: "30%" }}>Home</h1>
      <PersonElement name="cat"></PersonElement>
    </div>
  );
};
export default Home;
