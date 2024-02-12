import mongoose , {Document, Schema, Types} from "mongoose";

interface Role extends Document {
    name: string , 
    permissions: Array<string>;
  
} 

const RoleSchema = new mongoose.Schema({
    name: {
        type:String,
        unique:true
    },
    
    permissions : [{
        type: Schema.Types.ObjectId,
        ref : "Permission"
    }]
})



const roleModel = mongoose.model<Role>("Role" , RoleSchema)
export default roleModel;


// "65c9081875ea2e086a8b9a1c", 
// "65c9083975ea2e086a8bac21",
// "65c9087675ea2e086a8bcf1c",
// "65c9094975ea2e086a8c8009",
// "65c9095b75ea2e086a8c89ec",
// "65c9097c75ea2e086a8c9c3e",
// "65c909a575ea2e086a8cb3d6",
// "65c909be75ea2e086a8cc1af",
// "65c909dc75ea2e086a8cd31a",
// "65c90a0e75ea2e086a8d0785",
// "65c90a1f75ea2e086a8d11bd",
// "65c90a3875ea2e086a8d1f86"
