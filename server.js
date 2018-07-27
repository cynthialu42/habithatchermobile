import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/habithatcher");


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})