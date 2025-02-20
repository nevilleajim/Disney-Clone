// import React, { useState } from "react";
// import Header from "../components/Header";
import Beekeeper from "../assets/The Beekeeper.jpeg"
import RIPD from "../assets/RIPD.jpeg"
// import MovieList from "../components/MovieList";

// const Home = () => {
//       const [movie, setMovie] = useState([
//             {id: 1, title: "The Beekeeper", poster: Beekeeper, description: "One man's brutal campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as The Beekeeper."},
//             {id: 2, title: "RIPD", poster: RIPD, description: "After being murdered by his partner during a drug bust, Boston detective Nick Walker finds himself recruited by the Rest in Peace Department (or R.I.P.D). Partnered with Old West lawman Roy Pulsipher, the two are tasked with chasing down souls who have escaped judgment in the afterlife."}
//       ])
//       return ( <>
//             <Header />
//             {/* <MovieList movie={movie}/> */}
            
//       </>)
// }

// export default Home

// App.js
import React, { useState } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const App = () => {
        const [movie, setMovie] = useState([
            {id: 1, title: "The Beekeeper", poster: Beekeeper, description: "One man's brutal campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as The Beekeeper."},
            {id: 2, title: "RIPD", poster: RIPD, description: "After being murdered by his partner during a drug bust, Boston detective Nick Walker finds himself recruited by the Rest in Peace Department (or R.I.P.D). Partnered with Old West lawman Roy Pulsipher, the two are tasked with chasing down souls who have escaped judgment in the afterlife."}
      ])

  const [filteredMovies, setFilteredMovies] = useState(movie);

  const handleSearch = (query) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <Header  />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={filteredMovies} />
      <Footer />
    </div>
  );
};

export default App;