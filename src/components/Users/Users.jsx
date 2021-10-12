import React from "react";
import style from "./Users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://drawinghowtos.com/wp-content/uploads/2020/02/bear-face-colored.jpg',
                    followed: true,
                    fullName: 'Ivan',
                    status: 'I am a boss',
                    location: {country: 'Ukraine', city: 'Kiev'}
                },
                {
                    id: 2,
                    photoUrl: 'https://drawinghowtos.com/wp-content/uploads/2020/02/bear-face-colored.jpg',
                    followed: false,
                    fullName: 'Vlad',
                    status: 'Hi',
                    location: {country: 'America', city: 'Los-Angeles'}
                },
                {
                    id: 3,
                    photoUrl: 'https://drawinghowtos.com/wp-content/uploads/2020/02/bear-face-colored.jpg',
                    followed: false,
                    fullName: 'Maya',
                    status: 'test',
                    location: {country: 'Beloruse', city: 'Minsk'}
                },
                {
                    id: 4,
                    photoUrl: 'https://drawinghowtos.com/wp-content/uploads/2020/02/bear-face-colored.jpg',
                    followed: true,
                    fullName: 'Andrey',
                    status: 'Hello world',
                    location: {country: 'Ukraine', city: 'Kharkiv'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={style.userPhoto}/>
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
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)}
    </div>

}

export default Users;