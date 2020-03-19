import React, { useState, useEffect } from "react";
import "normalize.css";
import "./App.css";
import Header from "./components/Header";
import GlobalCases from "./components/GlobalCases";
import LocalCases from "./components/LocalCases";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecoverd] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");
  const [isCLoading, setIsCLoading] = useState(false);
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
    <div className="app">
      <Header className="align-center" />

      <GlobalCases
        isLoading={isLoading}
        confirmed={confirmed}
        recovered={recovered}
        deaths={deaths}
      />

      <LocalCases
        isLoading={isCLoading}
        value={value}
        countries={countries}
        handleChange={handleChange}
        confirmed={cConfirmed}
        recovered={cRecovered}
        deaths={cDeaths}
      />

      <p style={{ textAlign: "center" }}>Last updated: {lastUpdate}</p>
    </div>
  );
}

export default App;
