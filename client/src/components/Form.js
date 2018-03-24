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
                Find Participating properties
              </Header>
              <h3>Search availability in your area.</h3>
              <Gap size="1vw"/>
              <Input action='Go' placeholder='Zip...' />
            </div>
            <div style={style}>
              <Header as="h1" style={headerStyle}>
                Find out how you can help
              </Header>
              <h3>Families who partner with us build their own homes alongside volunteers, pay an affordable mortgage and are grateful for your help.</h3>
              <Gap size="0.5vw"/>
              <Input action={{ icon: "dollar" }} placeholder='Donate...' />
            </div>
          </Grid.Column>
          <Grid.Column style={{ padding: "0", overflow: "hidden" }}>
            {/* <Image fluid style={{ maxWidth: "none", width: "auto", height: "100%" }} src='assets/media/property.jpg' wrapped /> */}
            <div style={{
              background: "url('assets/media/property.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "80% center",
              backgroundRepeat: "no-repeat",
              display: "block",
              height: "100%",
              width: "100%",
              overflow: "hidden"
            }}></div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ padding: "0", maxHeight: "22.5rem", overflow: "hidden" }}>
            <Image fluid style={{ maxWidth: "none", width: "105%" }} src='https://www.habitat.org/sites/default/files/styles/3_4_large/public/2018-01/promo-housinghelp-3.jpg?itok=PBqSth2x' wrapped />
          </Grid.Column>
          <Grid.Column style={{ padding: "0" }}>
            <div style={{ ...style, height: "100%", background: "#6601ff"}}>
              <Header as="h1" style={headerStyle}>
                Sign up and start helping
              </Header>
              <h3>Families who partner with us build their own homes alongside volunteers, pay an affordable mortgage and are grateful for your help.</h3>
              <Gap size="0.75vw"/>
              <Input action={{ icon: "at" }} placeholder='Your email...' />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};



export default CustomForm;
