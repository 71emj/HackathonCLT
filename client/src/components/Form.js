import React from "react";
import { Container, Grid, Input, Select, Image, Header } from "semantic-ui-react";
import { Gap, Paragraph } from "./utilities";

const CustomForm = props => {
  const style = {
    padding: "3rem 4rem",
    justifyContent: "center",
    height: "50%",
    background: "#5809d0",
    color: "#fff"
  }
  const headerStyle = {
    color: "white",
    fontSize: "2.5rem"
  }
  return (
    <Container>
      <Gap size="10rem"/>
      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column style={{ padding: "0", boxSizing: "border-box" }}>
            <div style={{ ...style, background: "#7118f9" }}>
              <Header as="h1" style={headerStyle}>
                Find your local home
              </Header>
              <h3>Find a Habitat near you to volunteer, shop at a Habitat ReStore and more.</h3>
              <Gap size="1vw"/>
              <Input action='Search' placeholder='Search...' />
            </div>
            <div style={style}>
              <Header as="h1" style={headerStyle}>
                Find out how you can help
              </Header>
              <h3>Families who partner with us build their own homes alongside volunteers, pay an affordable mortgage and are grateful for your help.</h3>
              <Gap size="0.75vw"/>
              <Input action={{ icon: "dollar" }} placeholder='Donate...' />
            </div>
          </Grid.Column>
          <Grid.Column style={{ padding: "0" }}>
            <Image fluid style={{ maxWidth: "none", width: "105%" }} src='https://78.media.tumblr.com/231f33dbfde5d6ed619b9518536d31e8/tumblr_p60tgflmaJ1qggwnvo1_1280.jpg' wrapped />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ padding: "0", maxHeight: "22.5rem", overflow: "hidden" }}>
            <Image fluid style={{ maxWidth: "none", width: "105%" }} src='https://www.habitat.org/sites/default/files/styles/3_4_large/public/2018-01/promo-housinghelp-3.jpg?itok=PBqSth2x' wrapped />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};



export default CustomForm;
