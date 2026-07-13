import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userid: Number,
    username: String,
    email: String,
    fullname: String,
    applicant:String    
})

// generate a model based off the schema (model name, schema, collection name)
export default mongoose.model("user", userSchema, "users");