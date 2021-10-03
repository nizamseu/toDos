import React from "react";
import ToDos from "../ToDos/ToDos";

const Home = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-3">All User List</h2>
      <ToDos></ToDos>
    </div>
  );
};

export default Home;
