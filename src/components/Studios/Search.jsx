import React from 'react'
import { useState } from 'react';

export default function Search( {filterText}) {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        
        e.preventDefault();

        
        setSearch(e.target.value);
        console.log(search);

    }

  return (
    <div>
        <input type="search" value={filterText} onChange={(e) => setSearch(e.target.value)} name="Search" id="search" placeholder='Search for a studio...' />
    </div>
  )
}
