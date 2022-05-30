import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Members from "./Components/Members";
import Performances from "./Components/Performances";
import SocialMedia from './Components/SocialMedia';

class App extends Component {
  constructor(props) {
    super(props);

    ReactGA.initialize("UA-000000-01");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Performances />
        <Members />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default App;
