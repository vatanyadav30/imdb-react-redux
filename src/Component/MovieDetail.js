import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail=(  )=>{

    const[ movieDetail, setMovieDetail] =useState({});

    const params=useParams(); //dynamic part id param -- param is a object
    //console.log(params)

    useEffect( ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=3197cf986bdaad1c8ed66c0e5a4d9224`)
            .then( res => res.json())
            .then( data => setMovieDetail(data));
    },[]);

    return (
        <>
            <h1>{movieDetail.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}` }/>
            <p> {movieDetail.overview}</p>
        </>
    )
}

export default MovieDetail;