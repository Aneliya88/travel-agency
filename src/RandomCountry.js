import React, { useState } from 'react';
import axios from 'axios';

const RandomCountry = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchRandomCountry = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countries = response.data;
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      setCountry(randomCountry);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='random'>
      <button className='btnRandom' onClick={fetchRandomCountry}>Get Random Country</button>
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {country && (
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
          <p>Region: {country.region}</p>
        </div>
      )}
    </div>
  );
};

export default RandomCountry;