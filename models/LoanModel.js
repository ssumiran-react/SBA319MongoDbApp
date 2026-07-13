import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
    loanid: String,
    userid: String,
    assignedid: String,
    assignedname: String,
    process:[{
        status: String,
        desc: String,
        date: String
    }],
    active: String
})

// generate a model based off the schema (model name, schema, collection name)
export default mongoose.model("loan", loanSchema, "loans");
