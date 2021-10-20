import React from "react";
import style from "./Users.module.css";
import *as axios from "axios";
import defaultUserPhoto from "../../assets/images/images.png"
let Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })

    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small!=null?u.photos.small:defaultUserPhoto} className={style.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.id}</div>

                </span>
            </span>
            </div>)}
    </div>

}

export default Users;