import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCLoading, setIsCLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecoverd] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");
  const [value, setValue] = useState("India");
  const [countries, setCountries] = useState([]);

  const [cConfirmed, setCConfirmed] = useState(0);
  const [cRecovered, setCRecoverd] = useState(0);
  const [cDeaths, setCDeaths] = useState(0);

  const handleChange = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://covid19.mathdro.id/api")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setConfirmed(res.confirmed.value);
        setRecoverd(res.recovered.value);
        setDeaths(res.deaths.value);
        const date = new Date(res.lastUpdate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const dt = date.getDate();
        const hr = date.getHours();
        const min = date.getMinutes();
        console.log(date, year, month, dt);
        setLastUpdate(
          `${dt}-${month}-${year}, ${hr}:${min} ${hr > 12 ? "PM" : "AM"}`
        );
        setIsLoading(false);
      })
      .catch(e => console.log(e));

    setIsCLoading(true);
    fetch("https://covid19.mathdro.id/api/countries")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setCountries(res.countries);
        setIsCLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/${value}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setCConfirmed(res.confirmed.value);
        setCRecoverd(res.recovered.value);
        setCDeaths(res.deaths.value);
      })
      .catch(e => console.log(e));
  }, [value]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>Total no of confirmed cases: {confirmed}</p>
            <p>Total no of recovered cases: {recovered}</p>
            <p>Total no of deaths cases: {deaths}</p>
            <p>{"==========================="}</p>

            {isCLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <label>
                  Pick a country:
                  <select value={value} onChange={handleChange}>
                    {Object.keys(countries).map((country, i) => {
                      return (
                        <option value={country} key={i}>
                          {country}
                        </option>
                      );
                    })}
                  </select>
                </label>

                <p>
                  No of confirmed cases in {value}: {cConfirmed}
                </p>
                <p>
                  No of recovered cases in {value}: {cRecovered}
                </p>
                <p>
                  No of deaths cases in {value}: {cDeaths}
                </p>
              </>
            )}

            <p>Last updated: {lastUpdate}</p>
          </>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
