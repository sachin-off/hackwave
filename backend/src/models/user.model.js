import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required: true,
            unique: true
        },
        fullName:{
            type:String,
            required: true
        },
        password:{
            type:String,
            required: true,
            minlength:6
        },
        gender:{
            type:String,
            enum:["male","female","Not prefered"],
            required:true,            
        },
    },
    {timestamps:true}
)

const User = mongoose.model("User",userSchema);
export default User;