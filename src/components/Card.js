import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  background-color: #fff;
  flex: 1;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export default function Card(props) {
  const capitalizeFirstLetter = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <CardWrapper>
      <p>{props.value}</p>
      <p>{capitalizeFirstLetter(props.type)}</p>
    </CardWrapper>
  );
}
