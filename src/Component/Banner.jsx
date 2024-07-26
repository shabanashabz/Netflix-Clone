import React, {useEffect} from 'react'
import instance from '../Instance';
import { useState } from 'react';
import './Banner.css'

function Banner({fetchUrl}) {
    console.log("banner fetch url",fetchUrl);
    const [movie,setMovie]=useState({})
    const image_base_url = "https://image.tmdb.org/t/p/original"
    const fetchData = async() => {
        const result = await instance.get(fetchUrl)
        const {data} =result;
        // console.log("-----Total length---------",data.results.length);
        // console.log(data.results[Math.floor( Math.random()*data.results.length)]);
        setMovie(data.results[Math.floor( Math.random()*data.results.length)]);
        
    }
    useEffect(()=>{
      setInterval(()=>{
        fetchData()
      },5000)
    },[])
    // console.log("movie details");
    // console.log(movie);

  return (
    <div style={{height:'600px',backgroundImage:`url(${image_base_url}${movie?.backdrop_path})`}}>
      <div className='banner_content'>
        <h2 style={{color:'white'}}>{movie?.name}</h2>
        <button className='btn btn-danger me-3'>play <i class=" ms-2 fa-solid fa-play"></i></button>
        <button className='btn btn-outline-light'>More Info <i class=" ms-2 fa-solid fa-caret-down"></i></button>
        <h3 style={{color:'white'}}>{movie?.overview?.slice(0,200)}...</h3>
      </div>
    </div>
  )
}

export default Banner;