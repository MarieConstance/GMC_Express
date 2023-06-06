const express = require('express');
const mongoose = require('mongoose')
const app = express()

//routes

app.get('/',(req,res)=>{
    res.send('Hello NODE API')
})

app.get('/blog',(req,res)=>{
    res.send('Hello Blog, My name is DevMarie')
})

app.listen(3000, ()=>{
    console.log(`Node API app is running on port 3000`);
})

mongoose.connect('mongodb+srv://marie:HYomOeFnLhtO9vyu@cluster0.ueg1rii.mongodb.net/')

.then(()=> {
    app.listen(3000, ()=>{
        console.log(`Node API app is running on port 3000`);
    })
    console.log('connected to mongoDB');
})

.catch((error)=> {
    console.log(error);
})

// HYomOeFnLhtO9vyu
// mongodb+srv://marie:HYomOeFnLhtO9vyu@cluster0.ueg1rii.mongodb.net/