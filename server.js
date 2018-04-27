"use strict";
//引入express
const express=require("express");
var app=express();
//路由请求
app.get("/",function(req,res){
    res.send("Hello World");
});

//监听端口
app.listen("8080",function(err){
    if(err) throw err;
    console.log("服务器启动成功");

});