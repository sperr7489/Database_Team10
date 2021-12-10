<<<<<<< HEAD
import React from "react";
import PersonElement from "../../Components/element/PersonElement.js";
=======
import React, { Fragment } from "react";
import "../../Components/page.css"
>>>>>>> 15c48130475ba3836c4432066792a869e692eba6

import React, { Fragment } from "react";
import "../../Components/Navbar/page.css";

const Home = () => {
  return (
    <div className="container" style={{ display: "flex" }}>
      <h1 style={{ paddingTop: "30%" }}>Home</h1>
      <PersonElement name="cat"></PersonElement>
    </div>
  );
};
export default Home;
