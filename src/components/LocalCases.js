import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Loading = styled.div`
  font-size: 2em;
  text-align: center;
  color: #0563af;
  margin: 50px 0 0 0;
`;

const CenterAlign = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #000;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
  }
`;

const countrySliced = country => {
  return country.slice(0, 25) + "...";
};

export default function LocalCases(props) {
  if (props.isLoading) return <Loading>Loading...</Loading>;
  return (
    <CenterAlign>
      <label style={{ color: "#0563af", fontSize: 20 }}>
        Pick a country:
        <div className="box">
          <select value={props.value} onChange={props.handleChange}>
            {Object.keys(props.countries).map((country, i) => (
              <option value={country} key={i}>
                {country.length > 25 ? countrySliced(country) : country}
              </option>
            ))}
          </select>
        </div>
      </label>
      <CardContainer>
        <Card type="confirmed" value={props.confirmed} />
        <Card type="recovered" value={props.recovered} />
        <Card type="deaths" value={props.deaths} />
      </CardContainer>
    </CenterAlign>
  );
}
