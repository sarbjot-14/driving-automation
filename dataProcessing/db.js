//Connection file to mongo db
import mongoose from "mongoose";
import colors from "colors";
import dotenv from 'dotenv';

dotenv.config({path:'../.env'});


const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

export default connectDB;
