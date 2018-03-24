import React from "react";
import {
  Grid,
  Container,
  Menu,
  List,
  Button,
  Header,
  Icon
} from "semantic-ui-react";
import { Gap } from "./utilities";

const WhatWeDo = props => {
  const style = {
    background: "#f1f1f1",
    minHeight: "30rem",
    paddingTop: "3rem",
    paddingBottom: "2.5rem"
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
    padding: "1rem 2rem"
  };

  const content = [{
      title: "Step 1",
      body: "Apply to the program."
    },
    {
      title: "Step 2",
      body: "Interview and find out what are the needs."
    },
    {
      title: "Step 3",
      body: "Approve applicant base on CHA Rep recommendation."
    },
    {
      title: "Step 4",
      body: "CHA Rep introduce new family to neighbors and community."
    }];

  const progress = {
    display: "flex",
    alignItems: "center",
    width: "100%"
  };

  return (
    <div>
      <Gap size="10rem" />
      <Grid style={style}>
        <Container text textAlign="center" style={banner}>
          <Header>How Does It Work?</Header>
          <Gap size="1.5rem" />
          <div style={progress}>
            <Icon className="_node" size="huge" name="circle outline" />
            <div className="progress" />
            <Icon className="_node" size="huge" name="circle outline" />
            <div className="progress" />
            <Icon className="_node" size="huge" name="circle outline" />
            <div className="progress" />
            <Icon className="_node" size="huge" name="circle outline" />
          </div>
          <Menu style={menuStyle} widths={3}>
            {content.map(({ title, body }) => (
              <Menu.Item key={title} style={{ display: "block", width: "14rem", padding: "0 2rem" }}>
                <p>{body}</p>
              </Menu.Item>
            ))}
          </Menu>
          <Gap size="0.75rem" />
          <Button basic size="large" color="black">
            Learn More
          </Button>
        </Container>
      </Grid>
    </div>
  );
};

export default WhatWeDo;
