import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = '773bbf8fda6d8851e73213088c1447b4'

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key='+api_key;
const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

const getMovieByGenreId = (id)=>
      axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default { getTrendingVideos, getMovieByGenreId }