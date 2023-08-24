import React from 'react';
import { useState } from 'react';
import './Studios/studioData'

const manilaCities = ["Bulacan", "Caloocan", "Navotas", "Pasig", "Parañaque", "Quezon City", "San Juan", "Taguig"]


export default function Form({isVisible}) {
  const [inputtedTitle, setTitle] = useState('')
  const [inputtedAddress, setAddress] = useState('')
  const [inputtedCity, setCity] = useState('')

  const submitText = (event) => { 

    event.preventDefault();
    setTitle(event.target.value);
    setAddress(event.target.value);
    setCity(event.target.value);

    if (!inputtedTitle) return;

    const newStudio = {
      inputtedTitle,
      inputtedAddress,
      inputtedCity
    }
    console.log(newStudio);

    studios.push(newStudio);
  }

  const cityOption = manilaCities.map((city, index) => <option key={index} value={city}> {city} </option>)
  return (
    <div>
      <form className={`bg-sky-500 flex flex-col p-8 m-12 text-center rounded-2xl ${isVisible ? "" : "hidden"} `}>
        <label htmlFor="">Studio Name</label>
        <input type="text" name="studio-name" onChange={submitText} />
        <label htmlFor="">Address </label>
        <input type="text" name="Hey" onChange={submitText} />
        <label htmlFor=""> City </label>
        <select onChange={submitText}>
          {cityOption}
        </select>
        <label htmlFor=""> Studio Image </label>
        <span className="m-1"><input type="file" name="Hey" id="" /></span>
        <span className="inline-block"><button onClick={submitText} className="rounded-full bg-sky-50 py-2 px-4 m-1">Add Studio</button></span>
      </form>
    </div>
  );
}

