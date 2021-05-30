const express = require('express');
const cors = require('cors')
// const cookieParser = require('cookie-parser');

const model = require("./model.js").default;

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());
// app.use(cookieParser());

app.get('/catagory', (req, res) => {
    let catagory = req.query.catagory;
    let data = model.findByData("catagory", catagory);
    res.json(data);
    res.end();
})

app.get('/shopname', (req, res) => {
    let shopname = req.query.shopname;
    let data = model.findByData("name", shopname);
    res.json(data);
    res.end();
})

app.get('/pincode', (req, res) => {
    let pincode = req.query.pincode;
    let data = model.findByData("pincode", pincode);
    res.json(data);
    res.end();
})

// feature pending
// app.get('/items', (req, res) => {
//     let item = req.query.item;
//     let data = model.findByData("items", items);
//     res.json(data);
//     res.end();
// })

app.get("*", (req, res) => {
    res.status(404).send("404");
    res.end();  
});


app.listen(5000, () => console.log("5000..."));