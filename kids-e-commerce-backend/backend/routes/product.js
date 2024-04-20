const express = require("express");
const ProductCart = require("../models/ProductCart");
const savedProductCart = require("../models/savedProductCart");
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var fetchuser = require('../middleware/fetchuser');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const JWT_SECRET = "mmm";
const allproducts = mongoose.model('allproducts', {});
const allbestsellers = mongoose.model('bestsellers', {});

//ROUTE-1 fetch all product data using Get

router.get("/products", async (req, res) => {

    try {
      const product = await allproducts.find({});
      console.log("running from fetch product =",product)
      return res.json(product);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send({"error":error.message});
    }
  });


router.get("/products/electric-swing", async (req, res) => {

    try {
      const electricSwing = await allproducts.find({title:"Electric Baby Swing"});
      console.log("running from fetch product =",electricSwing)
      return res.json(electricSwing);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send({"error":error.message});
    }
  });


router.get("/products/baby-bed-with-net", async (req, res) => {

    try {
      const babyBed = await allproducts.find({title:"Baby Bed With Net"});
      console.log("running from fetch product =",babyBed)
      return res.json(babyBed);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send({"error":error.message});
    }
  });
router.get("/products/baby-palna", async (req, res) => {

    try {
      const babyPalna = await allproducts.find({title:"Baby palna"});
      console.log("running from fetch product =",babyPalna)
      return res.json(babyPalna);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send({"error":error.message});
    }
  });


  // ROUTE - fetch all bestsellers products

  router.get("/bestsellers", async (req, res) => {

    try {
      const bestseller = await allbestsellers.find({});
      return res.json(bestseller);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send({"error":error.message});
    }
  });


// Route-2 add product correspond to user using post
router.post(

  "/addproduct",fetchuser,
  async (req, res) => {

    try {
      const { productName, totalItem, productPrice } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ "error": errors.array() });
      }
    
      let existingProductCart = await ProductCart.findOne({ user: req.user.id, productName: productName });
    
      if (existingProductCart) {
        existingProductCart.totalItem = totalItem;
        existingProductCart.productPrice = productPrice;
        const updatedProductCart = await existingProductCart.save();
        return res.json({ "success": true, "savedproductCart": updatedProductCart });
      }
    
      const productCart = new ProductCart({
        productName,
        totalItem,
        productPrice,
        user: req.user.id
      });
    
      const savedProductCart = await productCart.save();
      res.json({ "success": true, "savedproductCart": savedProductCart });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ "error": "Internal server error" });
    }
    
   
  }
);

//ROUTE-3 fetch all product data correspond to user using get

router.get('/fetchalluserproduct',fetchuser, async (req,res)=>
{

    try{
   const productCart  = await ProductCart.find({user:req.user.id})
   
   res.json({"success":true, productCart:productCart});
    }
    catch(error){
        console.error(error.message)
        res.send({"error":error.message})
    }
    // res.json([])
})



router.get('/products/product', async(req, res) => {
  const searchQuery = req.query; // Get the search query from the request parameters

  const productdata = await allproducts.find(searchQuery);  
      // return res.json(product);\
      console.log(searchQuery);
   console.log(productdata)
  res.json(productdata);
});



//ROUTE to remove product from ProductCart Collection by its Id

router.delete('/removeproductcart/:id', async (req,res)=>
{
  

    try{
  const productCart = await ProductCart.deleteOne({ _id: req.params.id }).exec();
   
   res.json({"success":true, productCart:productCart});
    }
    catch(error){
        console.error(error.message)
        res.send({"error":error.message})
    }
   
})

// ROUTE to update ProductCart collection 


router.put('/updateproductcart/:id', async (req,res)=>
{
  const  id  = req.params.id;
  // const id = req.body.id;
  const  totalItem  = req.body;
  console.log(totalItem)

  try {
    const updatedProductCart = await ProductCart.findByIdAndUpdate(
      id,
      {$set:totalItem },
      { new: true }
    ).exec();

   

    if (!updatedProductCart) {
      return res.status(404).send('ProductCart not found');
    }

    res.send(updatedProductCart);
  } catch (error) {
    res.status(500).send('Error updating ProductCart');
  }
  

  //   try{
  //     const updatedProductCart = await ProductCart.findByIdAndUpdate(
  //       id,
  //       { totalitem },
  //       { new: true }
  //     ).exec();
   
  //  res.json({"success":true, productCart:updatedProductCart});
  //   }
  //   catch(error){
  //       console.error(error.message)
  //       res.send({"error":error.message})
  //   }
   
})

router.post('/productcartsaved',fetchuser, async(req,res)=>{


   const savedproductdata =  await Promise.all(req.body.productCart.map(async(data)=>{


    const productName = data.productName;
    const totalItem = data.totalItem;
    const productPrice =  data.productPrice;

    console.log('inside map',data.productName )

    const saved  = await savedProductCart.create({
      productName,
      totalItem,
      productPrice,
      user: req.user.id
    })
    return saved
  }))
  
  res.send(savedproductdata)

})

router.post('/payment',async(req,res)=>{
  res.send({"hello":"hello"})
})


module.exports = router;