import { useState } from "react";
import "./events.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import FormData from 'form-data'
import Footer from "./footer";

function Events(){
    //Собираем данные с формы написания поста
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');

    function addEvent() {
        console.log(title);
        console.log(description);

        let data = new FormData();
        data.append('title', title);
        data.append('description', description);
        axios.post('http://localhost:3002/createEvent', data, {//Отправляем данные написанного поста на серверную часть приложения
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
        })
        window.location.reload();
    }

    function getEvents() {//Получаем данные с сервера и заносим их в сессию
        axios.post('http://localhost:3002/getEvent')
        .then(response => {
            console.log(response);
            sessionStorage.setItem('events', JSON.stringify(response.data));
        });
    }
    function ReloadWin(){
        window.location.reload();
    }

    getEvents();

    return(
    <div className="eventsPage">
        <h1>Главные события клуба</h1>
        <div className="articles">
            {
                !(sessionStorage.getItem('user')) ?//В этом фрагменте мы проверяем является ли пользователь админом
                <></>:                             //И если является то выводится кнопка добавления поста
                JSON.parse(sessionStorage.getItem('user')).isAdmin == 1 ?
                    
                    <>
                    <div onClick={addEvent} className="addArticle">
                    <Popup trigger={<button className="button" onClick={ReloadWin} id="signup"> + </button>} modal>
                            <form className="Window" enctype="multipart/form-data">
                                <h1>Новое событие</h1>
                                <input onInput={(e) =>  setTitle(e.target.value)} type="text" name="title" className="eventTitle"/>
                                <textarea onInput={(e) => setDesc(e.target.value)} cols="60" rows="10" className="eventDesc"></textarea>
                                <input className="inputModal" onClick={addEvent} value="Добавить" type="button"/>
                            </form>
                        </Popup>
                    </div>
                    </>
                
                :<></>
            }
            {
                //Вывод поста полученного с БД
                JSON.parse(sessionStorage.getItem('events')).map(item => {
                    return (
                        <div className="article">
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                            <p>{item.date_event}</p>
                        </div>
                    )
                })
            }
            
            
            
        </div>
        <Footer/>
    </div>
    )
}

export default Events