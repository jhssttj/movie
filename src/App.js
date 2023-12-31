import './App.css';
import { useState } from 'react';
import MovieList from './components/MovieList';

function App() {
  const test = process.env.REACT_APP_API_KEY
  const [movies, setMovies] = useState([
    {
      "Title": "Starwars: Goretech",
      "Year": "2018",
      "imdbID": "tt9336300",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg"
    },
    {
      "Title": "MeUndies x StarWars: The Dark Side",
      "Year": "2018",
      "imdbID": "tt9414858",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzg3ZDcwNDQtOTVlMC00ZjE0LThiYjktY2U2YTVjODU5MWY5XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
    },
    {
      "Title": "MeUndies x StarWars: The Force",
      "Year": "2018",
      "imdbID": "tt9414918",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTdjYjM1YzgtYmViMS00ODFjLTgyM2EtMjRkNTFiNDEyMTU2XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
    },
    {
      "Title": "40 Years: StarWars & ILM",
      "Year": "2016",
      "imdbID": "tt5320598",
      "Type": "movie",
      "Poster": "N/A"
    },
    {
      "Title": "The StarWars Adventures",
      "Year": "2016–",
      "imdbID": "tt5814352",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWNkOGIyN2ItNGEwYS00ZTM2LWIyMzgtNjUxMzJmMjViZTE4XkEyXkFqcGdeQXVyMzM4MTY3ODg@._V1_SX300.jpg"
    },
    {
      "Title": "The StarWars Adventures: Project Blackwing",
      "Year": "2016–",
      "imdbID": "tt5814452",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmQyM2M3ZjItYjhiMy00YWM4LWFmZGMtNTI1NTYwYjZlOGJhXkEyXkFqcGdeQXVyMzM4MTY3ODg@._V1_SX300.jpg"
    }

  ])
  
  return (
    <div className="App">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
