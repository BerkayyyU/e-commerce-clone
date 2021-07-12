import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get(
    '/mine',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const orders = await Order.find({ user: req.user._id });
      res.send(orders);
    })
  );

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

orderRouter.get('/:id',isAuth, expressAsyncHandler(async(req, res)=>{ //Only authencitated user can see order details
    const order = await Order.findById(req.params.id);
    if(order){
        res.send(order);
    }else{
        res.status(404).send({message: 'Sipariş bulunamadı!'});
    }
})
); 

export default orderRouter;