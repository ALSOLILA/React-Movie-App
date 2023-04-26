import React, { useEffect,useState} from 'react';
import axios from 'axios';



function Movies({search,setSearch}) {

const[datas,setDatas]=useState([])


useEffect(()=>{

    axios.get(`https://www.omdbapi.com/?s=${search}&apikey=97e22ccd`)
    .then(response=>{console.log(response.data)
      setDatas(response.data.Search)})
    .catch(e=>console.log(e))
},[search])




  return (
    <div id="apimovies">
    
   {datas &&  datas.map((data)=> <div key={data.imdbID}> <h3>{data.Title} </h3> <img  src={data.Poster} alt={data.Title} /> <p> <span>{data.Year}</span> <span>{data.Type}</span></p>  </div>)  } 

    </div>
  )
}

export default Movies