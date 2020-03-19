import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CenterAlign = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

export default function GlobalCases(props) {
  if (props.isLoading) return <p>Loading...</p>;
  return (
    <CenterAlign>
      <h3>Global cases:</h3>
      <Card type="confirmed" value={props.confirmed} />
      <Card type="recovered" value={props.recovered} />
      <Card type="deaths" value={props.deaths} />
    </CenterAlign>
  );
}
