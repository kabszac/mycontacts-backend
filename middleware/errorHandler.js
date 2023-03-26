const constants = require('../costants')  

const errorHandler = (err, req, res, next, ) => {
    const statusCode = res.statusCode? res.statusCode : 500
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"All fields are required", 
                message:err.message, 
                error: statusCode, 
                stackTrace: err.stack
            })
        case constants.NOT_FOUND:
            res.json({
                title:"Endpoint not found", 
                message:err.message, 
                error: statusCode, 
                stackTrace: err.stack
            })
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized", 
                message:err.message, 
                error: statusCode, 
                stackTrace: err.stack
            })
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden", 
                message:err.message, 
                error: statusCode, 
                stackTrace: err.stack
            })
        case constants.INTERNAL_SERVER_ERROR:
            res.json({
                title:"Internal Server error", 
                message:err.message, 
                error: statusCode, 
                stackTrace: err.stack
            })
        default:
            console.log("No error Found")

    }

}

module.exports = errorHandler