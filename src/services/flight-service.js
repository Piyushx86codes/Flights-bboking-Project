const  {FlightRepository} = require("../repositories");
const {AppError} = require("../utils/errors/app-error");
const { StatusCodes} = require("http-status-codes");
const {Op} = require("sequelize");
const flightRepository = new  FlightRepository();

async function createFlight(data){
   try {
      const flight = await flightRepository.create(data);
      return flight;
   } catch (error) {
      if(error.name =="SequelizeValidationError"){
         let explanantion = [];
         error.errors.forEach((err)=>{
            explanantion.push(err.message);
         });
         throw new AppError(explanantion,StatusCodes.BAD_REQUEST)
      }
      throw new AppError('Cannot Create a New Flight Object',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAllflights(query){
   let customFilter = {};
   let sortFilter = [];
   const endingTripTime = "23:59:00";
   //trips="MUM_DEL"
   if(query.trips){
      [departureAirportId,arrivalAirportId] = query.trips.split("-");
      customFilter.departureAirportId = departureAirportId;
      customFilter.arrivalAirportId = arrivalAirportId;
      //Todo:add a check where departure and arrival should not be same//

   }
   if(query.price){
      [minPrice,maxPrice] = query.price.split("-");
      customFilter.price ={
         [Op.between]:[minPrice,((maxPrice == undefined) ? 2000:maxPrice)]
      }
   }
   if(query.travellers){
      customFilter.totalSeats ={
         [Op.gte]:query.travellers
      }
   }
   if(query.tripDate){
      customFilter.departureTime ={
         [Op.between]:[query.tripDate,query.tripDate + endingTripTime]
      }
   }
   if(query.sort){
      const params = query.sort.split(',');
      const sortFilters = params.map((param) => param.split("_"));
      sortFilter = sortFilters;
   }
   try {
      const flights = await flightRepository.getAllflights(customFilter,sortFilter);
      return flights;
   } catch (error) {
      throw new AppError('Cannot Fetch Data of all flights',StatusCodes.INTERNAL_SERVER_ERROR);
   }

}


module.exports = {
    createFlight,
    getAllflights
}