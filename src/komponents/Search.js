import React from 'react'

function Search({search,setSearch,getSearch}) {

  const handleSearch = (e)=>{
    e.preventDefault()
    getSearch(e.target.value)
  }  
  return (
    <div>

<input id='input' value={search.value} onChange={handleSearch} type="search" placeholder='Search for your movie' /> 

    </div>
  )
}

export default Search