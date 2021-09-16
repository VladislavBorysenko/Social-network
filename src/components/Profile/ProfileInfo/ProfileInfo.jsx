import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (<div>
            <div>
                <img
                    src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;