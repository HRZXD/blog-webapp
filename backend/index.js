const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb+srv://adminhrz:PhtfuMrarlLHv4Qf@cluster0.ewbiuim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("mongodb connected");
    const Admin = require('./model/adminModel');
    app.post('/admin' , (req, res) => {
        const {username, password} = req.body;
        Admin.findOne({username: username, password: password})
        .then(user => {
            if(user){
                if (Admin.password === password) {
                    res.json("success")
                }else{
                    res.json("error")
                }
            }
        });
    })
    app.listen(3001, () => {
        console.log("Server listening on 3001");
    })
}).catch(() => {
    console.error;
})


