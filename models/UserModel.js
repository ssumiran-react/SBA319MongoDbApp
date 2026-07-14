import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userid: Number,
    username: String,
    email: String,
    fullname: String,
    applicant:String    
})
userSchema.index({ userid: 1 });
// generate a model based off the schema (model name, schema, collection name)
export default mongoose.model("user", userSchema, "users");