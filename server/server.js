const express = require("express");
let bodyParser = require('body-parser');
const app = express(); // create express app
const path = require("path");
const DBWorker = require("./DBWorker");

// add middleware
console.log(`__dirname:${__dirname}`);
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

let dbw = new DBWorker();
let items = [];
app.get('/insurance', (req, res) => {
    items = dbw.getItems((items) => res.send(JSON.stringify(items)));
    console.log('get insurances', items);
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

// start express server on port 3000
app.listen(3000, () => {
    console.log("server started on port 3000");
});