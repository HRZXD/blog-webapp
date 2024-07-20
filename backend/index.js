const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

const Admin = require('./model/adminModel')

mongoose.connect('mongodb+srv://adminhrz:PhtfuMrarlLHv4Qf@cluster0.ewbiuim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("mongodb connected");
}).catch(() => {
    console.error;
})
app.post('/admin' , async (req, res) => {
    const {username, password} = req.body;
    try{
        await Admin.findOne({username: username, password: password})
        .then(admin => {
            if (admin){
                if(admin.password === password){
                    res.send("success")
                }else{
                    res.status(500).send("Error occurred while inserting booking.");
                }
            }
            console.log(admin);
        })
    }catch(err){
        console.error(err);
        res.status(500).send("Error occurred while inserting booking.");
    }
})
app.listen(3001, () => {
    console.log("Server listening on 3001");
})



