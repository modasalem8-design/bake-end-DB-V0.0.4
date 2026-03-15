// تعريفات 
import { JsonWebTokenError } from "jsonwebtoken"
import jwt from "jsonwebtoken"
import db from "./sql.js"
import create from "../userController/usecre.js"
// ربط القاعدة
exports.create=async(req,res)=>{
    try{
        const {name,pass}=req.body
        const u= newUser({name,pass})
    }catch{}
}

