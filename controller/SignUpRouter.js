const express=require("express")
const SignUpModel=require("../model/SignUpModel")

const bcrypt=require("bcryptjs")
hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

const router=express.Router()

router.post("/add",async(req,res)=>{
let {data}={"data":req.body}
let password=data.password
const hashedPassword=await hashPasswordGenerator(password)
data.password=hashedPassword
let uerss=new SignUpModel(data)
let result=await uerss.save()
res.json({
    status:"success"
})
})

module.exports=router