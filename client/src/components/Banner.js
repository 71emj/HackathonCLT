import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import { Gap } from "./utilities";

const Banner = props => {
  const style = {
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
    position: "relative",
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

  const dimmer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    background: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    height: "100%",
    width: "100%",
    zIndex: "1"
  };

  const endOfPlay = evt => {
    console.log("started");
    const mask = document.getElementById("mask");
    const message = document.getElementById("message");
    mask.style.background = "rgba(0, 0, 0, 0.7)";
    message.textContent = "Community, Engagement, Accountabilty";
    setTimeout(() => {
      mask.style.background = "black";
      setTimeout(() => {
        message.textContent = "Participation";
      }, 2000);
    }, 172 * 1000);
  }

  return (
    <Container fluid style={style} textAlign="center">
      <Segment style={segmentStyle}>
        <div style={videoContainer}>
          <div id="mask" style={dimmer}>
            <Gap size="1rem" />
            <h1 id="message" style={{ fontSize: "2rem" }}>
              Community, Engagement, Accountabilty
            </h1>
          </div>
          <video onPlay={endOfPlay} style={videoStyle} autoPlay loop muted>
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
