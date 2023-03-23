import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, SignUp, SignIn, Movies } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/signup" element={<SignUp />}></Route>
      <Route path="user/signin" element={<SignIn />}></Route>
      <Route path="movies" element={<Movies />}></Route>
    </Routes>
  );
}

export default App;
