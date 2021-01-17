import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";

import Profile from './pages/Profile';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Container style={{marginTop:'60px'}}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
         
        >
         <Profile/>
        </Grid>
        <Grid item xs style={{ backgroundColor: "#ccc" }}>
         {/* header */}
         {/* portfolie */}
         {/* footer */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
