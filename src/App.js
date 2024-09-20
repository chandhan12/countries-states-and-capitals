import React, { useState } from 'react';
import './App.css'; 

const countries = [
  "United States",
  "India",
  "Canada",
  "Australia",
  "Germany",
  "Brazil",
  "Japan",
  "South Africa",
  "Mexico",
  "France"
];

const statesAndCountries = [
  { country: "United States", states: ["California", "Texas", "Florida"] },
  { country: "India", states: ["Maharashtra", "Karnataka", "Gujarat", "Delhi"] },
  { country: "Canada", states: ["Ontario", "Quebec", "British Columbia"] },
  { country: "Australia", states: ["New South Wales", "Victoria", "Queensland"] },
  { country: "Germany", states: ["Bavaria", "Berlin", "Hamburg"] },
  { country: "Brazil", states: ["São Paulo", "Rio de Janeiro", "Bahia"] },
  { country: "Japan", states: ["Tokyo", "Osaka", "Hokkaido"] },
  { country: "South Africa", states: ["Gauteng", "KwaZulu-Natal", "Western Cape"] },
  { country: "Mexico", states: ["Jalisco", "Mexico City", "Nuevo León"] },
  { country: "France", states: ["Île-de-France", "Normandy", "Provence"] }
];

const capitals = [
  { state: "California", capital: "Sacramento" },
  { state: "Texas", capital: "Austin" },
  { state: "Florida", capital: "Tallahassee" },
  { state: "Maharashtra", capital: "Mumbai" },
  { state: "Karnataka", capital: "Bangalore" },
  { state: "Gujarat", capital: "Gandhinagar" },
  { state: "Delhi", capital: "New Delhi" },
  { state: "Ontario", capital: "Toronto" },
  { state: "Quebec", capital: "Quebec City" },
  { state: "British Columbia", capital: "Victoria" },
  { state: "New South Wales", capital: "Sydney" },
  { state: "Victoria", capital: "Melbourne" },
  { state: "Queensland", capital: "Brisbane" },
  { state: "Bavaria", capital: "Munich" },
  { state: "Berlin", capital: "Berlin" },
  { state: "Hamburg", capital: "Hamburg" },
  { state: "São Paulo", capital: "São Paulo" },
  { state: "Rio de Janeiro", capital: "Rio de Janeiro" },
  { state: "Bahia", capital: "Salvador" },
  { state: "Tokyo", capital: "Tokyo" },
  { state: "Osaka", capital: "Osaka" },
  { state: "Hokkaido", capital: "Sapporo" },
  { state: "Gauteng", capital: "Johannesburg" },
  { state: "KwaZulu-Natal", capital: "Durban" },
  { state: "Western Cape", capital: "Cape Town" },
  { state: "Jalisco", capital: "Guadalajara" },
  { state: "Mexico City", capital: "Mexico City" },
  { state: "Nuevo León", capital: "Monterrey" },
  { state: "Île-de-France", capital: "Paris" },
  { state: "Normandy", capital: "Rouen" },
  { state: "Provence", capital: "Marseille" }
];

const App = () => {

  const [activeCountry, setActiveCountry] = useState(countries[0])
  const [activeState, setActiveState] = useState(
    statesAndCountries.find((item) => item.country === countries[0]).states[0]
  );

  const onCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setActiveCountry(selectedCountry);

    const selectedCountryStates = statesAndCountries.find(
      (eachItem) => eachItem.country === selectedCountry
    ).states;

    setActiveState(selectedCountryStates[0]);
  }

  const getCountryStates = statesAndCountries.find((eachItem) =>
    eachItem.country === activeCountry
  );

  const statesArray = getCountryStates.states;

  const onStateChange = (event) => {
    const selectedState = event.target.value;
    setActiveState(selectedState);
  }

  const getStateCapital = capitals.find((eachItem) =>
    eachItem.state === activeState
  );

  const stateCapital = getStateCapital.capital;

  return (
    <div className="app-container">
    <div className="container">
      <h2 className="title">Countries, States, and Their Capitals</h2>

      <div className="dropdown-section">
        <label className="label">Select Country:</label>
        <select name="countries" value={activeCountry} onChange={onCountryChange} className="select">
          {countries.map((eachCountry) => (
            <option key={eachCountry}>{eachCountry}</option>
          ))}
        </select>
      </div>

      <div className="dropdown-section">
        <label className="label">Select State:</label>
        <select name="states" value={activeState} onChange={onStateChange} className="select">
          {statesArray.map((eachState) => (
            <option key={eachState}>{eachState}</option>
          ))}
        </select>
      </div>

      <p className="capital-text">State Capital: <strong>{stateCapital}</strong></p>
    </div>
    </div>
  );
}

export default App;
