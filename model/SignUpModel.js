const mongoose=require("mongoose")

const SignUpSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"SignUpModel"
        },
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        emailId:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("signups",SignUpSchema)