import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.9em;
  text-align: center;
  color: #fff;
  padding: 20px 0;
  margin: 0;
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #0563af, #00b4db);
  background: linear-gradient(to right, #0563af, #00b4db);
  width: 100%;
`;

export default function Header(props) {
  return (
    <>
      {/* {props.theme === "light" ? (
        <button
          onClick={props.toDark}
          style={{
            position: "absolute",
            top: 0,
            right: 0
          }}
        >
          to dark
        </button>
      ) : (
        <button
          onClick={props.toLight}
          style={{
            position: "absolute",
            top: 0,
            right: 0
          }}
        >
          to light
        </button>
      )} */}
      <Title>Covid-19 Outbreak</Title>
    </>
  );
}
