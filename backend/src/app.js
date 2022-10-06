import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

//route
//connec data
mongoose.connect('mongodb://localhost:27017/serverduan')
    .then(() => console.log("Ket noi db thanh cong"))
    .catch((error) => console.log(error));


//connection
const PORT = 3005;
app.listen(PORT, () => {
    console.log("Server is running  port", PORT);
})