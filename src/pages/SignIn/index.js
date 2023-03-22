import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo_invert from "../../logo_invert.png";
import styles from "../SignUp/styles";
import { publicPost } from "../../utilities/apiCaller";
import { Footer } from "../../components";

const SignIn = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const navigteTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await publicPost(
        "/user/signin",
        JSON.stringify({
          name: name,
          password: pass,
        })
      );
      if (response.token) {
        setMessage(response.message);
        sessionStorage.setItem("token", JSON.stringify(response.token));
        navigteTo("/");
      } else {
        setMessage("Please try again.");
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
      <div className={styles.main_container}>
        <NavLink to="/" className={styles.logo_a}>
          <img src={logo_invert} className={styles.logo} />
        </NavLink>

        <div className={styles.form_container}>
          <h1 className={styles.h1}>Sign in</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label
              htmlFor="password"
              className={styles.label + " flex items-center justify-between"}
            >
              <span>Password</span>{" "}
              <NavLink to="/" className="text-sm text-red-500 hover:underline">
                Forgot password?
              </NavLink>
            </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="**********"
              required
              value={pass}
              onChange={(event) => setPass(event.target.value)}
            />

            <p className={styles.alert}>{message}</p>

            <button type="submit" className={styles.btn}>
              Sign in
            </button>

            <p className={styles.p}>
              New to CineCritique?{" "}
              <NavLink to="/user/signup" className={styles.a}>
                Create an account
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
