import React from 'react'

function MovieList(props) {
  const renderMovies = props.movies.map((movie, index) => {
    return <img src={movie.Poster} alt={movie.Title}></img>
  })

  return (
    <div>
      {renderMovies}
    </div>
  )
}

export default MovieList