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
// In your main server file (app.js or server.js)
 const cors = require('cors');
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
app.get(checkUser);
app.use(cors());
app.use(cookieParser());
    connectDB().then(()=>{
         app.use("/products",prod_router);
    app.use("/auth",auth_router);
    app.use(checkUser);
    app.use("/admin",admin_router);
   
//{ "name":"panadol","description":"medicine for nothing", "image":"https://cdn11.bigcommerce.com/s-vhzbg5/products/1508/images/3752/apilzb7wx__29984.1499347631.500.750.jpg?c=2", "category":"medicine","brand":"ck" } 
     app.listen(port,async()=>{ console.log(`server is running successfully, Hana!`)})
     }).catch(err => {
     console.error("❌ ERROR: Database connection failed");
        console.error(err);
   });
   