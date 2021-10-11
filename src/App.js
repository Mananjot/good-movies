import "./styles.css";
import { useState } from "react";

var movieDictionary = {
  Action: [
    {
      movie: "Captain of Desert",
      rating: "4.8/5"
    },
    {
      movie: "Invisible Tattoo",
      rating: "4.5/5"
    },
    {
      movie: "Devil in Agbada",
      rating: "4.5/5"
    },
    {
      movie: "The Greatest Race",
      rating: "4/5"
    }
  ],
  Biopic: [
    {
      movie: "The Island",
      rating: "3.5/5"
    },
    {
      movie: "Escape from Alcatraz",
      rating: "3.5/5"
    },
    {
      movie: "Mesrine Part 1: Killer Instinct",
      rating: "3.5/5"
    }
  ],
  Thriller: [
    {
      movie: "The Call",
      rating: "4/5"
    },
    {
      movie: "Kill Bill:  The Whole Bloody Affair",
      rating: "4/5"
    },
    {
      movie: "Clank: Legacy",
      rating: "3.8/5"
    },
    {
      movie: "Osprey",
      rating: "3.5/5"
    },
    {
      movie: "Concrete shark",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  var movieCategory = Object.keys(movieDictionary);
  var [category, setCategory] = useState("Action");

  function showMovieList(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>
          <span role="img" aria-label="">
            🎥
          </span>{" "}
          goodMovies
        </h1>
        <p> Love to watch movies? have a look at my favourites</p>
        <div className="movieCategories">
          {movieCategory.map((movieType) => {
            return (
              <button key={movieType} onClick={() => showMovieList(movieType)}>
                {movieType}
              </button>
            );
          })}
        </div>
      </header>
      <hr />
      {movieDictionary[category].map((category) => (
        <div className="movieList">
          <h3 key={category.movie}>{category.movie} </h3>
          <p key={category.rating}> Rating: {category.rating} </p>
        </div>
      ))}
    </div>
  );
}
