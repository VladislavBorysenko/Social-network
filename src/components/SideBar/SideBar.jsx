import {NavLink} from "react-router-dom";
import c from '../Dialogs/Dialogs.module.css';
import classes from '../Navbar/Navbar.module.css';


const SideBar = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to='/friends' activeClassName={classes.activeLink}> Friends</NavLink>
            <div className={c.dialog}>
                <p><img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuXVl1Pew5GJfXuoPEsLmSA-5fG-CerC-SA&usqp=CAU'/>

                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuXVl1Pew5GJfXuoPEsLmSA-5fG-CerC-SA&usqp=CAU'/>

                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuXVl1Pew5GJfXuoPEsLmSA-5fG-CerC-SA&usqp=CAU'/>
                </p>
            </div>

        </div>
    )
}

export default SideBar;