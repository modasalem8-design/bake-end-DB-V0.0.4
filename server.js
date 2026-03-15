//استدعائات
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
// import db from "./sql-DB/sql.js"
import router from "./routs/user.js"
import create from './userController/usecre.js';
import sign from './userController/usersign.js';
import up from './routs/upload.js';
import del from './userController/del.js';
//تعريفات
const app = express();
dotenv.config()
//الربط بين الموقع والباك
app.use(express.json())
app.use(cors())
dotenv.config
app.use(router)
//استدعائات انشاء الحساب
app.use(create)
//استدعائات تسجيل الدخول
app.use(sign)
app.use(up)
app.use(del)
const PORT = process.env.PORT||5000 ;
app.get('/', async (req, res) => {
    res.status(203).json("connect in server")
})
console.log("connect in server")
// تشغيل سيرفر
app.listen(PORT, () => {
    console.log(`server in ${PORT}`);
})