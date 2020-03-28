import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CenterAlign = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #0563af;
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

export default function GlobalCases(props) {
  // if (props.isLoading) return <Loading>Loading...</Loading>;
  return (
    <CenterAlign>
      <h4 style={{ marginBottom: 0, textDecorationLine: "underline" }}>
        Global Cases
      </h4>
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
