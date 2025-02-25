import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({genreId, index_}) {

      const [movieList, setMovieList] = useState([]);
      const elementRef = useRef(null);
      useEffect(() => {
            getMovieByGenreId();
      }, [])

      const getMovieByGenreId = () => {
            GlobalApi.getMovieByGenreId(genreId).then(resp => {
                  // console.log(resp.data.results)
                  setMovieList(resp.data.results)
            })
      }

      const slideRight=(element)=>{
            element.scrolLeft+=500;
      }
      const slideLeft=(element)=>{
            element.scrolLeft-=500;
      }

  return (
      <div className="relative">
            <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
                  className={`text-[50px] text-white
                  p-2 z-10 cursor-pointer 
                  hidden md:block absolute
                  ${index_%3==0?'mt-[800px]':'mt-[150px]' }`}/>
            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 pb-5 px-3'>
                  {movieList.map((item, index)=> (
                        <>
                        {index_%3==0?<HrMovieCard key={index} movie={item}/> : <MovieCard key={index} movie={item}/>}
                        </>
                  ))}
            </div>
            <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
                  className={`text-[50px] text-white hidden md:block
                  p-2 cursor-pointer z-10 top-0
                  absolute right-0 
                  ${index_%3==0?'mt-[800px]':'mt-[150px]'}`}/> 
            </div>
  )
}

export default MovieList
