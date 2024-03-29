import { useEffect, useState ,useMemo } from "react";
import MovieCard from "./MovieCard";
import Heading from "./Heading";
import Pagination from "./Pagination";
import{ useDispatch, useSelector} from 'react-redux';
import { setMovies } from "../reducer/movieList.reducer";



const MovieList=()=>{

    const dispatch = useDispatch();
    const movies= useSelector((state) =>state.movies.list); 

    const fetchMovies= (pageNo)=>{              //fetch movies based on pageno
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3197cf986bdaad1c8ed66c0e5a4d9224&page=${pageNo}`)
            .then( res => res.json() )
            .then( data => dispatch( setMovies( data.results || [])) )
    }

    const popularMovieCount = useMemo ( ()=>movies.filter( movie =>{ //useMemo used to memoization/cache the values
        return movie.popularity>120;
    }).length,[movies]); 

    useEffect( ()=>{    // only calling the fetchMovies(1) during mount as dependency is null
        fetchMovies(1);
    },[]);
    
    return (
        <>
            <Heading/>
            <p>Popular Movies {`>120`}:{popularMovieCount}</p>

            <div className="movie-list">
                {!movies.length && <p>Loading...</p>}
                {   
                    movies?.map( (movie) => (
                        <MovieCard movie={movie} /> // passing movie object as a prop
                    )) 
                }
            </div> 
            <Pagination onPageChange={fetchMovies}/> 
            
        </>
        
    )
};

export default MovieList;