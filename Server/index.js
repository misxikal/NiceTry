const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const fileUpload = require('express-fileupload')
app.use(fileUpload())

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "NiceTry"
})

app.post('/getStatistic', (req, res) => {
    if(req.body.func == "onLoad") {
        let sum = 0;
        db.query(
            "SELECT count(id) as items FROM VipComputers;", (err, result)=> {
    
            if(err){
                res.send({err:err})
            }
            
            if(result){
                sum += result[0].items;
                console.log(result);
            }
        })
        db.query(
            "SELECT count(id) as items FROM OrdinaryComputers;", (err, result)=> {
    
            if(err){
                res.send({err:err})
            }
            
            if(result){
                sum += result[0].items;
                res.send(JSON.stringify(sum));
                console.log(sum);
            }
        })
        
    }
})

app.post('/changeOccured', (req, res) => {
    db.query(//Идет запрос на изменение данных в БД
        `UPDATE ${req.body.table_t} SET isOccured = ${req.body.occur} WHERE id=${req.body.comp_id}`, (err, result)=> {
        if(err){
            res.send({err:err})
        }
        
        if(result){
            console.log(result);
        }
    })
    db.query(
        `INSERT INTO bookingHitsory (user_id, pc_id, pc_type)//Попутно идет записть в бд о том кто забронировал место
         VALUES ('${req.body.login_user}', ${req.body.comp_id}, '${req.body.table_t}')`,
        (err, result)=> {
            if(err) {
                console.log(err);
            } 
                console.log(result);
            
    })
})

function currDate() {
    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2);
    return date;
}

app.post('/createEvent', (req, res) => {
    //Получаем данные полученные с формы
    const title = req.body.title;
    const description = req.body.description;
    const date = currDate();
    //Добавляем их в базу данных
    db.query(
        `INSERT INTO Events (title, text, date_event)
         VALUES ('${title}', '${description}', '${date}')`,
        (err, result)=> {
            if(err) {
                console.log(err);
            } 
            console.log(result);
            
    })
})

app.post('/getEvent', (req, res) => {
    //Делаем запрос на получение данных из бд в обратном порядке для более удобного вывода на страницу
    db.query(
        "SELECT * FROM Events order by id desc;", (err, result)=> {

        if(err){
            res.send({err:err})
        }
        
        if(result){
            res.send(result);
            console.log(result);
        }
    })
    
})

app.post('/getOccuredStatus', (req, res) => {
    if(req.body.func == "onLoad") {
        let sum = 0;
        db.query(
            "SELECT count(id) as items FROM VipComputers WHERE isOccured = 1;", (err, result)=> {
    
            if(err){
                res.send({err:err})
            }
            
            if(result){
                sum += result[0].items;
                console.log(result);
            }
        })
        db.query(
            "SELECT count(id) as items FROM OrdinaryComputers WHERE isOccured = 1;", (err, result)=> {
    
            if(err){
                res.send({err:err})
            }
            
            if(result){
                sum += result[0].items;
                res.send(JSON.stringify(sum));
                console.log(sum);
            }
        })
        
    }
}) 

app.post('/getNonOccuredStatus', (req, res) => {
    if(req.body.func == "onLoad") {
        let sum = 0;
        db.query(
            "SELECT count(id) as items FROM VipComputers WHERE isOccured = 0;", (err, result)=> {
    
            if(err){
                res.send({err:err})
            }
            
            if(result){
                sum += result[0].items;
                console.log(result);
            }
        })
        db.query(
            "SELECT count(id) as items FROM OrdinaryComputers WHERE isOccured = 0;", (err, result)=> {
    
            if(err){
                res.send({err:err})
            }
            
            if(result){
                sum += result[0].items;
                res.send(JSON.stringify(sum));
                console.log(sum);
            }
        })
        
    }
}) 

app.post('/getVipComputers', (req, res) => {
    if(req.body.func == "onLoad") {
        db.query(
            "SELECT * FROM VipComputers;", (err, result)=> {
    
            if(err){
                res.send({err:err})
            }
            
            if(result){
                console.log(result);
                res.send(result)
            }
        })
    }
    
})

app.post('/getOrdComputers', (req, res) => {
    if(req.body.func == "onLoad") {
        db.query(
            "SELECT * FROM OrdinaryComputers;", (err, result)=> {

            if(err){
                res.send({err:err})
            }

            if(result){
                console.log(result);
                res.send(result)
            }
        })
    }
})

app.post('/register' , (req, res)=> {
    //Принимаем данные отправленные с клиентной части
    const login = req.body.login;
    const password = req.body.password;
    const username = req.body.username;
    const usersurname = req.body.usersurname;
    const mail = req.body.mail;
    const isAdmin = false;
    //Отправляем запрос в СУБД для того чтобы занести данные в базу данных
    db.query(
        "INSERT INTO Users (login, password, username, usersurname, mail, isAdmin) VALUES (?,?,?,?,?,?)",
        [login, password, username, usersurname, mail, isAdmin], (err, result)=> {
        console.log(err, result);
    })
})

app.post('/login', (req, res)=> {
    //Принимаем данные отправленные с клиента из поля авторизации
    const login = req.body.login;
    const password = req.body.password;

    db.query(
        //Дальше мы делаем запрос к БД для сравнивания данных полученых с клиента
        "SELECT * FROM Users WHERE login = ? AND password = ?",
        [login, password], (err, result)=> {
        //Если совпадения не были найдены то в консоль выводит ошибку, а на стороне клиента вход не происходит
        if(err){
            res.send({err:err})
        }
        //Если данные совпали то в консоль выводит ресультат
        if(result){
            console.log(result);
            res.send(result)
        }else{
            //Если совпадения не были найдены то в консоль выводит ошибку, а на стороне клиента вход не происходит
            res.send({massege: "Wrong login/password combination!"})
        }
    })
})

app.get('/hello', (req, res) => {
    res.send("hello");
})

app.listen(3002, () => {
    console.log("running server");
})