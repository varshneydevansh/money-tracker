//initializing the express app so that we can communicate with backend and frontend
const init_express = require('express');
const cors = require('cors')
require('dotenv').config();
const Transaction = require('./models/transaction.js');
const { default: mongoose } = require('mongoose');


const creating_express_app = init_express();

creating_express_app.use(cors());
creating_express_app.use(init_express.json());

//setting up the get api to get the data from the backend

creating_express_app.get('/api/test', (req, res) => {
    res.json('test OkAy jitni');
});

//creating the post api for posting a new transaction into the backend in req.bod we are getting all  the data 
//sent from App.js form

creating_express_app.post('/api/transaction', async (req, res) => {

    await mongoose.connect(process.env.MONGO_URL);
    const { name, description, datetime } = req.body;
    //now putting the information grabbed from the req.body and putting inside the transaction model
    const transaction = await Transaction.create({ name, description, datetime });

    res.json(transaction);
});




creating_express_app.listen(4040);