import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link, Navigate} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './header.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { clear } from "@testing-library/user-event/dist/clear";

function Header(){
    //берем значения из полей регистрации
    const [loginReg, setLoginReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [usernameReg, setUsernameReg] = useState('')
    const [usersurnameReg, setUsersurnameReg] = useState('')
    const [mailReg, setMailReg] = useState('')

    //берем значения из поля авторизации
    const [login1, setLogin] = useState('')
    const [password, setPassword] = useState('')


    const [username, setUsername] = useState('')
    const [usersurname, setUsersurname] = useState('')
    const [mail, setMail] = useState('')


    const navigate = useNavigate();

    
    //Отправляем данные взятые с полей на серверную часть приложения
    function register () {
        if(loginReg == '' || passwordReg == '' || usernameReg == '' || usersurnameReg == '' || mailReg == ''){
            alert('Введены не все поля');
        }else{
            axios.post('http://localhost:3002/register', {login:loginReg, password:passwordReg, username:usernameReg, usersurname:usersurnameReg, mail:mailReg})
            .then((response)=>{
                console.log(response);
            })
            window.location.reload();
        }
    }
    //Отправляем полученные данные из авторизации на серверную часть
    async function login () {
        if(login1 == '' || password == ''){
            alert('Некоторые поля не заполнены');
        }else{
        axios.post('http://localhost:3002/login', {login:login1, password:password})
        .then((response)=>{//После того как проверка на стороне сервера произошла, и все совпало, создается сессия с данными которые взяли из БД
            sessionStorage.setItem("user", JSON.stringify({u_login: response.data[0].login, u_mail: response.data[0].mail, u_name: response.data[0].username, u_sur: response.data[0].usersurname, isAdmin: response.data[0].isAdmin}))
            window.location.reload();
        })
        }
    }

    return(
        <div>
            <header className="header">
                <img src='image/NT.png'/>
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/events">События</Link>
                    <Link to="/Accessories">Оборудование</Link>
                    <Link to="/Err">Моменты</Link>
                </nav>
                <div className="profile">
                    {
                        !sessionStorage.getItem('user') ? 
                        <>
                        <Popup trigger={<button className="button" id="login"> Вход </button>} modal>
                        <form className="Window">
                            <h1>Вход</h1>
                            <p className="NameInp">Логин</p>
                            <input className="TextInp" type="text" onChange={(e)=>{
                                setLogin(e.target.value);
                            }
                            }/>
                            <p className="NameInp">Пароль</p>
                            <input className="TextInp" type="password" onChange={(e)=>{
                                setPassword(e.target.value);
                            }
                            }/>
                            <input className="inputModal" value="Войти" onClick={login} type="button"/>
                        </form>
                    </Popup>
                    <Popup trigger={<button className="button" id="signup"> Регистрация </button>} modal>
                        <form className="Window">
                            <h1>Регистрация</h1>
                            <p className="NameInp">Логин</p>
                            <input className="TextInp" type="text" onChange={(e)=>{
                                setLoginReg(e.target.value);
                            }
                            }/>
                            <p className="NameInp">Пароль</p>
                            <input className="TextInp" type="password" onChange={(e)=>{
                                setPasswordReg(e.target.value);
                            }
                            }/>
                            <p className="NameInp">Имя</p>
                            <input className="TextInp" type="text" onChange={(e)=>{
                                setUsernameReg(e.target.value);
                            }
                            }/>
                            <p className="NameInp">Фамилия</p>
                            <input className="TextInp" type="text" onChange={(e)=>{
                                setUsersurnameReg(e.target.value);
                            }
                            }/>
                            <p className="NameInp">Почта</p>
                            <input className="TextInp" type="email" onChange={(e)=>{
                                setMailReg(e.target.value);
                            }
                            }/>
                            <input className="inputModal" onClick={register} value="Зарегистрироваться" type="button"/>
                        </form>
                    </Popup></> : <button type="submit" className="button" id="profile" onClick={() => {navigate("/Profile");}}> Профиль </button>
                    }
                    
                </div>
            </header>
        </div>
    )
}



export default Header;