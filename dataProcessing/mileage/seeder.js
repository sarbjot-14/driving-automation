import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
//import users from "./data/users.js";

import Note from "./noteModel.js";
import connectDB from "./db.js";




connectDB();

const existing = {"Waymo":3333}
const obj = {"name":"zoox","mileage":2333}
const newOne = {...existing, [obj['name']]: obj['mileage']}

console.log(newOne);
const importData = async () => {
  return;
  const notes = [
    {
      
      title: "Day 1 of college",
      content:
        "I made a few new friends and introduced myself to a lot of new teachers.",
      category: "College",
    },
    {
      
      title: "Learned some Node JS",
      content: "Learned how to create a server in node JS and my first API",
      category: "Learning",
    },
  ];
  try {
    await Note.deleteMany();
 
    await Note.insertMany(notes);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Note.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
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
