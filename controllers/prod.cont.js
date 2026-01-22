const products=require("../modules/prod.mod.js")


const viewProducts=async(req,res)=>{
    try{
        const product = await products.find(); // get all prods
        res.status(200).json({success:true,products:product});
        console.log({products:product});
    }catch(err){
        res.status(500).json({error:"something went wrong in viewing the products"});
    }
}

const searchProduct=async(req,res)=>{

    try{

    }catch(err){
        res.status(500).json({error:"something went wrong in searching the products"})
    }
}

module.exports={
    searchProduct,
    viewProducts
}