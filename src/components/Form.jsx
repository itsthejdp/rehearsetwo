import React from 'react';

const manilaCities = ["Bulacan", "Caloocan", "Navotas", "Pasig", "Parañaque", "Quezon City", "San Juan", "Taguig"]


const handleClick = (e => {
  e.preventDefault();
  alert('You Clicked Me!')
}
)


export default function Form() {
  const cityOption = manilaCities.map((city, index) => <option key={index} value={city}> {city} </option>)
  return (
    <div>
      <form className="bg-sky-500 flex flex-col p-8 m-12 text-center rounded-2xl">
        <label htmlFor="">Studio Name</label>
        <input type="text" name="Hey" id="" />
        <label htmlFor="">Address </label>
        <input type="text" name="Hey" id="" />
        <label htmlFor=""> City </label>
        <select>
          {cityOption}
        </select>
        <label htmlFor=""> Studio Image </label>
        <span className="m-1"><input type="file" name="Hey" id="" /></span>
        <button onClick={handleClick} className="rounded-full bg-sky-50 p-2 m-1">Add Studio</button>
      </form>
    </div>
  );
}

