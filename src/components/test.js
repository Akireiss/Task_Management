import React, { useState } from 'react';

const Test = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (query) => {
    setSearchTerm(query);

    fetch(`https://ph-locations-api.buonzz.com/v1/cities?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        const cities = data.data.map((city) => city.name);
        setSuggestions(cities);
      })
      .catch((error) => console.error(error));
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSuggestionSelect = (city) => {
    setSearchTerm(city);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-10 mt-[-4.5rem] overflow-y-auto max-h-40 bg-white border border-gray-300 divide-y divide-gray-300 rounded">
          {suggestions.map((city, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionSelect(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;
