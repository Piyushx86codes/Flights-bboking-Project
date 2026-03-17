const CrudRepository = require("./crud-repository");
const {FLight, Airplane, Airport,City} = require("../models");
const {Sequelize} = require("sequelize");

class FlightRepository extends CrudRepository{
     constructor(){
        super(FLight);
     }
     async getAllflights(filter,sort){
         const response = await FLight.findAll({
            where:filter,
            order:sort,
            include:[
            {
              model:Airplane,
              required:true,
              as:"airplane_detail",
            },
            {
              model:Airport,
              required:true,
              as:"departureAirport",
              on:{
                col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"),"=",Sequelize.col("departureAirport.code"))
              },
              include:{
               model:City,
               required:true,
              }
            },
            {
              model:Airport,
              required:true,
              as:"arrivalAirport",
              on:{
                col1:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),"=",Sequelize.col("arrivalAirport.code"))
              },
              include:{
               model:City,
               required:true,
              }
            }
         ]
         });
         return response;
     }
}

module.exports = FlightRepository;