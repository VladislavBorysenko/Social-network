import style from "./Users.module.css";
import defaultUserPhoto from "../../assets/images/images.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (<div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}> {p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : defaultUserPhoto} className={style.userPhoto}/>
                        </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                            props.toggleFollowingInProgress(true, <u className="id"></u>);
                            usersAPI.follow(u.id)
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingInProgress(false, u.id);
                                });


                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                            props.toggleFollowingInProgress(true, u.id);
                            usersAPI.unfollow(u.id)
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingInProgress(false, u.id)
                                });
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
    )
}

export default Users;