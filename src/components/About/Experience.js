import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react'
import CustomTimeline from '../Timeline/CustomTimeline';
import WorkIcon from '@material-ui/icons/Work';
function Experience({data}) {
    
    return (
       
        <Grid container className="section" spacing={3}>
         
              <Grid item xs={12} sm={12} md={12}>
                <Paper elevation={0} className="skill" >
                  <CustomTimeline data={data} title={`Work Experience`} icon={<WorkIcon/>} />
                </Paper>
              </Grid>
          
        </Grid>
     
    )
}

export default Experience
