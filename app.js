const express=require("express");   
const app=express(); 


const middleware1 = (req,res,next)=>{
    console.log("middleware1");
    next()
}
app.use(middleware1);

const middleware2 = (req,res,next)=>{
    console.log("middleware2")
    next()
}
app.use(middleware2);

app.get('/html',middleware1,function(req,res){
   res.send(JSON.stringify("<h1>welcome </h1>"));   
   })


app.get('/json',function(req,res){
const detail=[{name:"A",age:24}]
    res.send(JSON.stringify(detail));     
   })

app.listen(8000,()=>{
    console.log("successful");
});