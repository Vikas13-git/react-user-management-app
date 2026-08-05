import User from "../models/User.js";
export const getUsers = async (request, response) => {
    try {
        const users = await User.find();

        return response.status(200).json(users);
    } catch {
        return response
            .status(500)
            .json({ message: "Unable to load users" });
    }
};
    export const getUserById = async(request,response) =>{
        const userId =request.params.id;
        try{
            const user = await User.findById(userId);

            if(!user){
                return response 
                .status(404)
                .json({ message: "User Not Found" });
            }
            return response.status(200).json(user);
        }catch(error){
            console.error("Get user error:",error.message);

            return response
            .status(500)
            .json({message: "Unable to load user" });
        }
    };
    export const createUser = async (request,response) =>{
        const {name,email,phone} = request.body;
        if(!name?.trim() || !email?.trim() || !phone?.trim()){
            return response .status(400) 
            .json({ message: "name,email and phone are required" });
        }
        try{
            const newUser = await User.create({
               name,
               email,
               phone 
            })
            return response .status(201) .json(newUser);
        }catch{
            return response .status(500).json({ message: "Unable to create user"})
        }
    };
    export const updateUser = async(request,response) =>{
        const userId = request.params.id;
        
        const {name,email,phone} = request.body;
        const updates={};

        if(name !== undefined){
        updates.name = name;
        }
        if(email !== undefined){
            updates.email = email;
        }
        if(phone !== undefined){
            updates.phone = phone;
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                updates,
            {
                
                returnDocument: "after",
                runValidators: true
            }
            );
            if(!updatedUser){
                return response
                .status(404)
                .json({ message:"User Not Found"});
            }
            return response 
            .status(200)
            .json(updatedUser)
       }catch(error){
    if(error.name === "ValidationError"){
    return response
    .status(400)
    .json({ message: "Invalid user data" });
}
console.error("PATCH user error:",error.message);

return response
.status(500)
.json({ message: "Unable to update user" });
}
};
export const deleteUser =async (request,response) =>{
    const userId =request.params.id;
    try{
        const deletedUser = await User.findByIdAndDelete(userId);
    if(!deletedUser){
        return response.status(404).json({ message:"User Not Found"});
    }
    return response.status(200).json(deletedUser);
    }catch{
        return response .status(500).json({ message:"Unable to delete user" });
    }
};
