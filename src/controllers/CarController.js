
const Car = require('../model/Car')


module.exports = {


    getOne: async (req,resp) => {
     const car = await Car.findOne({plc:""});
     return resp.send(car)


    },

    getAll:async (req,resp) => {
    const cars = await Car.find();
    return resp.send(cars)

       }


}