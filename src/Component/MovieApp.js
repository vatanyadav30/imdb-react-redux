import Heading from "./Heading";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import AddMovie from "./AddMovie";
import Header from "./Header";

import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    Router,
    RouterProvider,
    Routes,
} from "react-router-dom";
import MovieFavourite from "./MovieFavourite";

const  MovieApp =() =>{
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/imdb-react-redux" element={<MovieList/>} />
                <Route path="/favourite" element={<MovieFavourite/>} />
                <Route path="/movie-detail/:movieId" element={<MovieDetail/>}/>
                {/* <Route path="/add-movie" element={<AddMovie />}/> */}
                
            </Routes>
        </BrowserRouter>   
    )
}

/*
const router = createBrowserRouter([ // created router config using create browser router
    // total of 3 route
    {
        path: "/",
        element: (
            <>
                <Header/>
                <MovieList/>
            </>
        ),
    },
    {
        path: "/movie-detail/:movieId",
        element: (
            <>
                <Header/>
                <MovieDetail/>
            </>
        ),
    },
    {
        path: "/add-movie",
        element: (
            <>
                <Header/>
                <AddMovie/>
            </>
        ),
    },
]);
  
const MovieApp =()=>{
    return(
        <RouterProvider router={router} /> 
    )
}
*/



export default MovieApp;