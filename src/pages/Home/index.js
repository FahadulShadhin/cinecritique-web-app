import React from "react";
import { Navbar } from "../../components";

const Home = () => {
  const isAuthenticate = () => {
    const token = sessionStorage.getItem("token");
    if (token) return true;
    return false;
  };

  return (
    <div className="bg-rainblue-100">
      <Navbar isAuthenticate={isAuthenticate()} />
      <section>
        <h1 className="p-20 text-center text-5xl text-white">Hero</h1>
      </section>
    </div>
  );
};

export default Home;
