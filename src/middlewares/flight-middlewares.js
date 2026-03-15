const {StatusCodes} = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message = "Something Went Wrong while creating the Flight",
        ErrorResponse.error = new AppError(["Flight Number Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = "Something Went Wrong while creating the Flight",
        ErrorResponse.error = new AppError(["Airplane ID Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = "Something Went Wrong while creating the Flight",
        ErrorResponse.error = new AppError(["Departure Airport Id Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = "Something Went Wrong while creating the Flight",
        ErrorResponse.error = new AppError(["Arrival Airport Id Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivaltime){
        ErrorResponse.message = "Something Went Wrong while creating the Flight",
        ErrorResponse.error = new AppError([" Arrival Time Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departuretime){
        ErrorResponse.message = "Something Went Wrong while creating the Flight",
        ErrorResponse.error = new AppError(["Departure Time Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureId){
        ErrorResponse.message = "Something Went Wrong while creating the Flight",
        ErrorResponse.error = new AppError([" departureId Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message = "Something Went Wrong while creating the Flight",
        ErrorResponse.error = new AppError(["price Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = "Something Went Wrong while creating the Flight",
        ErrorResponse.error = new AppError(["totalSeats Not Found in the incoming Request in the correct Form"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports ={
    validateCreateRequest
}