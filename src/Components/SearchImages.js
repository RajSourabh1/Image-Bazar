import React,{useEffect, useState} from "react";
import axios from "axios";

const SearchImages = ({addImages})=>{

    const [searchTerm,setSearchTerm] = useState("nature");

    // for loading only at the first time
    useEffect(()=>{
        getImages();
    },[])

    function getImages(){
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                client_id :process.env.REACT_APP_ACCESS_KEY,
                query : searchTerm
            }
        })
        .then(res=>addImages(res.data.results))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search Images" 
                onChange={e=>setSearchTerm(e.target.value)}
            ></input>
            <button onClick={getImages}>Search</button>
        </div>
    )
}

export default SearchImages;