import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'



function Banner() {
   const [movie,setMovie]=useState()
  //  const [Api,setApi]=useState('97f8da9a819fb0a77145d10270f1a65e')
  useEffect(()=>{
   axios.get('trending/all/week?api_key=97f8da9a819fb0a77145d10270f1a65e&language=en-US').then((response)=>{
    setMovie(response.data.results[1])

    // const responseData =response.data.results;
    // const randomIndex=Math.floor(Math.random() * responseData.lenght);


    // console.log(responseData[randomIndex]);
    // setMovie(responseData[randomIndex])


   });

  },[])
  return (
    <div 
    style={{backgroundImage: `Url(${movie? imageUrl + movie.backdrop_path:""})`}}
    
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title :""}</h1>
            <div className='banner.buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>

            <h1  className='description'>{movie? movie.overview :""}</h1>

        </div>
        <div className="fade_bottom"></div>
      
    </div>
  )
}

export default Banner
