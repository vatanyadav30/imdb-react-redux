import { useRef, useState } from "react";

const AddMovie=()=>{

    const nameRef=useRef();     // nameref
    const ratingRef=useRef();   //rating ref
    const validationRef=useRef();   //validation ref

    console.log("Rerender");

    const handleSubmit=(e)=>{       
        console.log(nameRef.current.value);  //getting value of input
        console.log(ratingRef.current.value);  //getting rating

        if(nameRef.current.value.length<3){  // here we have reference so we can do anything.
            nameRef.current.style.border="1px solid red";
            validationRef.current.innerText="Please enter min 3 char length movie";
            validationRef.current.style.fontSize="20px";
            validationRef.current.style.color="red";
        }
        else{
            validationRef.current.innerText="";
            nameRef.current.style.border="1px solid black";
            
        }
        
    }

    return (
        <div className="movie-form">
            <h1>Add movie</h1>
            <div>
                <input ref={nameRef} placeholder="Add a new movie" />
            </div>
            <div>
                <input ref={ratingRef} type="number" placeholder="Add rating for it"  />
            </div>
            <button onClick={handleSubmit}>Add</button>
            <div  ref={validationRef}> 
            </div>
            
        </div>
    )
}

/*
const AddMovie=()=>{

    const[movieName, setMovieName]=useState('');
    const[movieRating, setMovieRating]=useState(0);

    console.log("Rerender")

    const handleMovieNameChange=(e)=>{
        setMovieName(e.target.value)
    }

    const handleMovieRatingChange=(e)=>{
        setMovieRating(e.target.value);

    }

    const handleSubmit=(e)=>{
        console.log(movieName, movieRating)
        
    }

    return (
        <div className="movie-form">
            <h1>Add movie</h1>
            <div>
                <input placeholder="Add a new movie" onChange={handleMovieNameChange}/>
            </div>
            <div>
            <input type="number" placeholder="Add rating for it" onChange={handleMovieRatingChange} />
            </div>
            <button onClick={handleSubmit}>Add</button>
            
        </div>
    )
       

}
*/
export default AddMovie;