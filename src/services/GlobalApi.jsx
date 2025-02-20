import axios from 'axios';

const movieBaseUrl = 'https://www.themoviedb.org/3'
const api_key = '773bbf8fda6d8851e73213088c1447b4'

const getTrendingVideos = axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_key)

export default { getTrendingVideos }