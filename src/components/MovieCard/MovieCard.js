import styles from "./styles";

const MovieCard = ({ data }) => {
  return (
    <>
      {data.Response === "True" ? (
        <div className={styles.card_container}>
          <img className={styles.poster} src={data.Poster} alt="" />
          <div className={styles.details_container}>
            <h5 className={styles.title}>{data.Title}</h5>
            <p className={styles.details}>Released: {data.Released}</p>
            <p className={styles.details}>Director: {data.Director}</p>
            <p className={styles.details}>Box office: {data.BoxOffice}</p>
            <p className={styles.details}>
              Plot: <span className="italic">{data.Plot}</span>
            </p>
            <p className={styles.details}>
              Genre: <span className="text-rainblue-100">{data.Genre}</span>
            </p>
          </div>
        </div>
      ) : (
        <p className="text-red-500">{data.Error}</p>
      )}
    </>
  );
};

export default MovieCard;
