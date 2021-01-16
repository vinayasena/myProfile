import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Profile from './pages/Profile';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "red" }}
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
