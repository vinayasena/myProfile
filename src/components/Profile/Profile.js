
import React from "react";
import { Button, Typography } from "@material-ui/core";
import profileImage from "../../assets/images/programming1.png";
import CustomTimeline from '../Timeline/CustomTimeline'
import "./Profile.css";
import FaceIcon from '@material-ui/icons/Face';
import GitHubIcon from '@material-ui/icons/GitHub';
const Profile = ({data}) => {
 
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{data.userInfo[0].value}</Typography>
        <Typography className="title">{data.userInfo[1].value}</Typography>
      </div> 
      <figure className="profile_image">
        <img src={profileImage} alt="profile" className="" />
      </figure>
      <div className="profile_information">
      <CustomTimeline data={data.userInfo} title="" icon={<FaceIcon/>}/>
      <div className='btn_container'>
      <Button className='site_btn' style={{display:'none'}}> Download Resume </Button>
      <a href='https://github.com/vinayasena' target='_blank' rel="noreferrer"  style={{display:'flex'}}>
          <GitHubIcon style={{marginRight:'5px'}}/> (https://github.com/vinayasena)
      </a>
      </div>
      </div>
    </div>
  );
};

export default Profile;
