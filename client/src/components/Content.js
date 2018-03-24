import React from "react";
import { Container, Card } from "semantic-ui-react";
import { Gap } from "./utilities";

const ContentCard = props => {
  return (
    <div>
      <Gap size="2rem" />
      <Card.Group centered textAlign="center">
        <Card color="olive">
          Hello
        </Card>
        <Gap inline horizontal size="3.5rem"/>
        <Card color="olive">
          Hello
        </Card>
        <Gap inline horizontal size="3.5rem"/>
        <Card color="olive">
          Hello
        </Card>
      </Card.Group>
    </div>
  );
};

export default ContentCard;
