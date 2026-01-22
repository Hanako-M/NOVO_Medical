const admin=require('../modules/admin.mod.js');
//const customer=require('../modules/customer.mod.js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const zxcvbn = require('zxcvbn');


//creating tokens
const createtoken=(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:60*60*24*1000}/*1 day*/);
}

const adminSignUp = async (req, res) => {
    const { username,email, password} = req.body;
    console.log(username, email, password);

    try {
        const result = zxcvbn(password);
        if (result.score < 3) {
          return res.status(400).json({ message: "Password is too weak. Please use a stronger one." });
        }
        const newadmin = new admin({
            username,
            email,
            password
        });
        await newadmin.save();

        return res.status(201).json({
            success: true,
            message: "admin registered successfully"
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong" });
    }
};
const signIn=async(req,res)=>{
    const {username,password}=req.body;
    try{
        const found=  await admin.findOne({username});
       //if custfound is null then vendfound will be assigned to found
        console.log(found);
        if(found){
         const auth = await bcrypt.compare(password, found.password);
         console.log(found.password);
         if(auth){
            const token=createtoken(found._id);
           res.cookie("token", token, {
            httpOnly: true,    // prevents JS access
            sameSite: "lax",   // works for localhost cross-port
            secure: false,     // must be false on HTTP (localhost)
            path: "/",maxAge:60*60*24*1000});
            console.log("the token is",token);
            res.status(200).send({
              "success": true,
              "token":token,
              "admin":{
                "id":found._id,
                "username":found.username||found.name,
                "email":found.email
             }
          })
         }else{
            res.status(406).send({
                "success": false,
                "message": "incorrect auth email/password"
            })
         }
        }else{
            res.status(406).send({
                "success": false,
                "message": "User not found or incorrect email/password"
            })
        }
        
      }
      catch(err){
    
        res.send({
            "success": false,
            "message": "User not found or incorrect email/password"
        })
      }
}

const signOut = async (req, res) => {
    console.log("Before Clearing:", req.cookies.token); // Log the token before clearing

    // Expire the cookie
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    // console.log("After Clearing:", req.cookies.token); // Log the token after clearing
    res.status(200).send({
        success: true,
        message: "User signed out successfully"
    });
};

module.exports={
adminSignUp,
signIn,
signOut
}