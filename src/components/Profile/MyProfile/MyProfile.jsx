import React from 'react';
import styles from './MyProfile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';

const MyProfile = (props) => {
    if (!props.profile.photos) {
        return <Preloader/>
    }

    const onSelectedPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={styles.content}>
            <div class='row'>
                <div class='col-6' className={styles.avatar}>
                    <img src={!props.profile.photos.large ? userPhoto : props.profile.photos.large}/>
                    {props.isOwner &&
                    <div className={styles.button}>
                        <label class="btn form-control">
                            Сменить фото <input  name='file' type="file" onChange={onSelectedPhoto} hidden/>
                        </label>
                    </div>
                    }
                </div>
                <div class='col-6' className={styles.profile}>
                    <p className={styles.name}>{props.profile.fullName}</p>
                    <ProfileStatusWithHooks {...props} status={props.status} updateStatus={props.updateStatus}/>
                    <ProfileData {...props}/>
                </div>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
        <div><b>About me</b>:</div>
        <div><b>lookingForAJob</b>:</div>
        <div><b>lookingForAJobDescription</b>:</div>
        <div><b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            }
        )}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default MyProfile;