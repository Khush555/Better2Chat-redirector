const express=require('express');
const dotenv=require('dotenv');
dotenv.config()
const app=express();
const URL=process.env.URL;

app.get('/',(req,res)=>{
    res.redirect(URL);
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})