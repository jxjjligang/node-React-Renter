const express = require("express");
let bodyParser = require('body-parser');
const app = express(); // create express app
const path = require("path");
const DBWorker = require("./serverSide/DBWorker");

// add middleware
console.log(`__dirname:${__dirname}`);
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let dbw = new DBWorker();
app.get('/insurance', (req, res) => {
    dbw.getItems((items) => res.send(JSON.stringify(items)));
})

app.post('/insurance', async (req, res) => {
    try {
        dbw.saveOrUpdate(req.body, items => res.send(JSON.stringify(items)));
        // res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
        return console.error(err);
    } finally {
        console.log('finally');
    }
})

app.delete('/insurance/item/:itemId', async (req, res) => {
    console.log(req.params.itemId);
    dbw.deleteItem(req.params.itemId);

    let items = await dbw.getItems();
    res.send(JSON.stringify(items));
});

const Summaries = ["Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"], SUMMERY_LEN = Summaries.length;
app.get('/WeatherForecast', (req, res) => {
    let now = new Date(), wfcs = [];
    for (let i = 0; i < 5; i++) {
        let forecast = { date: getYearMonthDay(incrementDays(now, 1)) };
        forecast.temperatureC = Math.round(-20 + 75 * Math.random());
        forecast.temperatureF = 32 + Math.round(forecast.temperatureC / 0.5556);
        forecast.summary = Summaries[Math.floor(SUMMERY_LEN * Math.random())];
        wfcs.push(forecast);
    }

    res.send(JSON.stringify(wfcs));
})

function incrementDays(dateObj, days) {
    dateObj.setDate(dateObj.getDate() + days);
    return dateObj;
}

function getYearMonthDay(dateObj) {
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    return `${year}/${month}/${day}`;
}



// start express server on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log("server started on port 3000");
});

