import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Contanier>
        <Button />
        <Button danger />
      </Contanier>
    );
  }
}

const Contanier = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

export default App;
