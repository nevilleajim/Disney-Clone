import MovieCard from "./MovieCard";

const MovieList = ({movie}) => {
      return ( 
            <>
            <div>
                  {movie.map((movie) => (
                              <MovieCard key={movie.id} movie={movie} />
                        ))}
            </div>
            </>
       );
}
 
export default MovieList;