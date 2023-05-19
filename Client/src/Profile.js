import React from "react";
import ReactDOM from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";



function Profile(){

    const user_data = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate();
    function Exit(){
        sessionStorage.removeItem('user');
        navigate("/");
    }

    return(
        <div className="profilePage">
            <div className="profileBar">
                <h1>Профиль</h1>
                <p>
                    Логин:{user_data.u_login}
                </p>
                <p>
                    Имя:{user_data.u_name + " " + user_data.u_sur}
                </p>
                <p>
                    Почта:{user_data.u_mail}
                </p>
                <input type="button" onClick={Exit} value={"Выйти"}/>
            </div>
        </div>   
    )
}

export default Profile;