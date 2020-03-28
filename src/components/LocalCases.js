import React from "react";
import Card from "./Card";
import styled from "styled-components";

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
  // if (props.isLoading) return <Loading>Loading...</Loading>;
  return (
    <CenterAlign>
      <label style={{ color: "#0563af", fontSize: 20 }}>
        Pick a country:
        <div className="box">
          <select value={props.value} onChange={props.handleChange}>
            {props.countries.map((country, i) => (
              <option value={country.name} key={i}>
                {country.name.length > 25
                  ? countrySliced(country.name)
                  : country.name}
              </option>
            ))}
          </select>
        </div>
      </label>
      <CardContainer>
        <Card
          type="confirmed"
          value={props.confirmed}
          isLoading={props.isLoading}
        />
        <Card
          type="recovered"
          value={props.recovered}
          isLoading={props.isLoading}
        />
        <Card type="deaths" value={props.deaths} isLoading={props.isLoading} />
      </CardContainer>
    </CenterAlign>
  );
}
