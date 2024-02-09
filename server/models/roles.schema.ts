import mongoose , {Document, Schema, Types} from "mongoose";

interface Role extends Document {
    name: string , 
    permission : Types.ObjectId
  
} 

const RoleSchema = new mongoose.Schema({
    name: {
        type:String
    },
    permissions : [{
        type: Schema.Types.ObjectId,
        ref : "Permission"
    }]
})



const roleModel = mongoose.model<Role>("Role" , RoleSchema)
export default roleModel;