import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (<div>
            <div>
                <img
                    src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;