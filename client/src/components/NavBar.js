import React from "react";
import { Container, Menu, Dropdown, Icon } from "semantic-ui-react";

const Navbar = props => {
  const borderLess = {
    borderRadius: "0",
    background: "#96C0CE"
  };
  const top = {
    top: "2rem"
  };
  const options = [
    { key: "time", text: "Time Posted", value: "time", icon: "clock" },
    { key: "popularity", text: "Most Liked", value: "popularity", icon: "like" },
    { key: "category", text: "Categories", value: "category", icon: "unordered list" }
  ];
  return (
    <Menu inverted compact borderless fixed="bottom" style={borderLess} color="black">
      <Container>
        <a href="/" children={<Menu.Item link header as="h3" name="LOGO" />} />
        <Menu.Menu position="right">
          <Menu.Item link>
            <Icon name="home" />
            <a href="/">Home</a>
          </Menu.Item>
          <Menu.Item link>
            <Icon name="filter" />
            <Dropdown text="Sort By">
              <Dropdown.Menu style={{ ...borderLess, ...top }} defaultValue={options[0]}>
                <Dropdown.Header>Sort Content</Dropdown.Header>
                <Dropdown.Divider />
                {options.map(option => <Dropdown.Item {...option}/> )}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
