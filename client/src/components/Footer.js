import React from "react";
import { Grid, Container, Header, List } from "semantic-ui-react";
import { Gap } from "./utilities";

const Footer = props => {
  const style = {
    minHeight: "20rem",
    background: "#f1f1f1",
    marginBottom: "3rem",
  };

  const footerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  };

  return (
    <Grid centered style={style}>
      <Container text style={footerStyle} textAlign="center">
        <Grid.Column>
          <Header as="h1">
            More About Elevate
          </Header>
          <List bulleted horizontal link>
            <List.Item as='a'>Terms and Conditions</List.Item>
            <List.Item as='a'>Privacy Policy</List.Item>
            <List.Item as='a'>Contact Us</List.Item>
          </List>
        </Grid.Column>
      </Container>
    </Grid>
  )
}

export default Footer;
