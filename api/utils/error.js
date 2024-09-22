export const errorHandler = (statusCode,message)=>{
    const error = new Error(); // JS function to give error
    error.statusCode = statusCode;
    error.message = message;
    return error;
}