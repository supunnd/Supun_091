import express from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import recipeRoute from './routes/recipeRoute.js';
import cors from 'cors';

const app = express();

//cors policy
//option 1:
app.use(cors());
//option 2: Allow custom origins
//app.use(
//    cors({
 //       origin: 'http://localhost: 3000',
 //       methods: ['GET','POST','PUT','DELETE'],
//        allowedHeaders: ['Content-Type'],
 //   })
//);


app.get ('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Port is ready');
});

app.use('/recipe',recipeRoute);

mongoose
    .connect(mongoDBURL)
    .then (() => {
        console.log('App conected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch ((error) => {
        console.log(error);
    });