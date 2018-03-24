import React from "react";
import { Grid, Container, Menu, List, Button, Header } from "semantic-ui-react";
import { Gap } from "./utilities";

const WhatWeDo = props => {
  const style = {
    background: "#f1f1f1",
    minHeight: "30rem"
  };

  const banner = {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  const menuStyle = {
    background: "none",
    color: "#fff",
    border: "none",
    borderRadius: "none",
    boxShadow: "none",
    fontSize: "1.5rem",
    margin: "2rem 4rem"
  };

  const content = ["hello", "hello", "hello"];

  return (
    <div>
      <Gap size="10rem" />
      <Grid style={style}>
        <Container text textAlign="center" style={banner}>
          <Header>How Does It Work?</Header>
          <Menu style={menuStyle} widths={3}>
            {content.map((item, i) => (
              <Menu.Item key={i} style={{ width: "25rem" }}>
                <List>
                  <List.Item>
                    <List.Header>Apple</List.Header>
                  </List.Item>
                  <List.Item>Pears</List.Item>
                  <List.Item>Oranges</List.Item>
                </List>
              </Menu.Item>
            ))}
          </Menu>
          <Gap size="2rem"/>
          <Button basic size="large" color="black">Learn More</Button>
        </Container>
      </Grid>
    </div>
  );
};

export default WhatWeDo;
