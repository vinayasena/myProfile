import React from "react";
import {  Grid, Paper} from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code';
import CustomTimeline from "../Timeline/CustomTimeline";
import './about.css';

function Skills({ data }) {
  return (
    
      <Grid container className="section" justify="space-between" spacing={3}>
        {data.map((i, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Paper elevation={0} className="skill" >
                <CustomTimeline data={i.value} title={i.name} icon={<CodeIcon/>} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    
  );
}

export default Skills;
