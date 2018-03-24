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
    { text: "Success Stories", background: "#7118f9", subText: "Hear from these people about their success" },
    { text: "Report", background: "#6601ff", subText: "Read on about our latest accountabilty and outcome report" },
    { text: "Workshop & Events", background: "#5809d0", subText: "Learn about our upcoming workshop and events" }
  ];

  const contentStyle = {
    display: "flex",
    width: "75%",
    margin: "auto",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <div>
      <Gap size="8rem"/>
      <Card.Group centered textAlign="center">
        {content.map(({ text, background, subText }, i) => (
          <Card key={i} style={{...cards, background }}>
            <Card.Content style={contentStyle}>
              <Card.Header>
                <Header as="h1" style={{ fontSize: "3rem", color: "#fff" }}>
                  {i < 2 ? text : text.replace(/\&/, "$&")}
                </Header>
              </Card.Header>
              <Card.Description style={{ fontSize: "1.25rem", color: "#fff" }}>
                {subText}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default ContentCard;
