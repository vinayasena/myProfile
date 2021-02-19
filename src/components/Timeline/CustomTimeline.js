import React from "react";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

import "./timeline.css";

function CustomTimeline({ data, icon, title }) {

  return (
    <Timeline className="timeline">
      {/*  item header*/}
      <TimelineItem className="timeline_firstitem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* remaining items */}
      {data.map((item, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineSeparator className="separator_padding">
                <TimelineDot className="timeline_dot" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timeline_content">
                { 
                title !== "Work Experience" && 
                <>
                    <span className='data_name'>{item.name?`${item.name}:`:''}</span>
                    <span className='data_value'>{item.value?item.value:item}</span>
                </>
                }
                {
                title === "Work Experience" && 
                <>
                  <Typography className='job_heading' >
                    {item.designation} - {item.company}
                  </Typography>

                  <Typography className='job_date'>
                    {item.date}
                  </Typography>

                  <Typography className='job_description'>
                    {item.description}
                  </Typography>
                </>

                }
                
              </TimelineContent>
            </TimelineItem>
          );
        })}
     
    </Timeline>
  );
}

export default CustomTimeline;



