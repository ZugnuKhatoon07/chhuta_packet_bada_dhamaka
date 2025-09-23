// import mongoose from "mongoose";
// import {DB_NAME} from "../constants.js";


// const connectDB = async () => {
//     try{
//         const connectionInstance = await mongoose.connect
//         (`${process.env.MONGODB_URL}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection,host}`);

//     }catch (error) {
//         console.log("MONGODB connection error ", error);
//         process.exit(1)
//     }
// }


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("MONGODB_URL:", process.env.MONGODB_URL);

    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;



