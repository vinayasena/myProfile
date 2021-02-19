import { Container, Grid, Typography,Paper } from "@material-ui/core";
import React from "react";
import Skills from "./Skills";
import "./about.css";
import Experience from "./Experience";
import Portfolio from './../Portfolio/Portfolio';

export function SectionTitle({ sectionTitle }) {
  return (
    <Grid item className="section_title" xs={12}>
      <Typography variant="h4">{sectionTitle}</Typography>
      <span className="underline"></span>
    </Grid>
  );
}

function About({ data }) {
  console.log(data);
  return (
    <Container>
      <Grid container className="section">
        <SectionTitle sectionTitle={`About me`} />
        <Grid item xs={12} className="aboutme">
          <Paper elevation={0} className='about'>
            {
              data.aboutme.map((para,index)=>{
                  return <Typography variant="body1" className="aboutme_text" key={index}>
                  {para}
                 </Typography>
              })
            }
            <br/>
          <quote><i> "You can never understand everything, But, you should push yourself to understand the system" -- Ryan Dahl, Nodejs creator </i></quote>
          </Paper>
        </Grid>
      </Grid>

      <Grid container className="section">
        <SectionTitle sectionTitle={`Skills`} />
        <Skills data={data.skills} />
      </Grid>

      <Grid container className="section">
        <SectionTitle sectionTitle={`Experience`} />
        <Experience data={data.experience} />
      </Grid>
      <Grid container className="section">
        <SectionTitle sectionTitle={`My showcase`} />
        <Portfolio data={data.projects} />
      </Grid>
      {/* <Grid conatiner className="section">
        <SectionTitle sectionTitle={`Education`} />
        <Container>
        {data.education.map((edu, index) => {
          return (
            <Grid container className="section" spacing={3}>
                <Grid item xs={12} sm={12} md={12}>
                  <Paper elevation={0} className="education">
                  <Typography variant='h5'>{edu.course}</Typography>
                  <Typography >{edu.college}</Typography>
                  </Paper>
                </Grid>
              </Grid>
          );
        })}
        </Container>
      </Grid> */}
    </Container>
  );
}

export default About;
