import React from "react";
import { Container, Menu, Dropdown, Icon } from "semantic-ui-react";

const Navbar = props => {
  const borderLess = {
    display: props.show ? "block" : "none",
    borderRadius: "0",
    background: "#4a00bb",
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
    transition: "display ease-in 0.5s, box-shadow ease-in 0.3s"
  };
  const top = {
    top: "2rem"
  };

  return (
    <Menu inverted compact borderless fixed="bottom" style={borderLess} color="black">
      <Container>
        <a href="/" children={<Menu.Item link header as="h2" name="LOGO" />} />
        <Menu.Menu position="right">
          <Menu.Item link>
            <a href="/">Find A Home</a>
          </Menu.Item>
          <Menu.Item link>
            <a href="/">Participate</a>
          </Menu.Item>
          <Menu.Item link>
            <a href="/">Hear Their Story</a>
          </Menu.Item>
          <Menu.Item link>
            <a href="/">Impact</a>
          </Menu.Item>
          <Menu.Item link>
            <a href="/">About</a>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
