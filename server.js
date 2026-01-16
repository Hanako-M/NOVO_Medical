 const express=require("express")
 const dotenv=require("dotenv")
 let connectDB=require("./config/connectDB.js")
// const custom_router=require("./routers/custom.routes.js")
 const admin_router=require("./routes/admin.routes.js")
 const prod_router=require("./routes/prod.routes.js")
// let todos=require("./models/todo.models.js")
// let users=require("./models/users.models.js")
const auth_router = require("./routes/auth.routes.js")
 const checkUser =require("./middlewares/auth.mid.js")
 const cookieParser = require("cookie-parser"); 
const mongoose=require("mongoose")
const app=express()
const port=3000 

dotenv.config();  //load env variables


//middlewares 
app.use(express.json())

/*{"title":"wallet",
"description":" leather wallet",
"price":90,
"category":"leathers",
"photo":"123pop1y2e",
"quantity":3
}*/ 
//app.get(checkUser);
app.use(cookieParser());
    connectDB().then(()=>{
        
    app.use("/",auth_router);
    app.use(checkUser);
    app.use("/admin",admin_router);
    app.use("/product",prod_router);

     app.listen(port,async()=>{ console.log(`server is running successfully, Hana!`)})
     }).catch(err => {
     console.error("❌ ERROR: Database connection failed");
        console.error(err);
   });
   