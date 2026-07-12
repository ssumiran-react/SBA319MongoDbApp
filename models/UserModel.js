import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userid: String,
    username: String,
    email: String,
    fullname: String,
    role: String,
    projectname:String
    
})

// generate a model based off the schema (model name, schema, collection name)
export default mongoose.model("user", userSchema, "users");