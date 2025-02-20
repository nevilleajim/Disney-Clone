
const MovieCard = (movie) => {
      return ( 
            <>
            <div className="m-10 flex space-x-10 text-">
                  <div>
                        <img src={movie.poster} className="w-40 h-50" />
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                  </div>
            </div>
            </>
       );
}
 
export default MovieCard;