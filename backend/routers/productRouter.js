import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";
import mongoose from "mongoose";

const productRouter = express.Router();



productRouter.get("/", // API FOR ALL PRODUCTS
    expressAsyncHandler(async (req, res) => { // sending list of products to the frontend 
    const products = await Product.find({}); //return all products
    res.send(products);
}));

productRouter.get("/seed", //create products based on data.products 
    expressAsyncHandler(async(req,res) => { //id should be assigned automatically to the products thats why we remove id from data.js
    //await Products.remove({}); // remove all products    
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
}));



productRouter.get("/:id", //API FOR PRODUCT DETAILS
    expressAsyncHandler(async(req ,res) => { // returning details of the product to the frontend 
    const product = await Product.findById(req.params.id)//findById returns promise by using await it will be converted to the real data and set to product
    if(product){
        res.send(product);
        
    }else{
        res.status(404).send({message: "Ürün Bulunamadı!"});
    }

}));


export default productRouter;