import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, SignUp, SignIn } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/signup" element={<SignUp />}></Route>
      <Route path="user/signin" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
