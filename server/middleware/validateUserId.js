import mongoose from "mongoose";

const validateUserId = (request,response,next) =>{
    const {id} = request.params;

    if(!mongoose.isValidObjectId(id)){
        return response
        .status(400)
        .json({ message: "Invalid user ID" });
    }
    next();
};
export default validateUserId;