import { configureStore } from '@reduxjs/toolkit'
import movieListReducer from '../reducer/movieList.reducer'
import watchListReducer from '../reducer/watchList.reducer'

export const store = configureStore({
  reducer: {
    movies: movieListReducer,
    watchList: watchListReducer
  },
}) 