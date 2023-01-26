

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();
require('dotenv/config');
app.use(express.static(path.join(__dirname,"../view")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'view', 'index.html'));
})

app.post('/forecast', async (req, res) => {
    try{
        const response = await axios("http://api.weatherapi.com/v1"+"/forecast.json?"+process.env.API_KEY+" &q="+req.body.location+"&days=8"+"&aqi=no&alerts=no")
        res.send(response.data);
    } catch(error){
        console.log(error);
    }

})

app.post('/current', async (req, res) => {
    try{
        const response = await axios("http://api.weatherapi.com/v1/current.json?"+process.env.API_KEY+"&q="+req.body.loc+"&aqi=no")
        res.send(response.data);
    } catch(error){
        console.log(error)
    }
})

app.post('/autocomp', async (req, res) => {
    try{
        const response = await axios("http://api.weatherapi.com/v1/search.json?"+process.env.API_KEY+"&q="+req.body.loc)
        res.send(response.data);
    } catch(error){
        console.log(error)
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
})

