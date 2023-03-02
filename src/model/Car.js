const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({

    name: String,
    model: String,
    brand: String,
    plc: String,
    age: Number,
    km: Number,
    compra: Number,
    venda: Number,


},{

    timestamps: true
})

module.exports = mongoose.model("Car", CarSchema) 