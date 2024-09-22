import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

// Now we are verifying the token and to do that we need to take data from cookie and to get that we need another package called cookie-parser and then we need to initallize it in index.js
export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token; // access_token is the same name that we have given to the token in auth.controller.js

    if(!token) return next(errorHandler(401,'Unauthorized'));

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(errorHandler(403,'Forbidden'));

        req.user = user;
        next(); // This will save and then pass the info.. to the next section updateUser as what we have passed as a parameter in user.route.js
    })
}
