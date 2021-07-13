import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderItems : [{
        name: {type: String, required:true},
        image: {type: String, required:true},
        price: {type: Number, required:true},
        product: {type: mongoose.Schema.Types.ObjectId, // Link to the product model  
                  ref: 'Product',
                  required: true,
                },
            },
        ],
    shippingAddress : {
        fullName : {type: String, required:true},
        address : {type: String, required:true},
        city : {type: String, required:true},
        postalCode : {type: String, required:true},
        country : {type: String, required:true},
    },
    itemsPrice: {type: String, required: true},
    shippingPrice: {type: String, required: true},
    totalPrice: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, required: true, 
           ref:'User',
           required:true},
    }, 
    {
    timestamps: true,
    }
);

const Order = mongoose.model('Order',orderSchema);
export default Order;