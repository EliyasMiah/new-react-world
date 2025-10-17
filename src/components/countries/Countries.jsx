import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';



const Countries = ({counttriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country)=>{
        console.log(country)
        const countriesCount = [...visitedCountries, country]
        setVisitedCountries(countriesCount)
    }
    const handleAddFlags = (flag)=>{
        const visitedAddFlags = [...visitedFlags, flag]
        setVisitedFlags(visitedAddFlags)
        console.log(visitedFlags)
    }

 
const countriesData = use(counttriesPromise);
const countries = countriesData.countries;
// console.log(countries);
    return (
        <div >
            <h2>Countries: {countries.length}</h2>
            <h4>Total visited flags: {visitedFlags.length} </h4>
           
           <ol>
             {
                visitedCountries.map(country => <li key={country.ccn3.ccn3} >  {country.name.common}</li>)
            }
           </ol>
           <div >
            {
                visitedFlags.map(flag => <img className="image-style5" src={flag}></img>)
            }
           </div>
            <h4>Add flags:  {visitedCountries.length}</h4>
           <div className="countries">
             {
                countries.map(country => <Country 
                key={country.cca3.cca3} 
                country ={country} 
                handleVisitedCountries= {handleVisitedCountries}
                handleAddFlags ={handleAddFlags}
                >
                </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;