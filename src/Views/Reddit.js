import React, { useState, useEffect } from "react";
import axios from 'axios';
import Pagination from '../Components/Pagination'
import Posts from '../Components/Posts'


function Reddit(props) {
   
    const url = `https://www.reddit.com/r/${props.search}.json`
    const [items, setItem] = useState({
        loading: false,
        data:null,
        isEmpty: false
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
   
    useEffect(() => {
        setItem({
            loading: true,
            data: null,
            error:false,
            isEmpty: false
        })
        axios.get(url)
        .then(response => {
            setItem({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(error => {
            setItem({
                loading: false,
                data: null,
                error:true,
                isEmpty:false
            })
        })
    
    }, [url])

    //If search is null
    if (props.search === "" || props.search == null){
        return (
            <p></p>
        )
    }

    //if the result is loading
    if (items.loading){
        return (
            <p>Loading ...</p>
        )
    }

    //if results is error
    if (items.error){
        return (
            <p>There was an error or the item is not found. Try another search :)</p>
        )
    }
    
    //if result is sucess
    if (items.data){
        //get current item
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = items.data.data.children.slice(indexOfFirstPost, indexOfLastPost) 
      
        //change view - pagination
        const paginate  = pageNumber => setCurrentPage(pageNumber)
        
        return (
            <div>
                <Posts 
                    items = {currentPosts} 
                    query = {props.search}
                />
                    
                <Pagination
                    postsPerpage = { postsPerPage  } 
                    totalPost = { items.data.data.children.length } 
                    Paginate =  {paginate}
                />
            </div>
        )
    }
      
    return (
        <div>
        
        </div>
    )
}

export default Reddit