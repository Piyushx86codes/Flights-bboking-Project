const  {CityRepository} = require("../repositories");
const {AppError} = require("../utils/errors/app-error");
const { StatusCodes} = require("http-status-codes");
const cityRepository = new  CityRepository();


async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (error.name == "SequelizeValidationError" || "SequelizeuniqueConstraintError") {
      let explanantion = [];
      error.errors.forEach((err) => {
        explanantion.push(err.message);
      });
      console.log(explanantion);
      throw new AppError(explanantion,StatusCodes.BAD_REQUEST);
    }
    throw new AppError("Cannot Create a New City Object",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports ={
   createCity,
}