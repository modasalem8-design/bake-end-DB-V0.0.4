import db from "../sql&user/sql.js";
import express from 'express'
import router  from "../routs/user.js";
import bcrypt from "bcrypt"
const create = (express())
create.use(express.json())
create.post('/create', async (req, res) => {
    try {
        //  اتصال query
        const user=(router)
        const { name, pass } = req.body;
        const query = ("INSERT INTO `log`( `name`, `pass`) VALUES ('?','?')")
        
        const bcryptpass = bcrypt.hashSync(pass, 10);
        const [result] = await db.query(name, bcryptpass)
        res.status(202).json("connected in user")
        //  ايجاد مستخدم 
        const fU =name.find((Date)=>name=Date.name)
        if(fU){
            res.status(503).json("dont use the name" )
        }

    } catch(error){
        console.error("err in user")
        res.status(501).json("err in user create account .js")
     }
})
export default create;