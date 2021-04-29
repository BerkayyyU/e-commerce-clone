import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config(); // to read .env file and use

const app = express();
app.use(express.json()); // parsing json datain the body of request
app.use(express.urlencoded( {extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/e-commerce", { // To connect with mongodb database. If MONGODB_URL exists us it otherwise use the other one.
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// app.get('/api/products/:id', (req, res)=>{
//     const product = data.products.find((x)=> x.id === req.params.id); We remove this cause of we no longer sending data from data.js statically. we are getting data from mongodb
//     if(product){
//         res.send(product);
//     }else{
//         res.status(404).send({message:'Ürün bulunamadı!'})
//     }
// });

app.use("/api/users", userRouter);

app.use("/api/products", productRouter); // responder is productRouter

// app.get('/api/products', (req, res)=>{ We remove this cause of we no longer sending data from data.js statically. we are getting data from mongodb
//     res.send(data.products);
// });

app.get('/', (req, res) => {
    res.send("Server hazır");
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message}); // error wil be directed to this function from userRouter expressasynchandler and the same error wil be send back to frontend
});

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
});