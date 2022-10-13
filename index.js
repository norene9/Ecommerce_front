const express= require('express')
const app=express()
const PORT=8080;
app.get('/tshirt',(req,res)=>{
    res.status(200).send({
        tshirt:'shirt',
        size:'XL'
    })
})
app.listen(8080,()=>{
    console.log('running')
})