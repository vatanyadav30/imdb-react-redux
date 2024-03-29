import { useCallback, useEffect, useState } from "react";



const Pagination=({onPageChange})=>{  // passing fetchMovies fn as a prop to Pagination from MoviesList

    const totalPages=40;
    const maxVisiblePageCount=10;

    const[pages, setPages]= useState([1,2,3,4,5,6,7,8,9,10]);   //pages as an state var araay
    const[activePage, setActivePage]=useState(1);   //active page as a state var

    //use Callback used to memoization or cache the fn so it wont declared again on every rerender, here dependency list is also null
    const  getPages= useCallback(function(totalPages,maxVisiblePageCount,activePage){   //getpages list whenever user change the page

        const output=[];
        const maxResultSize= totalPages>maxVisiblePageCount ? maxVisiblePageCount :totalPages;
        const startingPage= activePage +maxResultSize>totalPages ? totalPages-maxResultSize+1 : activePage;
    
        for(let i=0;i<maxResultSize;i++){
            output.push(startingPage+i);
        }
        return output;  //returning array 
    },[])
    

    const changePage= useCallback( (e)=>{   //  fn when user change the page

        let selectedPageNo=0;
        if(e.target.dataset.id=="previous"){   //checking which page has been clicked
            selectedPageNo=activePage-1;
        }
        else if(e.target.dataset.id=="next"){  //checking which page has been clicked
            selectedPageNo=activePage+1;
        }
        else{
            selectedPageNo=Number(e.target.dataset.id);  //checking which page has been clicked
        }

        setActivePage(selectedPageNo);  //udpating active page
        onPageChange(selectedPageNo);   //calling fetchmovies on current page -- by onPageChnage ref

    },[activePage])  //only going to rerender on mount or when active page changes-- usecallback

    useEffect( ()=>{    //only calling getpages if active page changes
            const newPages=getPages(totalPages,maxVisiblePageCount,activePage);
            setPages(newPages); //setting
    },[activePage])

    return (
        <div className="pagination">
            <button className="page-button" disabled={activePage==1? true : false } data-id ="previous" onClick={changePage}>Prev</button>
            {   
                pages.map((page) =>{
                    return <button className={`page-button ${activePage==page ? 'active' : '' }`} data-id={page} onClick={changePage}>{page}</button>
                })
            }
            <button className="page-button" disabled={activePage==totalPages? true : false } data-id ="next" onClick={changePage}>Next</button>
        </div>
    )

}

export default Pagination;