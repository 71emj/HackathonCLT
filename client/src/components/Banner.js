import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import { Gap } from "./utilities";

const Banner = props => {
  const style = {
    // display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    fontSize: "5rem",
    background: "#96C0CE",
    minHeight: "80vh"
  };
  const segmentStyle = {
    position: "relative",
    padding: "1rem",
    paddingRight: "2.25rem",
    width: "100vw",
    height: "100vh",
    border: "none",
    borderRadius: "0px",
    boxShadow: "none"
  };
  const videoContainer = {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  }
  const videoStyle = {
    position: "relative",
    "top": "-14.5rem",
    width: "100%",
    height: "auto"
  };

  return (
    <Container fluid style={style} textAlign="center">
      <Segment style={segmentStyle}>
        <div style={videoContainer}>
          <video style={videoStyle} autoPlay loop muted>
            <source src="assets/media/banner.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Segment>
    </Container>
  );
};

export default Banner;
