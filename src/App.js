import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";

import Profile from "./components/Profile/Profile";
//import Header from "./components/Header/Header";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import About from './components/About/About';
import data from './data';

function App() {
  return (
    <Container className="top_60 mainContainer">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile data={data}/>
          
        </Grid>
        <Grid item xs>
          {/* <Header /> */}
          <div className="page_container">
            <About data={data}/>
            <Resume />
          
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
