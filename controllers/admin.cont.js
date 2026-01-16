const admin=require("../modules/admin.mod.js")
const products=require("../modules/prod.mod.js")

const postProducts = async (req, res) => {
    const { name,description, image, category,brand } = req.body;
    const { userid } = req.user;
    
    try {
        const admins = await admin.findById(userid);
   
        const newproduct = new products({
           name,
            description,
           image,
         category, 
           brand
           
        });
       
        await newproduct.save();

        res.status(200).json({ success: true, message: "Product added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong in adding a product" });
    }
};

const viewProducts=async(req,res)=>{
    const {userid}=req.user;
    try{
        const product = await products.find(); // get all prods
        res.status(200).json({success:true,products:product});
    }catch(err){
        res.status(500).json({error:"something went wrong in viewing the products"});
    }
}

const removeProduct=async(req,res)=>{
    const { productid } = req.body;
const { userid } = req.user;

try {
    const admins= await admin.findById(userid);
    if (!admins) {
        return res.status(403).json({ success: false, message: "Unauthorized to delete this product" });
    }

    const product = await products.findById(productid);
    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }
    await product.deleteOne();
    
    res.status(200).json({ success: true, message: "Product removed successfully" });

} catch (err) {
    console.error("Remove product error:", err);
    res.status(500).json({ error: "Something went wrong while removing the product" });
}

}
///////////////////////////////////needs something////////////////////////////////////////
const updateProduct = async (req, res) => {
    const { productid, title, description, price, category, photo, quantity } = req.body;
    const { userid } = req.user;

    try {
        const vendor = await vendors.findById(userid);
        if (!vendor) {
            return res.status(404).json({ success: false, message: "Vendor not found" });
        }

        const product = await products.findById(productid);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        if (product.vendor.toString() !== userid) {
            return res.status(403).json({ success: false, message: "Unauthorized to update this product" });
        }

        if (title) product.title = title;
        if (description) product.description = description;
        if (price) product.price = price;
        if (category) product.category = category;
        if (photo) product.photo = photo;
        if (quantity) product.quantity = quantity;

        await product.save();

        res.status(200).json({ success: true, message: "Product updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Something went wrong in updating the product" });
    }
};

const editInfo=async(req,res)=>{
    const {userid}=req.user;
    const {name,email,phone,company}=req.body;
    try{
        const vendor=await vendors.findById(userid);
        if(!vendor){
            return res.status(404).json({success:false,message:"vendor not found"});
        }
        if(name) vendor.name=name;
        if(email) vendor.email=email;
        if(phone) vendor.phone=phone;
        if (company) {
            vendor.company = company; // Initially assign the name
        
            let companyFound = await companies.findOne({ name: company });
        
            if (!companyFound) {
                try {
                    companyFound = await companies.create({ name: company });
                } catch (err) {
                    console.error("Company creation error:", err);
                }
            }
        
            if (companyFound) {
                vendor.company = companyFound._id; // Assign ObjectId correctly
            }
        }

        await vendor.save();
       
        res.status(200).json({success:true,message:"info updated successfully"});
    }catch(err){
        console.log(err)    
        res.status(500).json({error:"something went wrong in updating the info"});
    }
}
const viewInfo=async(req,res)=>{
    const {userid}=req.user;
    try{
        const vendor=await vendors.findById(userid);
        res.status(200).json({success:true,
            name:vendor.name,
            email:vendor.email,
            phone:vendor.phone,
            company:vendor.company,
            products:vendor.products,
        });
    }catch(err){
        res.status(500).json({error:"something went wrong in viewing the info"});
    }
}

  
  
module.exports={editInfo,postProducts,viewProducts,removeProduct,updateProduct,viewInfo}