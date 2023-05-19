import React, { useRef } from 'react';
import "./phisha.css";
import './information';
import Footer from "./footer";
import Popup from 'reactjs-popup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Afisha(){

    async function loadData() {

        await axios.post("http://localhost:3002/getVipComputers", {func: "onLoad"})
        .then((response)=>{
            //console.log(response.data);
            sessionStorage.setItem("vip", JSON.stringify(response.data))//Обновление данных на стороне клиента о количестве забронированных мест
        })

        await axios.post("http://localhost:3002/getOrdComputers", {func: "onLoad"})
        .then((response)=>{
            //console.log(response.data);
            sessionStorage.setItem("ord", JSON.stringify(response.data))//Обновление данных на стороне клиента о количестве забронированных мест
        });

        await axios.post("http://localhost:3002/getStatistic", {func: "onLoad"})
        .then((response)=>{
            //console.log(response.data);
            sessionStorage.setItem("stat", JSON.stringify(response.data))
        });

        await axios.post("http://localhost:3002/getOccuredStatus", {func: "onLoad"})
        .then((response)=>{
            //console.log(response.data);
            sessionStorage.setItem("isOcc", JSON.stringify(response.data))
        });

        await axios.post("http://localhost:3002/getNonOccuredStatus", {func: "onLoad"})
        .then((response)=>{
            //console.log(response.data);
            sessionStorage.setItem("isNonOcc", JSON.stringify(response.data))
        });
        
    }

    function getEvents() {//Получаем данные с сервера и заносим их в сессию
        axios.post('http://localhost:3002/getEvent')
        .then(response => {
            console.log(response);
            sessionStorage.setItem('events', JSON.stringify(response.data));
        });
    }

    getEvents();

    loadData();

    const navigate = useNavigate();
    const ref = useRef();

    function Booking(){
        !sessionStorage.getItem('user') ?
        alert('Вы не вошли в аккаунт!'):
        navigate("/booking");
    }


    return(
        <div className="Afisha">
            <content className="Afisha-content">
                <h1>Приходи к нам и играй на лучшем железе!</h1>
                <p className='clubCharacteristics'>
                <div className='priseZaman'>
                    <img src='image/free-icon-24-hours-3293477.png'/>
                    <p>Работаем круглосуточно</p>
                </div>
                <div className='priseZaman'>
                    <img src='image/free-icon-headset-3293678.png'/>
                    <p>Полное погружение</p>
                </div>
                <div className='priseZaman'>
                    <img src='image/free-icon-graphics-card-5658549.png'/>
                    <p>Лучшее железо</p>
                </div>
                <div className='priseZaman'>
                    <img src='image/game-control.png'/>
                    <p>Современные игры</p>
                </div>
                </p>
                <p className='ErrorLogout'>
                            <button type="button" onClick={Booking} className="submit">
                                Забронировать
                            </button>
                </p>
            </content>
            <div className='Info'>
                <h1>О нашем клубе</h1>
                    <p>
                    Мы новая сеть компьютерных клубов но уже имеем хорошую репутацию, 
                    у нас вы найдете приятную атмосферу, хорошее отношение к геймерам и много всего. 
                    Здесь вы можете найти новых тиммейтов а так же друзей с которыми вы в будущем можете собрать свою команду для участия в турнирах.
                    Мы новички на этом рынке и надеемся на вашу поддержку.
                    </p>
            </div>
            <div className="Galeri">
                <h1>Галарея</h1>
                <div className="photo">
                    <img src="image/XXL.webp"/>
                    <img src="image/XxXL.webp"/>
                    <img src="image/IMG_1470_3_.jpg"/>
                    <img src="image/1639787290_289-catherineasquithgallery-com-p-rozovii-fon-dlya-klaviaturi-410.jpg"/>
                </div>
            </div>
            <div className="priseList">
                <h1>Цены в клубе</h1>
                <h2>PC</h2>
                <table>
                    <tr>
                        <th>Пакет</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>1 час</td>
                        <td>80 руб.</td>
                    </tr>
                    <tr>
                        <td>3 часа</td>
                        <td>200 руб.</td>
                    </tr>
                    <tr>
                        <td>5 часов</td>
                        <td>340 руб.</td>
                    </tr>
                    <tr>
                        <td>Ночной пакет(22:00 - 08:00)</td>
                        <td>430 руб.</td>
                    </tr>
                    <tr>
                        <td>Дневной пакет(10:00 - 20:00)</td>
                        <td>450 руб.</td>
                    </tr>
                    <tr>
                        <td>Выживание(36 часов)</td>
                        <td>1000 руб.</td>
                    </tr>
                </table>

                <h2>Vip</h2>
                <table>
                    <tr>
                        <th>Пакет</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>1 час</td>
                        <td>100 руб.</td>
                    </tr>
                    <tr>
                        <td>3 часа</td>
                        <td>250 руб.</td>
                    </tr>
                    <tr>
                        <td>5 часов</td>
                        <td>440 руб.</td>
                    </tr>
                    <tr>
                        <td>Ночной пакет(22:00 - 08:00)</td>
                        <td>550 руб.</td>
                    </tr>
                    <tr>
                        <td>Дневной пакет(10:00 - 20:00)</td>
                        <td>560 руб.</td>
                    </tr>
                    <tr>
                        <td>Выживание(36 часов)</td>
                        <td>1000 руб.</td>
                    </tr>
                </table>
            </div>

            <div className="geolocation">
                <h1>Наше местоположение</h1>
                <div className="map-adr">
                    <div>
                        <div>
                            <div>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A63f199621ba144ddcae9238ea232cf99dfa7376bb68e4e7a5be45f465f7b5952&amp;source=constructor"
                        width="100%" height="700" frameborder="0">
                            
                        </iframe></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Afisha;