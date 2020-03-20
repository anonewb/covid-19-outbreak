import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  flex: 1 100%;
  margin: 10px 20px;
  padding: 1em;
  text-align: center;
  color: #000;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
`;

const Value = styled.p`
  text-align: center;
  color: ${props => props.confirmed && "orange"};
  color: ${props => props.recovered && "limegreen"};
  color: ${props => props.deaths && "red"};
  font-weight: bold;
  font-size: 2.2rem;
  margin-bottom: 8px;
`;

const Type = styled.p`
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 1rem;
`;

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export default function Card(props) {
  return (
    <CardWrapper>
      {props.type === "confirmed" && (
        <Value confirmed>{numberWithCommas(props.value)}</Value>
      )}
      {props.type === "recovered" && (
        <Value recovered>{numberWithCommas(props.value)}</Value>
      )}
      {props.type === "deaths" && (
        <Value deaths>{numberWithCommas(props.value)}</Value>
      )}
      <Type>{capitalizeFirstLetter(props.type)}</Type>
    </CardWrapper>
  );
}
