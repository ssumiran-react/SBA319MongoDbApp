import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    empid: String,
    username: String,
    email: String,
    fullname: String,
    role : String,
    project:String    
})
    
// generate a model based off the schema (model name, schema, collection name)
export default mongoose.model("employee", userSchema, "employees");