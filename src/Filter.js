import React, { useState, useEffect } from 'react';
import Countries from './Countries';
import RandomCountry from './RandomCountry';

const Filter = ({ countriesList = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countriesList);
  useEffect(() => {
    setFilteredCountries(countriesList);
  }, [countriesList]);
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const filtered = countriesList.filter(country =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className='searchAndRandom'>
      <input className='myInput'
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleInputChange}/>
      <p>or use random</p>
      <RandomCountry/>
      <div className="countries-grid">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, id) => (
            <Countries 
              key={id} 
              src={country.src} 
              alt={country.name} 
              text={country.text} 
            />
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
};
export default Filter;