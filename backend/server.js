import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config(); // to read .env file and use

const app = express();
app.use(express.json()); // parsing json data in the body of request
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  // To connect with mongodb database. If MONGODB_URL exists use it otherwise use the other one.
});

// app.get('/api/products/:id', (req, res)=>{
//     const product = data.products.find((x)=> x.id === req.params.id); We remove this cause of we no longer sending data from data.js statically. we are getting data from mongodb
//     if(product){
//         res.send(product);
//     }else{
//         res.status(404).send({message:'Ürün bulunamadı!'})
//     }
// });

app.use('/api/users', userRouter);

app.use('/api/products', productRouter); // responder is productRouter

app.use('/api/orders', orderRouter);

// app.get('/api/products', (req, res)=>{ We remove this cause of we are no longer sending data from data.js statically. we are getting data from mongodb
//     res.send(data.products);
// });

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build'))); // serve all files inside the frontend build folder as a static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html')); // Everything that user enter after the website, domain  or server name is going to be served by index.html file
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message }); // error wil be directed to this function from userRouter expressasynchandler and the same error wil be send back to frontend
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

// "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
