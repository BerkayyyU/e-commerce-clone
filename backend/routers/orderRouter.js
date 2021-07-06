import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post('/',isAuth,expressAsyncHandler(async(req, res)=>{
    if(req.body.orderItems.length === 0){ // Siparişe gitmeden önce sepette ürün var mı kontrol et
        res.status(400).send({message: "Sepet boş!"});
    }else{
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            //taxPrice: req.body.taxPrice,
            totalPrice : req.body.totalPrice,
            user: req.user._id,
        });
        const createdOrder = await order.save();
        res.status(201).send({message:"Yeni sipariş eklendi!", order: createdOrder});
        }
    })
);

export default orderRouter;