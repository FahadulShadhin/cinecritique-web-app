import { useState } from "react";
import { Navbar, Footer, MovieCard } from "../../components";
import styles from "./styles";
import { publicGet } from "../../utilities/apiCaller";
import { checkAuthenticate } from "../../utilities";

const Movies = () => {
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await publicGet("/movie/name/" + movieName);
      if (response.data.status === 200) {
        setData(response.data.data);
      }
    } catch (err) {
      alert("Not found!");
    }
    return 0;
  };

  return (
    <>
      <div className={styles.navbar_container}>
        <Navbar isAuthenticate={checkAuthenticate()} />
      </div>

      <div className={styles.search_form_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className={styles.search_field_container}>
            <div className={styles.search_icon_container}>
              <svg
                aria-hidden="true"
                className={styles.search_icon}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className={styles.search_input}
              placeholder="Search by movie name"
              required
              value={movieName}
              onChange={(event) => setMovieName(event.target.value)}
            />
          </div>
          <button type="submit" className={styles.search_btn}>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>

      <div className="flex items-center justify-center">
        {data && <MovieCard data={data} />}
      </div>

      <Footer />
    </>
  );
};

export default Movies;
