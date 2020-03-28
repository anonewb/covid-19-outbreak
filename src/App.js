import React, { useState, useEffect } from "react";
import "normalize.css";
import "./App.css";
import Header from "./components/Header";
import GlobalCases from "./components/GlobalCases";
import LocalCases from "./components/LocalCases";
import Statewise from "./components/Statewise";
// import useFetch from "./hooks/useFetch";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecoverd] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");
  const [isCLoading, setIsCLoading] = useState(false);
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [cConfirmed, setCConfirmed] = useState(0);
  const [cRecovered, setCRecoverd] = useState(0);
  const [cDeaths, setCDeaths] = useState(0);
  const [statewise, setStatewise] = useState();
  const [theme, setTheme] = useState("light");

  // const url = useFetch("https://covid19.mathdro.id/api", {});
  // console.log(url.response, url.error);
  // confirmed = url.response && url.response.confirmed.value;

  // const url = useFetch("https://covid19.mathdro.id/api/countries", {});
  // console.log(url.response, url.error);
  // confirmed = url.response && url.response.confirmed.value;

  const handleChange = e => {
    setValue(e.target.value);
  };

  const toDark = () => setTheme("dark");
  const toLight = () => setTheme("light");

  useEffect(() => {
    const globalCasesData = () => {
      setIsLoading(true);
      fetch("https://covid19.mathdro.id/api")
        .then(res => res.json())
        .then(res => {
          // console.log(res);
          setConfirmed(res.confirmed.value);
          setRecoverd(res.recovered.value);
          setDeaths(res.deaths.value);
          const date = new Date(res.lastUpdate);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const dt = date.getDate();
          const hr = date.getHours();
          const min = date.getMinutes();
          setLastUpdate(
            `${dt}-${month}-${year}, ${hr}:${min} ${hr > 12 ? "PM" : "AM"}`
          );
          setIsLoading(false);
        })
        .catch(e => console.log(e));
    };
    globalCasesData();

    const fetchAllCountriesData = () => {
      setIsCLoading(true);
      fetch("https://covid19.mathdro.id/api/countries")
        .then(res => res.json())
        .then(res => {
          // console.log(res);
          setCountries(res.countries);
          setIsCLoading(false);
        })
        .catch(e => console.log(e));
    };
    fetchAllCountriesData();

    const fetchUserCountryData = () => {
      fetch(`https://ipapi.co/json/`)
        .then(res => res.json())
        .then(res => setValue(res.country_name))
        .catch(e => console.log(e));
    };
    fetchUserCountryData();

    const fetchStateCasesData = () => {
      fetch(
        `https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise`
      )
        .then(res => res.json())
        .then(res => setStatewise(res.data.statewise))
        .catch(e => console.log(e));
    };
    // if (statewise === undefined) {
    //   return fetchStateCasesData();
    // }
    fetchStateCasesData();

    // const fetchData =  () => {

    // };
    // fetchData()

    // setIsLoading(true);
    // fetch("https://covid19.mathdro.id/api")
    //   .then(res => res.json())
    //   .then(res => {
    //     // console.log(res);
    //     setConfirmed(res.confirmed.value);
    //     setRecoverd(res.recovered.value);
    //     setDeaths(res.deaths.value);
    //     const date = new Date(res.lastUpdate);
    //     const year = date.getFullYear();
    //     const month = date.getMonth() + 1;
    //     const dt = date.getDate();
    //     const hr = date.getHours();
    //     const min = date.getMinutes();
    //     // console.log(date, year, month, dt);
    //     setLastUpdate(
    //       `${dt}-${month}-${year}, ${hr}:${min} ${hr > 12 ? "PM" : "AM"}`
    //     );
    //     setIsLoading(false);
    //   })
    //   .catch(e => console.log(e));

    // setIsCLoading(true);
    // fetch("https://covid19.mathdro.id/api/countries")
    //   .then(res => res.json())
    //   .then(res => {
    //     // console.log(res);
    //     setCountries(res.countries);
    //     setIsCLoading(false);
    //   })
    //   .catch(e => console.log(e));

    // fetch(`https://ipapi.co/json/`)
    //   .then(res => res.json())
    //   .then(res => setValue(res.country_name))
    //   .catch(e => console.log(e));

    // fetch(
    //   `https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise`
    // )
    //   .then(res => res.json())
    //   .then(res => setStatewise(res.data.statewise))
    //   .catch(e => console.log(e));
    // console.log("statewise", statewise);
  }, []);

  useEffect(() => {
    if (value) {
      const fetchData = () => {
        fetch(`https://covid19.mathdro.id/api/countries/${value}`)
          .then(res => res.json())
          .then(res => {
            // console.log(res);
            setCConfirmed(res.confirmed.value);
            setCRecoverd(res.recovered.value);
            setCDeaths(res.deaths.value);
          })
          .catch(e => {
            alert("No data found!!");
            setCConfirmed(0);
            setCRecoverd(0);
            setCDeaths(0);
          });
      };
      fetchData();
    }
  }, [value]);

  return (
    <>
      <React.StrictMode>
        <Header
          className="align-center"
          theme={theme}
          toDark={toDark}
          toLight={toLight}
        />

        <div className="app">
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

          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            Last updated: {lastUpdate}
          </p>
          <p style={{ textAlign: "center", fontSize: 14 }}>
            Read more about Covid19 outbreak{" "}
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/">
              here
            </a>
          </p>

          <Statewise statewise={statewise} />
        </div>
      </React.StrictMode>
    </>
  );
}

export default App;
