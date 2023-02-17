import React from 'react'
import DishesSearch from '../components/DishesSearch';
import "../styles/Search.sass"

const Search = () => {

  const handleSearch = (search) => {
    console.log("Searching...",search);
  }

  return (
    <>
      <div className='searchContainer'>
        <div className='glass'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <input className='form-control rounded-3'
          type='text'
          placeholder="Search for Burger, Pizza, Pasta or Salad..."
          onChange={event => handleSearch(event.target.value)}
        />
      </div>
      <DishesSearch />
    </>
  )
}

export default Search