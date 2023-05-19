import "./booking.css"
import axios from 'axios';
function Booking(){
    loadData();
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

    loadData();

    function chunkArray(array, chunk) {//Функция деления массива на chank частей
            const newArray = [];
            for (let i = 0; i < array.length; i += chunk) {
              newArray.push(array.slice(i, i + chunk));
            }
            return newArray;
      }

      function selectPlace(e) {
        let occurStatus = false;
        let tableType = '';
        let pc_id = 0;
        if(e.target.classList.contains("place_item")) {//При нажатии на ячейку идет проверка на класс у ячейки
            if(e.target.classList.contains("isNotOccured")) {//Если класс isNotOccured то класс заменяется на isOccured
                e.target.classList.remove('isNotOccured');
                e.target.classList.add('isOccured');//Тем самым изменяя стили
                occurStatus = true;
            }
            
            if(e.target.classList.contains("vip")) {
                tableType = "VipComputers";
            } else {
                tableType = "OrdinaryComputers";
            }
            pc_id = e.target.id;
            console.log(tableType + ": " + pc_id + " - " + occurStatus);//идет запрос на изменение данных в БД
            axios.post('http://localhost:3002/changeOccured', {comp_id: pc_id,occur: occurStatus, table_t: tableType, login_user: JSON.parse(sessionStorage.getItem("user")).u_login})
            window.location.reload();
        }
        //window.location.reload();
        loadData();
        console.log({comp_id: pc_id,occur: occurStatus, table_t: tableType, login_user: console.log(JSON.parse(sessionStorage.getItem("user")).u_login)});
      }

    return(
        <div className="bookingPage">
            <div className="bookingBox">
                <div className="bookingInfo">
                    <h1>Бронирование</h1>
                    <p>Всего мест {JSON.parse(sessionStorage.getItem("stat"))}</p>
                    <p>Свободных мест {JSON.parse(sessionStorage.getItem("isNonOcc"))}</p>
                    <p>Занятых мест {JSON.parse(sessionStorage.getItem("isOcc"))}</p>
                </div>
                <div className="bookingInfo">
                    <p>Бронирование действует только 2 часа!!!</p>
                </div>
                
                <div onClick={selectPlace} className="comp-map">
                    <div className="computers vip-type">
                        <h1>Vip PC</h1>
                        {
                            <table>
                                {chunkArray(JSON.parse(sessionStorage.getItem("vip")), 3).map(elem => {//Здесь выводятся ячейки таблицы поделенные с помощью функции chankArray
                                    return (
                                        <tr>
                                            {elem.map(row => {
                                                return <td key={row.id} id={row.id} className={row.isOccured ? "vip isOccured place_item" : "vip isNotOccured place_item"}>{row.id}</td>
                                            })}
                                        </tr>
                                    )
                                    
                                })}
                            </table>
                        }
                    </div>
                    <div className="computers ord-type">
                    <h1>PC</h1>
                        {
                                <table>
                                    {chunkArray(JSON.parse(sessionStorage.getItem("ord")), 3).map(elem => {
                                        return (
                                            <tr>
                                                {elem.map(row => {
                                                    return <td key={row.id} id={row.id} className={row.isOccured ? "ord isOccured place_item" : "ord isNotOccured place_item"}>{row.id}</td>
                                                })}
                                            </tr>
                                        )
                                            
                                    })}
                                 </table>
                            }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Booking