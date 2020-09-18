import React from 'react';
import classes from './MyProfile.module.css';
import ProfileStatus from './ProfileStatus';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';

const MyProfile = (props) => {
  if (!props.profile.photos) {
    return <Preloader/>
  }

  return (
    <div className={classes.content}>
      <div className={classes.phone}></div>
      <div>
        <div className={classes.avatar}>
          <img src={!props.profile.photos.large && userPhoto}/>
        </div>
        <div className={classes.profile}>
          <p className={classes.name}>{props.profile.fullName}</p>
          < ProfileStatusWithHooks {...props} status={props.status} updateStatus={props.updateStatus}/>
          <p>About Me: {props.profile.aboutMe}</p>
          <p >Facebook: <a href='https://ru-ru.facebook.com/'>{props.profile.contacts.facebook}</a></p>
        </div>
      </div>
    </div>
  )
}

export default MyProfile;