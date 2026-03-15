const CrudRepository = require("./crud-repository");
const {FLight} = require("../models");

class FlightRepository extends CrudRepository{
     constructor(){
        super(FLight);
     }
     async getAllflights(filter,sort){
         const response = await FLight.findAll({
            where:filter,
            order:sort
         });
         return response;
     }
}

module.exports = FlightRepository;