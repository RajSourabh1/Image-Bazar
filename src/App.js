import React,{useState} from "react";
import SearchImages from "./Components/SearchImages";
import DisplayImages from "./Components/DisplayImages";

const App = ()=>{

  const [images,setImages] = useState([]);

  return (
    <div>
       <h1>Image Bazar</h1>
       <SearchImages addImages={setImages}/>
       <DisplayImages images={images}/>
    </div>
  )
}

export default App;