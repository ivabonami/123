const express = require('express')
const bodyParser =  require("body-parser");
const mysql = require('mysql2');
const cors = require('cors')
const fs = require("fs");
const fileUpload = require('express-fileupload');

const connection =  mysql.createPool({
    connectionLimit: 5,
    host: "kvnorfcr.beget.tech",
    user: "kvnorfcr_123",
    database: "kvnorfcr_123",
    password: "665566aA",
    waitForConnections: true,
    connectTimeout: 15000,
    rowsAsArray: false,
    enableKeepAlive: true,
});

const app = express();
app.use(cors())
app.use(fileUpload())
app.use(bodyParser.json({limit: '10mb'}))
app.use(express.static('public'));
// парсит запросы по типу: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb'}));

app.post('/upload', (req, res) => {
    const path = '/uploads/' + req.files['image-upload'].name
    fs.writeFile(__dirname + path, req.files['image-upload'].data, () => {
        res.send({'filePath': path})
    });


});

app.post('/addVacancies', function (req, res) {
    const vacancy = req.body.data
    console.log(req.body.data.vacancyImage);

    connection.query("INSERT INTO `vacancies`(`name`, `price`, `button`, `whatToDo`, `whatToDoType`, `weAwait`, `weAwaitType`, `image`) VALUES " +
        `('${vacancy.name}','${vacancy.price}','${vacancy.button}',
        '${vacancy.whatToDo}','${vacancy.whatToDoType}','${vacancy.weAwait}','${vacancy.weAwaitType}','${vacancy.vacancyImage}')`,
        function (err, rows, fields) {
            if (err) res.send(err)
            res.send(rows)
        })
})

app.delete('/deleteVacancy', function (req, res) {
    console.log(req.body)

    connection.query(`DELETE FROM \`vacancies\` WHERE \`name\` = '${req.body.name}' AND \`price\` = '${req.body.price}' AND \`whatToDo\` = '${req.body.whatToDo}'`,
        function (err, rows, fields) {
            if (err) res.send(err)
            res.send(rows)
        })
})

app.get('/getVacancies', function (req, res) {


    const rows = connection.query("SELECT * FROM `vacancies` WHERE 1", (err, rows, fields) => {
        if (err) res.send(err)
        res.send(rows)
    })

})

// установить порт, и слушать запросы
app.listen(3001, () => {
    console.log("Сервер запущен на 3001 порту");
});