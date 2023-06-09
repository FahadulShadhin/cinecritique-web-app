import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo_invert from "../../logo_invert.png";
import styles from "./styles";
import { publicPost } from "../../utilities/apiCaller";
import { Footer, Loader } from "../../components";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const navigteTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (pass !== confPass) {
      setOpen(false);
      setMessage("Password didn't match");
      return;
    }
    if (pass.length < 8) {
      setOpen(false);
      setMessage("Password should contain at least 8 characters");
      return;
    }

    try {
      const response = await publicPost(
        "/user/signup",
        JSON.stringify({
          name: name,
          email: email,
          password: pass,
        })
      );
      if (response.userId) {
        setMessage(response.message);
        navigteTo("/user/signin");
      } else {
        setOpen(false);
        setMessage("Please try again.");
      }
    } catch (err) {
      setOpen(false);
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
          <h1 className={styles.h1}>Create an account</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}>
              Your name
            </label>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password" className={styles.label}>
              Password
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

            <label htmlFor="confirm-password" className={styles.label}>
              Confirm password
            </label>
            <input
              className={styles.input}
              type="password"
              name="confirm-password"
              placeholder="**********"
              required
              value={confPass}
              onChange={(event) => setConfPass(event.target.value)}
            />

            <p className={styles.alert}>{message}</p>

            <div>
              <button
                type="submit"
                className={styles.btn}
                onClick={handleToggle}
              >
                Create an account
              </button>
              <Loader open={open} setOpen={setOpen} />
            </div>

            <p className={styles.p}>
              Already have an account?{" "}
              <NavLink to="/user/signin" className={styles.a}>
                Login here
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
