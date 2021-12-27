import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
// import users from "./data/users.js";
// import notes from "./data/notes.js";
// import User from "./models/userModel.js";
// import Note from "./models/noteModel.js";
import Collison from "./collisionModel.js";
import connectDB from "./db.js";
import fs from "fs";


dotenv.config();

connectDB();



const importData = async () => {
  try {
    await Collison.deleteMany();
    // await User.deleteMany();

    //const createdUsers = await User.insertMany(users);

    //const adminUser = createdUsers[0]._id;

    // const sampleNotes = notes.map((note) => {
    //   return { ...note, user: adminUser };
    // });

    
    
    var obj = JSON.parse(fs.readFileSync('./output.json', 'utf8'));
    console.log(obj)

    await Collison.insertMany(obj);
    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};



if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
