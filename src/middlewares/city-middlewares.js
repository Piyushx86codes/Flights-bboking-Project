const {StatusCodes} = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = "Something Went Wrong while creating the city",
        ErrorResponse.error = new AppError(["City Name Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports ={
    validateCreateRequest
}