const express = require("express");
const mongoose = require("mongoose");
const CarController = require("./controllers/CarController");


const aplication =  express();

aplication.get("/car",CarController.getOne)

mongoose.connect("mongodb+srv://admin:admin@cluster0.fpgcudm.mongodb.net/car?retryWrites=true&w=majority")

aplication.get("/cars",CarController.getAll)

aplication.listen(3000,()=>console.log("running"))