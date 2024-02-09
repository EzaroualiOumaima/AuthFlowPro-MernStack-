import mongoose , {Document, Schema, Types} from "mongoose";

interface IUser extends Document {
    name: string , 
    email : string,
    password : string,
    role : Types.ObjectId
} 

// define schema for user 

const UserSchema = new mongoose.Schema({
    name:{
        type: String ,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique :true,
        lowercase : true
    },
    password: {
        type:String,
        
    } ,
    role: {
        type: Schema.Types.ObjectId,
        ref: "Role" 
    }

    
})

const userModel = mongoose.model<IUser>("User" , UserSchema)
export default userModel;
   

