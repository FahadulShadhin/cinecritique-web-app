import React from "react";
import { Navbar, Footer } from "../../components";
import { checkAuthenticate } from "../../utilities";

const Home = () => {
  return (
    <>
      <div className="bg-rainblue-100">
        <Navbar isAuthenticate={checkAuthenticate()} />
        <h1 className="p-20 text-center text-5xl text-white">Hero</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
