import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import { filterWatchList, removeFromWatchList, searchWatchList, setSelectedGenreId, sortingWatchList } from "../reducer/watchList.reducer";
let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

const MovieFavourite=()=>{
    const dispatch=useDispatch();
    
    const{ originalFavourites,filteredFavourites, genres, selectedGenreId} = useSelector( (state) => state.watchList);

    useEffect(()=>{
        dispatch(filterWatchList());
    },[selectedGenreId, originalFavourites]);

    const handleGenreSelection=(e)=>{       
        const id=e.target.dataset.id;
        dispatch(setSelectedGenreId(id));
    }

    const handleMovieSearch=(e) =>{     
        const searchText= e.target.value;
        dispatch(searchWatchList(searchText));
    }

    const handlePopularitySorting=(e)=>{ 
        const sortingType=e.target.dataset.type;
        dispatch(sortingWatchList(sortingType));   
    }

    const handleMovieDeletion=(movieId)=>(e)=>{
        dispatch(removeFromWatchList(movieId));
    }
    
    return (
        <div>
            <h1>Movie favourites Page</h1>
            <div className="favourite-wrapper">
                <div className="left-section">
                    <div className="genre-wrapper">
                        <div className={`genre ${selectedGenreId =="" ? "selected" : ""}`} 
                        data-id="" 
                        onClick={handleGenreSelection}
                        >All Genres</div>
                        {
                            genres.map( (genreId) =>(
                                <div className={`genre ${selectedGenreId == genreId ? "selected" : ""}`} 
                                data-id={genreId}
                                    onClick={handleGenreSelection}>{genreids[genreId]}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="right-section">
                    <div>
                        <input type="text" placeholder="Search your favourite movie" onChange={handleMovieSearch}/>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>
                                    <span data-type="" onClick={handlePopularitySorting}>Popularity</span>
                                    <span data-type="asc" onClick={handlePopularitySorting}>^</span>
                                    <span data-type="desc" onClick={handlePopularitySorting}>v</span>

                                </th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredFavourites.map( (favourite) => (
                                  <tr>
                                    <td><img src={`https://image.tmdb.org/t/p/w500${favourite.poster_path}`} /></td>
                                    <td>{favourite.title}</td>
                                    <td>{genreids[favourite.genre_ids[0]]}</td>
                                    <td>{favourite.popularity}</td>
                                    <td>{favourite.vote_average}</td>
                                    
                                    <td> <button onClick={handleMovieDeletion(favourite.id)}>Delete</button></td>
                                  </tr>
                                ))
                            }
           
                        </tbody>
                    </table>
                    
                </div>
            </div>
        
        </div>
    )
    
}
export default MovieFavourite;


