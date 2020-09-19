import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyProfile from "./MyProfile/MyProfile";


const Profile = (props) => {

    return (
        <div>
            <MyProfile {...props} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;