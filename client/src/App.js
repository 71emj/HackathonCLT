import React, { Component } from 'react';
import { NavBar, Banner, Slogan, CardContent,
  Idealogy, WhatWeDo, Form, Footer, Util } from "./components";
import { Helper } from "./util";

class App extends Component {
  state = {
    isOriginal: false
  }

  componentDidMount() {
    const showNavbar = evt => this.setState({ isOriginal: !!window.scrollY });
    window.document.addEventListener("scroll", Helper.throttle(showNavbar));
  }

  render() {
    const { isOriginal } = this.state;
    return (
      <div className="App">
        <Banner />
        <Slogan />
        <Idealogy />
        <NavBar show={isOriginal}/>
        <CardContent />
        <WhatWeDo />
        <Form />
        <Util.Gap size="10rem"/>
        <Footer />
      </div>
    );
  }
}

export default App;
