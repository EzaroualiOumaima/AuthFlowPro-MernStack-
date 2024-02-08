import mongoose , {Document} from "mongoose";

interface Permission extends Document {
    name:string
}

const PemissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    }
})

const permissionModel = mongoose.model<Permission>("Permission" , PemissionSchema);
export default permissionModel;
