import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CenterAlign = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function LocalCases(props) {
  if (props.isLoading) return <p>Loading...</p>;
  return (
    <CenterAlign>
      <label>
        Pick a country:
        <select value={props.value} onChange={props.handleChange}>
          {Object.keys(props.countries).map((country, i) => (
            <option value={country} key={i}>
              {country}
            </option>
          ))}
        </select>
      </label>
      <CardContainer>
        <Card type="confirmed" value={props.confirmed} />
        <Card type="recovered" value={props.recovered} />
        <Card type="deaths" value={props.deaths} />
      </CardContainer>
    </CenterAlign>
  );
}
