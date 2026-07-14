import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    empid: String,
    username: String,
    email: String,
    fullname: String,
    role : String,
    project:String    
})
employeeSchema.index({empid:1});
employeeSchema.index({project:1});
// generate a model based off the schema (model name, schema, collection name)
export default mongoose.model("employee", employeeSchema, "employees");