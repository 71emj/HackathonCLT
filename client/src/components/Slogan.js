import React from "react";
import { Container, Header, Divider } from "semantic-ui-react";
import { Gap } from "./utilities";

const Slogan = props => {
  const style = {
    fontSize: "3.75rem"
  };
  return (
    <Container text textAlign="center">
      <Gap size="3rem" />
      <Header as="h1" style={style}>
        <Header.Content style={{ display: "block" }}>
          <Header.Subheader style={{ fontSize: "21px" }}>
            AND WE ARE TRYING TO HELP
          </Header.Subheader>
        </Header.Content>
        WHO WE ARE
      </Header>
      <div style={{ width: "7.5rem", margin: "auto" }}>
        <Divider></Divider>
      </div>
    </Container>
  );
};

export default Slogan;
