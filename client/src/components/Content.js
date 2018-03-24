import React from "react";
import { Container, Card, Header } from "semantic-ui-react";
import { Gap } from "./utilities";

const ContentCard = props => {
  const style = {
    borderRadius: "1px"
  };

  const cards = {
    color: "#fff",
    margin: "0 1rem",
    height: "25vw",
    width: "27vw",
    padding: "1rem",
    textAlign: "center"
  };

  const content = [
    { text: "hello", background: "#7118f9" },
    { text: "hello", background: "#6601ff" },
    { text: "hello", background: "#5809d0" }
  ];

  const contentStyle = {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <div>
      <Gap size="8rem"/>
      <Card.Group centered textAlign="center">
        {content.map(({ text, background }, i) => (
          <Card key={i} style={{...cards, background }}>
            <Card.Content style={contentStyle}>
              <Card.Header>
                <Header as="h1" style={{ fontSize: "3rem", color: "#fff" }}>
                  {text}
                </Header>
              </Card.Header>
              <Card.Meta style={{ color: "#fff" }}>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description style={{ color: "#fff" }}>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default ContentCard;
