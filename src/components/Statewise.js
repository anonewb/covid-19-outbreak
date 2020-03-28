import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const Section = styled.section`
  // font-size: 1.5em;
  text-align: center;
  color: #0563af;
  margin-bottom: 40px;
`;

const Header = styled.header`
  display: flex;
  font-weight: bold;
  background: #f9f9f9;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

const Col = styled.div`
  flex: 1 100%;
  margin: 10px 5px;
  padding: 0.5em 0;
  text-align: center;
  &:nth-child(n) {
    // background: red;
    flex: 1;
  }
  &:nth-child(1) {
    // background: blue;
    flex: 2;
  }
`;

export default function Statewise(props) {
  if (!props.statewise) {
    return <Skeleton duration={0.5} height={125} />;
  }
  console.log(props.statewise);
  //   state: "Kerala"
  // confirmed: 176
  // recovered: 11
  // deaths: 0
  // active: 165

  return (
    <Section>
      <h4
        style={{
          textDecorationLine: "underline",
          marginBottom: 20,
          marginTop: 40,
          fontSize: 24
        }}
      >
        Indian State/UT Cases
      </h4>
      <Header>
        <Col>State</Col>
        <Col>Confirmed</Col>
        <Col>Recovered</Col>
        <Col>Death</Col>
      </Header>
      {props.statewise.map((state, index) => (
        <Body key={index}>
          <Col>{state.state}</Col>
          <Col>{state.confirmed}</Col>
          <Col>{state.recovered}</Col>
          <Col>{state.deaths}</Col>
        </Body>
      ))}
    </Section>
  );
}
