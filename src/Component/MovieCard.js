import { Link, json } from 'react-router-dom';
import '../style/imdb.css' 
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addtoWatchList, removeFromWatchList } from '../reducer/watchList.reducer';

const MovieCard=({movie})=>{ //getting movie array

    const dispatch= useDispatch();
    const watchList= useSelector( (state)=> state.watchList.originalFavourites);
    
    const isMovieAdded= watchList.find( watchListMovie => watchListMovie.id == movie.id ) //checking id current movie is added in watchlist or not

    const updateWatchList = (e) => {
        const movied=e.target.dataset.id; //getting movieid of current movie

        if(e.target.classList.contains('Remove')){ //if not added
            dispatch(addtoWatchList(movie));
        }
        else{ 
            dispatch(removeFromWatchList(movied));
        }
        
    }
    return(
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` }/> 
            <Link to= {`/movie-detail/${movie.id}`}><h4>{movie.title}</h4></Link>
            <button data-id={movie.id} onClick={updateWatchList} className={isMovieAdded ? 'Added' : 'Remove'}>
                {isMovieAdded ? "Remove from WatchList" : "Add to WatchList" }
            </button>
        </div>
    )

}

export default MovieCard;