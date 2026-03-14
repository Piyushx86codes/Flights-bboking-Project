const {StatusCodes} = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = "Something Went Wrong while creating the airport",
        ErrorResponse.error = new AppError(["Name Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = "Something Went Wrong while creating the airport",
        ErrorResponse.error = new AppError(["Airport Code Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.cityId){
        ErrorResponse.message = "Something Went Wrong while creating the airport",
        ErrorResponse.error = new AppError([" Airport CityId Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports ={
    validateCreateRequest
}