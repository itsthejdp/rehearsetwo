import React from 'react';
import { useState } from 'react';
import './Studios/studioData'





export default function Form( props ) {
  const manilaCities = ["Bulacan", "Caloocan", "Navotas", "Pasig", "Parañaque", "Quezon City", "San Juan", "Taguig"];


  const [inputtedTitle, setTitle] = useState('')
  const [inputtedAddress, setAddress] = useState('')
  const [inputtedCity, setCity] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });
};

const addressChangeHandler = (event) => {
    setAddress(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
}

const cityChangeHandler = (event) => {
    setCity(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
};

  const submitText = (event) => { 

    event.preventDefault();
    
    // setTitle(event.target.value);
    // setAddress(event.target.value);
    // setCity(event.target.value);
    
    const studioData = {
      name: inputtedTitle,
      address: inputtedAddress,
      city: inputtedCity
    }

    props.onSaveStudioData(studioData);
    setTitle('');
    setAddress('');
    setCity('');
    

  }

  const cityOption = manilaCities.map((city, index) => <option key={index} value={city}> {city} </option>)
  return (
    <div>
      <form onSubmit={submitText} className={`bg-sky-500 flex flex-col p-8 m-12 text-center rounded-2xl ${props.isVisible ? "" : "hidden"} `}>
        <label htmlFor="">Studio Name</label>
        <input type="text" name="studio-name" value={inputtedTitle} onChange={titleChangeHandler} />
        <label htmlFor="">Address </label>
        <input type="text" name="Hey" value={inputtedAddress} onChange={addressChangeHandler} />
        <label htmlFor=""> City </label>
        <select value={inputtedCity} onChange={cityChangeHandler} >
          {cityOption}
        </select>
        <label htmlFor=""> Studio Image </label>
        <span className="m-1"><input type="file" name="Hey" id="" /></span>
        <span className="inline-block"><button type="submit" className="rounded-full bg-sky-50 py-2 px-4 m-1">Add Studio</button></span>
      </form>
    </div>
  );
}

