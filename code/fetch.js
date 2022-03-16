var express = require('express');
var bodyparser = require('body-parser');

let mongodb = require("mongodb");
const Db = require('mongodb/lib/db');
let talentsprint = mongodb.MongoClient;

let fetch = express.Router().get("/",(req,res)=>{
    talentsprint.connect("mongodb://localhost:27017/project",(err,db)=>{
        if(err){
            throw err;
    
        }
        else{
            db.collection("register").find({}).toArray((err,array)=>{
                if(err){
                    throw err;

                }
                else{
                    if(array.length >0){
                        res.send(array);
                    }else{
                        res.send({message:"Record Not Found..."});
                    }
                }
            });
        }

    });
    
});
module.exports = fetch;