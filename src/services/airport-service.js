const  {AirportRepository} = require("../repositories");
const {AppError} = require("../utils/errors/app-error");
const { StatusCodes} = require("http-status-codes");
const airportRepository = new  AirportRepository();

async function createAirport(data){
   try {
      const airport = await airportRepository.create(data);
      return airport;
   } catch (error) {
      if(error.name =="SequelizeValidationError"){
         let explanantion = [];
         error.errors.forEach((err)=>{
            explanantion.push(err.message);
         });
         console.log(explanantion);
         throw new AppError('Cannot Create a New airport Object',StatusCodes.BAD_REQUEST)
      }
      throw new AppError('Cannot Create a New airport Object',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}


async function getAirports(){
   try {
      const airports = await airportRepository.getAll();
      return airports;
   } catch (error) {
       throw new AppError('Cannot get data of All Airports',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}


async function getAirport(id) {
  try {
      const airport = await airportRepository.get(id);
      return airport;
   } catch (error) {
       if(error.statusCode == StatusCodes.NOT_FOUND){
         throw new AppError("the airport You requested is not Present",error.statusCode);
       }
       throw new AppError('Cannot get data of All Airport',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}


async function destroyAirport(id){
    try {
      const response = await airportRepository.destroy(id);
      return response;
   } catch (error) {
       if(error.statusCode == StatusCodes.NOT_FOUND){
         throw new AppError("the airport You requested  to delete is not Present",error.statusCode);
       }
       throw new AppError('Cannot destroy Airport',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}



module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}