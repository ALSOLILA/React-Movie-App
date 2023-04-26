import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./komponents/Nav";
import Home from "./pagess/Home";
import About from "./pagess/About";
import Movies from "./pagess/Movies";
import logo from './images/logoNetflix.png'
import aboutphoto from './images/React-icon.svg.png'
import { useState } from "react";

import './index.css';
import Search from "./komponents/Search";

function App() {

  const [search,setSearch]=useState('')

  const getSearch = (str) => {
    setSearch(str)
  }


  return (
    <div className="content" >
   
   <BrowserRouter>
   <div className="header">
     <Nav logo={logo}/>
     <Search search={search} setSearch={setSearch} getSearch={getSearch}/></div>

   <Routes>

    <Route path="/" element={<div className="movie-display"><Home /></div>} /> 
    <Route path="/about" element={<About aboutphoto={aboutphoto}/>}/> 
    <Route path="/movies" element={<Movies search={search} setSearch={setSearch} />}/> 

   </Routes>
   
   
   
   </BrowserRouter>

    </div>
  );
}

export default App;
