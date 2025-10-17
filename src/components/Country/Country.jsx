import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleAddFlags}) => {
   
    const [visited, setVisited] = useState(false);
    //  console.log(handleVisitedCountries);
    const handleVisited = () =>{
        // setVisited(true)

        // method one
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // method two
        // setVisited(visited? false : true)

        // method three
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    // console.log(country);
    return (
        <div className={` country ${visited && 'country-backgroun'}`}>
            <img className='image-style' src={country.flags.flags.png} alt="" />
          <div className='country-style'>
              <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
          </div>
            <div className='country-style'>
                <p>Area: {country.area.area}</p>
            <p>{country.area.area > 300000? 'Big Country' : 'Small Country'}</p>
            </div>
            <button className={`${visited? 'button-style2' : 'button-style'}`} onClick={handleVisited}>{visited? 'Visited' : 'Not Visited'}</button>
            <button className='button-style' onClick={()=>{handleAddFlags(country.flags.flags.png)}}>Add flags</button>
        </div>
    );
};

export default Country;