import mongoose from "mongoose";

let dbConn;
try {
  const conn = await mongoose.connect(process.env.ATLAS_URI); 
  //dbConn = conn.db("bank_loan");
  console.log("conn in DB");
} catch (e) {
  console.error(e);
}

export default dbConn; 

