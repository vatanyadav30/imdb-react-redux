import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    originalFavourites:[],
    filteredFavourites:[],
    genres:[],
    selectedGenreId:'',
    
};

export const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        onWatchListChange:(state,action)=>{
            const genresdata= state.originalFavourites.map( (data) => data.genre_ids[0]);
            state.genres=Array.from(new Set(genresdata));
            state.filteredFavourites=state.originalFavourites;
        },

        addtoWatchList : (state,action)=>{
            state.originalFavourites.push(action.payload);
            watchListSlice.caseReducers.onWatchListChange(state,action);
        },

        removeFromWatchList : (state,action)=>{
            const movieIndex= state.originalFavourites.findIndex( movie => movie.id == action.payload);
            state.originalFavourites.splice(movieIndex,1);
            watchListSlice.caseReducers.onWatchListChange(state,action);

        },

        searchWatchList : (state,action)=>{
            const searchText= action.payload;
            state.filteredFavourites= state.filteredFavourites.filter( 
                movie =>movie.title.toLowerCase().includes(searchText.toLowerCase()));
        },

        filterWatchList : (state,action)=>{
            state.filteredFavourites= state.originalFavourites.filter
                (movie => !state.selectedGenreId || movie.genre_ids[0] == state.selectedGenreId);

        },

        sortingWatchList : (state,action)=>{
            const sortingType= action.payload;
            if(!sortingType){
                state.filteredFavourites=state.originalFavourites;
            }
            else{
                state.filteredFavourites=[...state.originalFavourites].sort((a,b)=>{
                    return sortingType === "asc" ? a.popularity-b.popularity : b.popularity-a.popularity;
                });
            }
        },

        setSelectedGenreId:(state,action) =>{
            state.selectedGenreId=action.payload;
        }
    }
});

export const { addtoWatchList,removeFromWatchList,searchWatchList,filterWatchList,sortingWatchList,setSelectedGenreId} = watchListSlice.actions;

export default watchListSlice.reducer;