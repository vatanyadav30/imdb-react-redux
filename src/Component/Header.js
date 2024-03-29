import { Link } from "react-router-dom";

const Header=()=>{
    return (
        //Here for evey click each and every time we are going to server and asking for HTML, CSS , JS
        // by def href= goes to server
        <div className="header"> 
            {/* <a href="/">Movie List</a>
            <a href="/add-movie">Add Movie</a>
            <a href="/movie-detail">Movie Detail</a> */}

            {/* Link wrapper on top of histor API 
            Get all HTML, CSS, JS in first go itself
            Client side rendering is taking place*/}

            <Link to="/">Movie List</Link>
            <Link to ="/favourite">Favourites</Link>            
            {/* <Link to="/add-movie">Add Movie</Link> */}
        </div>
    )
}

export default Header;