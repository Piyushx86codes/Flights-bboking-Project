const  {AirplaneRepository} = require("../repositories");
const {AppError} = require("../utils/errors/app-error");
const { StatusCodes} = require("http-status-codes");
const airplaneRepository = new  AirplaneRepository();

async function createAirplane(data){
   try {
      const airplane = await airplaneRepository.create(data);
      return airplane;
   } catch (error) {
      if(error.name =="SequelizeValidationError"){
         let explanantion = [];
         error.errors.forEach((err)=>{
            explanantion.push(err.message);
         });
         console.log(explanantion);
         throw new AppError('Cannot Create a New airplane Object',StatusCodes.BAD_REQUEST)
      }
      throw new AppError('Cannot Create a New airplane Object',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}


async function getAirplanes(){
   try {
      const airplanes = await AirplaneRepository.getAll();
      return airplanes;
   } catch (error) {
       throw new AppError('Cannot get data of All Airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
   }
}
module.exports = {
    createAirplane,
    getAirplanes
}