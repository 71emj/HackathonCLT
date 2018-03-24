import React from "react";
import { Card, Header, Button, Icon, Image } from "semantic-ui-react";
import { Helpers } from "../util";
import Author from "./Author";

const style = {
  height: "60px",
  width: "auto"
};

const Preview = props => {
  const avatar = Helpers.dummyAvatar("hello");
  return (
    <Card fluid>
      <Card.Content>
        <Author
          size="42px"
          font="h4"
          name={props.author}
          gap="1rem"
          time={props.timestamp}
        />
        <Card.Meta>Friends of Elliot</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default Preview;
