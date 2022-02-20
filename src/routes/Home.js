import {useEffect, useState} from "react";
import styles from "../App.module.css";
import Movie from "../components/Movie"

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return ( //함수 사이에 string 삽입 시: `~`, string 사이에 인자나 함수 삽입 시: ${~}
    <div>
      <h1>MOVIES</h1>
      {loading ? "loading..." : (
      <div>
        {movies.map( (movie) => (
          <Movie
           key={movie.id}
           id={movie.id}
           coverImg={movie.medium_cover_image}
           title={movie.title}
           summary={movie.summary}
           genres={movie.genres} />
        ))}
      </div>
      )}
    </div>
  );
}

export default Home;