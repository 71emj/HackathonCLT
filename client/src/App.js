import React, { Component } from 'react';
import { Transition } from "semantic-ui-react";
import { NavBar, Banner, Slogan, CardContent, Util } from "./components";
import { Helper } from "./util";

class App extends Component {
  state = {
    isOriginal: false
  }

  componentDidMount() {
    const showNavbar = evt => {
      if (window.scrollY > 0) {
        console.log(window.scrollY);

        return this.setState({ isOriginal: true });
      }
      // console.log(window.scrollY);
      return this.setState({ isOriginal: false });
    }
    window.document.addEventListener("scroll", Helper.throttle(showNavbar));
  }

  render() {
    const { isOriginal } = this.state;
    return (
      <div className="App">
        <Banner />
        <Slogan />
        {/* <Transition visible={isOriginal} duration={800}
          animation="fade up">
          <NavBar/>
        </Transition> */}
        <CardContent />
        <Util.Gap size="5rem"/>
      </div>
    );
  }
}

export default App;
