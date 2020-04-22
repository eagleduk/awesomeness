import React, { Component, Fragment } from "react";
import styled, {
  createGlobalStyle,
  keyframes,
  css,
  ThemeProvider,
} from "styled-components";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin: 0;
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true,
})`
  border: none;
  ${awesomeCard}
`;

const Card = styled.div`
  background-color: white;
`;

const Button1 = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${(props) => props.theme.successColor};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Contanier>
            <GlobalStyle />
            <Button>Hello</Button>
            <Button danger rotationTime={5}>
              Hello
            </Button>
            <AnchorExtend href="http://google.com">Go to google</AnchorExtend>
          </Contanier>

          <Contanier>
            <Input placeholder="hello" />
          </Contanier>

          <Contanier>
            <Form />
          </Contanier>
        </Fragment>
      </ThemeProvider>
    );
  }
}

const Form = () => (
  <Card>
    <Button1>Hello</Button1>
  </Card>
);

const Contanier = styled.div`
  height: 20vh;
  width: 100%;
  background-color: pink;
  ${Card} {
    background-color: blue;
  }
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
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
  ${(props) => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const Anchor = Button.withComponent("a");

const AnchorExtend = styled(Anchor)`
  text-decoration: none;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default App;
